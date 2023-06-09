
/**
 * @createDate 2019-8-25 15:01:48
*/
import { defineComponent, nextTick, createVNode as h, shallowRef as sr, shallowReactive, onMounted, onUnmounted } from 'vue'
import { Message, Row, Col, Card, CellGroup, Cell, ButtonGroup, Button, Input, Switch, RadioGroup, Radio, Modal, Divider } from 'view-ui-plus'
import Viewer from 'viewerjs'
import * as utils from '../utils'
import { formatSize, KeyboardHandler } from '../utils'
import { gmxhr, fetch } from '../ddplay-api'
import DropFile from './drop-file.vue'
import PlayList from './play-list.vue'
import DPlayerVue from './dplayer.vue'
import DDPlayVue from './ddplay-api.vue'

const name = 'Media Player'
export default defineComponent({
  name,
  setup(props) {
    const opts = {
      size: 1,
      visiblePause: false
    }
    try { Object.assign(opts, JSON.parse(localStorage.getItem('player-options'))) } catch (e) { }
    const aborter = new AbortController()
    return {
      aborter,
      playerOptions: opts,
      globalKeydownMap: new Map(),
      sizes: ['960*0', '960*540', '1280*720'],
      relativeSeeks: [
        -95, -10, -5, { value: -1 / 30, slot: '-1帧' }, { value: 1 / 30, slot: '1帧' }, 5, 10, 85
      ],
      imageType: 'image/png',
      viewer: null,
      keybord: new KeyboardHandler(document, aborter.signal),
      playList: sr(null),
      player: sr(null)
    }
  },
  data() {
    const { sizes, playerOptions } = this
    return {
      size: sizes[playerOptions.size] ?? sizes[1],
      list: [],
      file: null,
      title: ''
    }
  },
  watch: {
    title(title) {
      document.title = (title ? title + ' - ' : '') + name
    }
  },
  methods: {
    options() {
      const vm = this, { sizes } = vm
      const opts = shallowReactive(vm.playerOptions)
      Modal.confirm({
        title: '设置',
        width: 600,
        render() {
          return h('div', null, [
            h(CellGroup, null, [
              h(Cell, { title: '默认尺寸' }, {
                extra: () => h(RadioGroup, {
                  type: 'button',
                  modelValue: opts.size,
                  'onUpdate:modelValue'(index) { opts.size = index }
                }, () => Array.from(sizes, (size, index) => h(Radio, { label: index }, () => size)))
              }),
              h(Cell, { title: '页面不可见时暂停' }, {
                extra: () => h(Switch, {
                  modelValue: opts.visiblePause,
                  'onUpdate:modelValue'(value) { opts.visiblePause = value }
                })
              }),
              h(Cell, { title: '油猴脚本' }, {
                extra: () => h(Button, {
                  type: 'button',
                  onClick() {
                    const srcipt = utils.createUserScript()
                    const a = document.createElement('a')
                    a.href = URL.createObjectURL(new Blob([srcipt], { type: 'text/plain' }))
                    a.target = '_blank'
                    a.click()
                  }
                }, () => 'GM_fetch')
              }),
              h(Cell, { title: 'web+player: 协议处理器' }, {
                extra: () => h(Button, {
                  type: 'button',
                  onClick() {
                    const href = new URL(location.pathname, location.href).href
                    navigator.registerProtocolHandler('web+player', `${href}#.=%s`)
                  }
                }, () => '注册')
              })
            ])
          ])
        },
        onOk() {
          localStorage.setItem('player-options', JSON.stringify(vm.playerOptions))
        }
      })
    },
    handleChange(files) {
      this.list = files
    },
    async loadVideoAndPlay(urlOrFile, title) {
      if (urlOrFile instanceof Blob) {
        await this.loadVideoFromFile(urlOrFile)
      } else {
        await this.loadVideoFromUrl(urlOrFile, title)
      }
      this.player.play()
    },
    loadVideoFromUrl(url, title) {
      const vm = this, { player } = vm, { video } = player
      url = String(url)
      if (url.startsWith('web+player:')) {
        const $ = new URL(url).searchParams
        url = $.get('url')
        title = $.get('title')
      }
      title ??= ''
      URL.revokeObjectURL(video.src)
      video.src = url
      vm.title = title; vm.file = null
      Message.info('加载: ' + title)
      const { mediaSession: ms } = navigator
      if (ms != null) { ms.metadata = new MediaMetadata({ title }) }
      let canplay = utils.waitEvent(video, 'canplay')
      if (/^https?:/.test(url)) {
        if (gmxhr != null) { canplay = canplay.catch(vm.loadVideoBackupGmxhr) }
      }
      vm.canplay = canplay
      return canplay
    },
    loadVideoFromFile(file) {
      const vm = this
      let src = URL.createObjectURL(file)
      let name = (file.name ?? '').replace(/\.[^.]+$/, '')
      const canplay = vm.loadVideoFromUrl(src, name)
      vm.file = file
      return canplay
    },
    loadVideoBackupGmxhr(e) {
      if (gmxhr == null) { return }
      const { title, player } = this
      const dp = player.player
      const video = e?.target ?? player.video
      const { src, error } = video
      error != null && console.warn(error, error.code, error.message)
      Modal.confirm({
        title: '视频加载失败',
        content: src + '<br>要使用 GM_xmlhttpRequest 吗？',
        onOk() {
          gmxhr({
            url: src, responseType: 'blob',
            onload(e) {
              vm.loadVideoFromUrl(URL.createObjectURL(e.response), title).then(() => {
                dp.notice('使用 GM_xmlhttpRequest 加载成功', void 0, void 0, 'gmxhr')
              })
            },
            onerror({ error }) {
              dp.notice('使用 GM_xmlhttpRequest 加载失败: ' + error, void 0, void 0, 'gmxhr')
            },
            onprogress({ loaded, total, lengthComputable }) {
              dp.notice(
                lengthComputable
                  ? `${formatSize(loaded)}/${formatSize(total)}(${(100 * loaded / total).toFixed(2)}%)`
                  : `${formatSize(loaded)}/unknow`,
                0, void 0, 'gmxhr'
              )
            }
          })
        }
      })
    },
    prev() {
      this.playList.prev()
    },
    next() {
      this.playList.next()
    },
    handleDanmaku(dan) {
      this.player.readDanmaku(dan)
    },
    relativeSeek(time) {
      this.player.relativeSeek(time)
    },
    relativeVolume(value) {
      this.player.relativeVolume(value)
    },
    playpause() {
      this.player.playpause()
    },
    captureImage() {
      const { video } = this.player
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        Message.warning('没有视频'); return
      }
      utils.captureVideoToImage(video, this.imageType).then(blob => {
        const { image } = this.$refs
        URL.revokeObjectURL(image.src)
        image.src = URL.createObjectURL(blob)
        image.dataset.filename = utils.formatTime(video.currentTime, '-') + '.png'
        Message.info('截图成功')
      }, e => {
        Message.error('截图失败')
        throw e
      })
    },
    saveImage() {
      const { image } = this.$refs, { src } = image
      src && utils.download(src, image.dataset.filename)
    },
    showImage() {
      const vm = this
      const viewer = new Viewer(vm.$refs.image, {
        hidden() {
          viewer.destroy()
          vm.viewer = null
        }
      })
      vm.viewer = viewer
      viewer.show()
    },
    handlePopstate(e) {
      let { hash } = location
      if (!hash) { return }
      hash = hash.slice(1)
      let params = new URLSearchParams(hash)
      let url = params.get('.') ?? `web+player:?${hash}`
      this.$refs.input.currentValue = url
      this.loadVideoFromUrl(url)
    }
  },
  mounted() {
    const vm = this, { keybord } = vm, { signal } = vm.aborter
    nextTick(vm.handlePopstate)
    keybord.set(' ', null, vm.playpause)
    keybord.set('ArrowUp', () => vm.relativeVolume(0.1))
    keybord.set('ArrowDown', () => vm.relativeVolume(-0.1))
    keybord.set('PageUp', vm.prev)
    keybord.set('PageDown', vm.next)
    keybord.set('ArrowLeft', null, () => vm.relativeSeek(-5))
    keybord.set('ArrowRight', (e, repeat) => {
      if (repeat === 1) { vm.player.speed(3) }
    }, (e, repeat) => {
      if (repeat > 0) { vm.player.speed(1); return }
      vm.relativeSeek(5)
    })
    window.addEventListener('popstate', vm.handlePopstate, { capture: true, signal })
    let isPaused = false
    document.addEventListener('visibilitychange', (e) => {
      const { visiblePause } = vm.playerOptions.visiblePause
      switch (e.target.visibilityState) {
        case 'visible':
          if (visiblePause && isPaused) { vm.player.play() }
          isPaused = false
          vm.player.seekDanmaku()
          break
        case 'hidden':
          isPaused = !(vm.player.video.paused ?? true)
          if (visiblePause && isPaused) { vm.player.pause() }
          break
      }
    }, { signal })
    window.addEventListener('beforeunload', e => {
      const dur = vm.player.video.duration
      if (dur === dur) { e.preventDefault() }
    }, { capture: true, signal })
    const { mediaSession: ms } = navigator
    if (ms != null) {
      ms.setActionHandler('seekbackward', () => vm.relativeSeek(-5))
      ms.setActionHandler('seekforward', () => vm.relativeSeek(5))
      ms.setActionHandler('previoustrack', vm.prev)
      ms.setActionHandler('nexttrack', vm.next)
      signal.addEventListener('abort', e => {
        ms.setActionHandler('seekbackward', null)
        ms.setActionHandler('seekforward', null)
        ms.setActionHandler('previoustrack', null)
        ms.setActionHandler('nexttrack', null)
      })
    }
    document.title = name
  },
  beforeUnmount() {
    this.aborter.abort()
    document.title = name
  },
  render(_, cache, props, setup, data, ctx) {
    const vm = this, size = vm.size.split('*')
    return [
      h('div', { class: 'container' }, [
        h(Row, { gutter: 5 }, cache[__LINE__] ??= () => [
          h(Col, { span: 12 }, cache[__LINE__] ??= () => [
            h(Input, {
              ref: 'input',
              search: true,
              enterButton: '提交',
              onOnSearch: vm.loadVideoFromUrl
            }),
            h(DropFile, {
              style: 'margin-top: 6px',
              ref: 'drop',
              global: true,
              accept: 'audio/*,video/*',
              onChange: vm.handleChange
            })
          ]),
          h(Col, { span: 12 }, cache[__LINE__] ??= () => [
            h(Card, { padding: 0 }, cache[__LINE__] ??= () => [
              h(CellGroup, { style: 'padding: 0px' }, cache[__LINE__] ??= () => [
                h(PlayList, {
                  ref: 'playList',
                  list: vm.list,
                  onPlay: vm.loadVideoAndPlay
                }),
                h(Cell, { title: '尺寸' }, cache[__LINE__] ??= {
                  extra: () => h(RadioGroup, {
                    type: 'button',
                    modelValue: vm.size,
                    'onUpdate:modelValue'(value) { vm.size = value }
                  }, cache[__LINE__] ??= () => Array.from(vm.sizes, size => h(Radio, { label: size }, () => size))),
                }),
                h(Cell, { title: '快进快退' }, cache[__LINE__] ??= {
                  extra: () => h(ButtonGroup, null, cache[__LINE__] ??= () => Array.from(vm.relativeSeeks, (seek) => {
                    const { value, slot } = (typeof seek == 'number' ? { value: seek, slot: String(seek) } : seek)
                    return h(Button, {
                      onClick() { vm.relativeSeek(value) }
                    }, () => slot)
                  }))
                }),
                h(DDPlayVue, {
                  ref: 'danmaku',
                  file: vm.file, title: vm.title,
                  onDanmaku: vm.handleDanmaku
                }),
                h(Cell, { title: '\u3000' }, cache[__LINE__] ??= {
                  extra: () => h(ButtonGroup, null, () => [
                    h(Button, { onClick: vm.options }, () => '设置'),
                    h(Button, { onClick: vm.captureImage }, () => '截图'),
                    h(Button, { onClick: vm.saveImage }, () => '保存截图')
                  ])
                })
              ])
            ])
          ])
        ])
      ]),
      h(Divider, { style: 'margin: 10px 0' }),
      h(DPlayerVue, { ref: 'player', width: +size[0], height: +size[1] }),
      h(Divider, { style: 'margin: 10px 0' }),
      h(Card, { style: 'margin: 10px; width: 234px' }, cache[__LINE__] ??= () => h('img', {
        ref: 'image', style: 'width: 100%', onClick: vm.showImage
      }))
    ]
  }
})
