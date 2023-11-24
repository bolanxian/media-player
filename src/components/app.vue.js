
/**
 * @createDate 2019-8-25 15:01:48
*/
import { defineComponent, createVNode as h, shallowRef as sr, shallowReactive, createApp, onBeforeUnmount } from 'vue'
import { Message, Row, Col, Card, CellGroup, Cell, ButtonGroup, Button, Input, Switch, RadioGroup, Radio, Modal, Divider } from 'view-ui-plus'
import Viewer from 'viewerjs'
import * as utils from '../utils'
import { gmxhr, formatSize, download } from '../utils'
import { noop, bind, $number, $string, on, document, setTitle } from '../bind'
import { createAborter, onAbort } from '../aborter'
import { KeyboardHandler } from '../keyboard'
import { getState, getPopState, pushState, replaceState, buildState } from '../history'
import *  as external from '../external'
import BarVue from './bar.vue'
import DropFile from './drop-file.vue'
import PlayList from './play-list.vue'
import DPlayerVue from './dplayer.vue'
import DDPlayVue from './ddplay-api.vue'

const { toFixed } = $number
const { startsWith } = $string
const { mediaSession } = navigator
let setActionHandler = noop
if (typeof MediaSession === 'function') {
  setActionHandler = bind(MediaSession.prototype.setActionHandler, mediaSession)
}

