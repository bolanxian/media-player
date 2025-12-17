
/**
 * @createDate 2019-8-25 15:01:48
*/
const name = 'Media Player'
import { defineComponent, createVNode as h, shallowRef as sr, shallowReactive, onBeforeUnmount } from 'vue'
import { Message, Row, Col, Card, CellGroup, Cell, ButtonGroup, Button, Input, Switch, RadioGroup, Radio, Modal, Poptip, Slider, Icon } from 'view-ui-plus'
import Viewer from 'viewerjs'
import * as utils from '../utils'
import { gmxhr, formatSize, download } from '../utils'
import { $number, $string, $array, on, fromEntries, document, setTitle, canHover, mediaSession, setActionHandler } from '../bind'
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
const { from } = Array, { findIndex } = $array
const trigger = canHover ? 'hover' : 'click'

const speedList = from(function* (i) {
  for (; i < 100; i += 1) { yield i }
  for (; i < 300; i += 5) { yield i }
  for (; i <= 500; i += 10) { yield i }
}(50), i => i / 100)
const marks = fromEntries(function* () {
  for (const speed of [.5, .75, 1, 2, 3, 4, 5]) {
    yield [findIndex(speedList, i => i === speed), `${speed}×`]
  }
}())
const sizes = ['960*0', '960*540', '1280*720']
const relativeSeeks = [...function* () {
  for (const seek of [
    -95, -10, -5,
    { value: -1 / 30, slot: '-1帧' },
    { value: 1 / 30, slot: '1帧' },
    5, 10, 85,
  ]) {
    yield typeof seek == 'number' ? { value: seek, slot: String(seek) } : seek
  }
}()]

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
      viewer: null,
      keyboard: new KeyboardHandler(document, signal),
      playList: sr(null),
      player: sr(null)
    }
  },
  data() {
    const { playerOptions } = this
    return {
      extra: false,
      size: sizes[playerOptions.size] ?? sizes[1],
      list: [],
      file: null,
      title: null,
      preservesPitch: true,
      speedIndex: findIndex(speedList, i => i === 1),
      playbackRate: 1,
      error: null,
      retryLoading: false,
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
    },
    preservesPitch(value) {
      this.player.video.preservesPitch = value
    },
    speedIndex(i) {
      this.player.video.playbackRate = +speedList[i]
    }
  },
  methods: {
    options() {
      const vm = this
      const opts = shallowReactive(vm.playerOptions)
      const redirector = shallowReactive({ loading: false, error: false })
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
                }, () => from(sizes, (size, index) => h(Radio, { label: index }, () => size)))
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
                    type: redirector.error ? 'error' : 'default',
                    loading: redirector.loading,
                    async onClick() {
                      try {
                        redirector.loading = true
                        redirector.error = false
                        const srcipt = await external.createRedirector()
                        const url = URL.createObjectURL(new Blob([srcipt], { type: 'text/plain' }))
                        download(url)
                      } catch (e) {
                        redirector.error = true
                        throw e
                      } finally {
                        redirector.loading = false
                      }
                    }
                  }, () => external.redirectorName),
                  h(Button, {
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
    loadVideoInner(url) {
      const vm = this, { player } = vm, { video } = player
      URL.revokeObjectURL(video.src)
      video.src = url
      vm.player.video.playbackRate = +vm.playbackRate
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
      let canplay = vm.loadVideoInner(url, title)
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
      const canplay = vm.loadVideoInner(url, title)
      const state = { title }, setState = vm.file == null ? pushState : replaceState
      setState(state); vm.title = title; vm.file = file
      vm.canplay = canplay
      return canplay
    },
    loadVideoBackupGmxhr(e) {
      if (gmxhr == null) { return }
      const vm = this, { title, player } = vm
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
              vm.loadVideoInner(URL.createObjectURL(e.response), title).then(() => {
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
    handleRateChange(e) {
      this.playbackRate = this.player.video.playbackRate
    },
    handleError(e) {
      this.error = this.player.video.error
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
    async retry() {
      const { video } = this.player
      if (video == null) { return }
      const { src, currentTime, paused } = video
      if (!src) { return }
      try {
        this.retryLoading = true
        setTimeout(() => { video.src = src }, 0)
        await utils.waitEvent(video, 'loadedmetadata')
        video.currentTime = currentTime
        if (!paused) { video.play() }
      } finally {
        this.retryLoading = false
      }
    },
    async captureImage() {
      const { video } = this.player, { image } = this.$refs
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        Message.warning('没有视频'); return
      }
      let success = false
      try {
        const blob = await utils.captureVideoToImage(video, 'image/png')
        URL.revokeObjectURL(image.src)
        image.src = URL.createObjectURL(blob)
        image.dataset.filename = `${utils.formatTime(video.currentTime, '-')}.png`
        success = true
      } finally {
        success ? Message.info('截图成功') : Message.error('截图失败')
      }
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
          vm.loadVideoInner(url, title)
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
    let playbackRate = 1
    keyboard.set(' ', null, vm.playpause)
    keyboard.set('ArrowUp', () => vm.relativeVolume(0.1))
    keyboard.set('ArrowDown', () => vm.relativeVolume(-0.1))
    keyboard.set('PageUp', vm.prev)
    keyboard.set('PageDown', vm.next)
    keyboard.set('ArrowLeft', null, () => vm.relativeSeek(-5))
    keyboard.set('ArrowRight', (e, repeat) => {
      if (repeat === 1) {
        playbackRate = vm.player.video.playbackRate
        vm.player.video.playbackRate = 3
      }
    }, (e, repeat) => {
      if (repeat > 0) { vm.player.video.playbackRate = +playbackRate; return }
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
      h('div', { class: 'container', style: 'margin:5px auto' }, [
        h(Row, { gutter: 6 }, cache[__LINE__] ??= () => [
          h(Col, { span: 12 }, cache[__LINE__] ??= () => [
            h(Input, {
              ref: 'input',
              search: true,
              enterButton: '提交',
              onOnSearch: vm.loadVideoFromUrl
            }),
            h(DropFile, {
              style: 'margin-top:6px',
              ref: 'drop',
              global: true,
              accept: 'audio/*,video/*',
              onChange: vm.handleChange
            })
          ]),
          h(Col, { span: 12 }, cache[__LINE__] ??= () => [
            h(Card, { padding: 0 }, cache[__LINE__] ??= () => [
              h(CellGroup, { style: 'padding:0px' }, cache[__LINE__] ??= () => [
                h(Cell, { title: '\u3000' }, cache[__LINE__] ??= {
                  extra: () => h(ButtonGroup, null, cache[__LINE__] ??= () => [
                    h(Button, { onClick: vm.retry, loading: vm.retryLoading }, () => '重试'),
                    h(Button, { onClick: vm.options }, () => '设置'),
                    h(Button, { onClick: vm.captureImage }, () => '截图'),
                    h(Button, { onClick: vm.saveImage }, () => '保存截图')
                  ])
                }),
                h(PlayList, {
                  ref: 'playList',
                  list: vm.list,
                  onPlay: vm.loadVideoAndPlay
                }),
                h(Cell, { title: '尺寸' }, cache[__LINE__] ??= {
                  extra: () => h(RadioGroup, {
                    type: 'button',
                    modelValue: vm.size,
                    'onUpdate:modelValue': cache[__LINE__] ??= (value) => { vm.size = value }
                  }, cache[__LINE__] ??= () => from(sizes, size => h(Radio, { label: size }, () => size))),
                }),
                h(Cell, { title: '快进快退' }, cache[__LINE__] ??= {
                  extra: () => h(ButtonGroup, null, cache[__LINE__] ??= () => from(relativeSeeks, (seek) => {
                    return h(Button, { onClick() { vm.relativeSeek(seek.value) } }, () => seek.slot)
                  }))
                }),
                h(Cell, null, cache[__LINE__] ??= {
                  default: () => [
                    h(Poptip, cache[__LINE__] ??= {
                      trigger, placement: 'top', transfer: true
                    }, cache[__LINE__] ??= {
                      default: () => [
                        h(Icon, { type: 'ios-arrow-up' }), '速度'
                      ],
                      content: () => [
                        h(Slider, {
                          style: 'width:650px;margin:50px 50px 30px',
                          min: 0, max: speedList.length - 1, step: 1, marks,
                          tipFormat: cache[__LINE__] ??= (i) => `${speedList[i]}×`,
                          modelValue: vm.speedIndex,
                          'onUpdate:modelValue': cache[__LINE__] ??= (value) => { vm.speedIndex = value }
                        })
                      ]
                    }),
                    `: ${vm.playbackRate}×`
                  ],
                  extra: () => [
                    h(Switch, {
                      title: '保持音高',
                      size: 'large',
                      modelValue: vm.preservesPitch,
                      'onUpdate:modelValue': cache[__LINE__] ??= (value) => { vm.preservesPitch = value }
                    })
                  ]
                }),
                vm.extra ? h(DDPlayVue, {
                  ref: 'danmaku',
                  file: vm.file, title: vm.title,
                  onDanmaku: vm.handleDanmaku
                }) : null
              ])
            ])
          ])
        ])
      ]),
      h(DPlayerVue, {
        ref: 'player', width: +size[0], height: +size[1],
        style: { 'border-color': vm.error != null ? 'red' : null }
      }, cache[__LINE__] ??= () => h(BarVue, {
        video: vm.player?.video,
        onRatechange: vm.handleRateChange,
        onError: vm.handleError,
        style: 'position:relative;bottom:unset'
      })),
      h('div', { class: 'container', style: 'margin:5px auto 240px' }, [
        h(Card, { style: 'width:274px' }, cache[__LINE__] ??= () => h('img', {
          ref: 'image', style: 'width:100%', onClick: vm.showImage
        }))
      ])
    ]
  }
})