const name = 'Media Player'
export const App = defineComponent({
  name,
  setup(props) {
    const opts = {
      size: 1,
      visiblePause: false
    }
    try { Object.assign(opts, JSON.parse(localStorage.getItem('player-options'))) } catch (e) { }
    const { abort, signal } = createAborter()
    onBeforeUnmount(abort)
    return {
      signal,
      playerOptions: opts,
      sizes: ['960*0', '960*540', '1280*720'],
      relativeSeeks: [
        -95, -10, -5, { value: -1 / 30, slot: '-1帧' }, { value: 1 / 30, slot: '1帧' }, 5, 10, 85
      ],
      imageType: 'image/png',
      viewer: null,
      keyboard: new KeyboardHandler(document, signal),
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
      title: null
    }
  },
  watch: {
    title: {
      handler(title) {
        if (title) {
          setTitle(`${title} - ${name}`)
          if (mediaSession != null) { mediaSession.metadata = new MediaMetadata({ title }) }
          setTimeout(Message.message, 0, 'info', '加载: ' + title)
        } else {
          setTitle(name)
        }
      },
      immediate: true,
      flush: 'sync'
    }
  },
  methods: {
    options() {
      const vm = this, { sizes } = vm
      const opts = shallowReactive(vm.playerOptions)
      const redirector = shallowReactive({ loading: false, disabled: false })
      Modal.confirm({
        title: '设置',
        width: 600,
        render() {
          return h('div', null, [
            h(CellGroup, null, () => [
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
                extra: () => h(ButtonGroup, null, () => [
                  gmxhr == null ? null : h(Button, {
                    type: 'button',
                    loading: redirector.loading,
                    disabled: redirector.disabled,
                    async onClick() {
                      try {
                        redirector.loading = true
                        const srcipt = await external.createRedirector()
                        const url = URL.createObjectURL(new Blob([srcipt], { type: 'text/plain' }))
                        download(url)
                        redirector.loading = false
                      } catch (e) {
                        redirector.disabled = true
                        throw e
                      }
                    }
                  }, () => external.redirectorName),
                  h(Button, {
                    type: 'button',
                    onClick() {
                      const srcipt = external.createUserScript()
                      const url = URL.createObjectURL(new Blob([srcipt], { type: 'text/plain' }))
                      download(url)
                    }
                  }, () => 'GM_fetch')
                ])
              }),
              h(Cell, { title: 'web+player: 协议处理器' }, {
                extra: () => h(Button, {
                  type: 'button',
                  onClick() {
                    const href = new URL(location.pathname, location.href).href
                    navigator.registerProtocolHandler('web+player', `${href}#!%s`)
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
    $_loadVideo(url) {
      const vm = this, { player } = vm, { video } = player
      URL.revokeObjectURL(video.src)
      video.src = url
      return utils.waitEvent(video, 'canplay')
    },
    loadVideoFromUrl(url, title) {
      const vm = this
      if (startsWith(url, 'web+player:')) {
        const $ = new URL(url).searchParams
        url = $.get('url')
        title = $.get('title')
      }
      url = String(url)
      title ??= ''
      let canplay = vm.$_loadVideo(url, title)
      const state = { title, url }
      pushState(state); vm.title = title; vm.file = null
      if (/^https?:/.test(url)) {
        if (gmxhr != null) { canplay = canplay.catch(vm.loadVideoBackupGmxhr) }
      }
      vm.canplay = canplay
      return canplay
    },
    loadVideoFromFile(file) {
      const vm = this
      let url = URL.createObjectURL(file)
      let title = (file.name ?? '').replace(/\.[^.]+$/, '')
      const canplay = vm.$_loadVideo(url, title)
      const state = { title }, setState = vm.file == null ? pushState : replaceState
      setState(state); vm.title = title; vm.file = file
      vm.canplay = canplay
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
              vm.$_loadVideo(URL.createObjectURL(e.response), title).then(() => {
                dp.notice('使用 GM_xmlhttpRequest 加载成功', void 0, void 0, 'gmxhr')
              })
            },
            onerror({ error }) {
              dp.notice('使用 GM_xmlhttpRequest 加载失败: ' + error, void 0, void 0, 'gmxhr')
            },
            onprogress({ loaded, total, lengthComputable }) {
              dp.notice(
                lengthComputable
                  ? `${formatSize(loaded)}/${formatSize(total)}(${toFixed(100 * loaded / total, 2)}%)`
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
      src && download(src, image.dataset.filename)
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
    }
  },
  mounted() {
    const vm = this, { signal } = vm
    const handlePopstate = e => {
      let state = e != null ? getPopState(e) : getState()
      try {
        if (state == null) { state = buildState() }
      } finally {
        if (state == null) {
          vm.title = ''
          return
        }
        const { title, url } = state
        if (url != null) {
          vm.$refs.input.currentValue = url
          vm.$_loadVideo(url, title)
          vm.title = title
        } else {
          replaceState(null)
          vm.title = ''
        }
      }
    }
    utils.onLoad(() => {
      on(window, 'popstate', handlePopstate, { capture: true, signal })
      handlePopstate()
    })
    const { keyboard } = vm
    keyboard.set(' ', null, vm.playpause)
    keyboard.set('ArrowUp', () => vm.relativeVolume(0.1))
    keyboard.set('ArrowDown', () => vm.relativeVolume(-0.1))
    keyboard.set('PageUp', vm.prev)
    keyboard.set('PageDown', vm.next)
    keyboard.set('ArrowLeft', null, () => vm.relativeSeek(-5))
    keyboard.set('ArrowRight', (e, repeat) => {
      if (repeat === 1) { vm.player.speed(3) }
    }, (e, repeat) => {
      if (repeat > 0) { vm.player.speed(1); return }
      vm.relativeSeek(5)
    })
    let isPaused = false
    on(document, 'visibilitychange', (e) => {
      const { visiblePause } = vm.playerOptions
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
    on(window, 'beforeunload', e => {
      const dur = vm.player.video.duration
      if (dur === dur) { e.preventDefault() }
    }, { capture: true, signal })

    const barInst = createApp(BarVue, { video: vm.player.video })
    const barContainer = document.createElement('div')
    barInst.mount(barContainer)
    document.body.append(barContainer)
    onAbort(signal, barInst.unmount)

    if (mediaSession != null) {
      setActionHandler('seekbackward', () => vm.relativeSeek(-5))
      setActionHandler('seekforward', () => vm.relativeSeek(5))
      setActionHandler('previoustrack', vm.prev)
      setActionHandler('nexttrack', vm.next)
      onAbort(signal, (reason) => {
        setActionHandler('seekbackward', null)
        setActionHandler('seekforward', null)
        setActionHandler('previoustrack', null)
        setActionHandler('nexttrack', null)
      })
    }
  },
  beforeUnmount() {
    this.title = null
  },
  render(_, cache, props, setup, data, ctx) {
    const vm = this, size = vm.size.split('*')
    return [
      h('div', { class: 'container', style: 'margin-top: 6px' }, [
        h(Row, { gutter: 6 }, cache[__LINE__] ??= () => [
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
                    return h(Button, { onClick() { vm.relativeSeek(value) } }, () => slot)
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
      h('div', { class: 'container', style: 'margin-bottom: 24px' }, [
        h(Card, { style: 'width: 274px' }, cache[__LINE__] ??= () => h('img', {
          ref: 'image', style: 'width: 100%', onClick: vm.showImage
        }))
      ])
    ]
  }
})
