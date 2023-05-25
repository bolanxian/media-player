
import { defineComponent, createVNode as h, shallowReactive } from 'vue'
import { Message, Modal, Card, CellGroup, Cell, Input, ButtonGroup, Button } from 'view-ui-plus'
import { episodeTypes, fetch, match, commentURL, comment } from '../ddplay-api'
const { isArray } = Array

function* convertDanmakuToDplayer(comments, offset = 0) {
  const map = { __proto__: null, 1: 'right', 5: 'top', 4: 'bottom' }
  for (const comment of comments) {
    let p = comment.p.split(',')
    yield {
      time: +p[0] + offset,
      type: map[parseInt(p[1])] ?? 0,
      color: parseInt(p[2]),
      author: p[3],
      text: comment.m
    }
  }
}
function* filterPlatform(danmaku, fn) {
  const reg = /^\[([^\[\]]+)\]/
  for (const dan of danmaku) {
    const m = String(dan.author).match(reg)
    if (fn(m?.[1], dan)) { yield dan }
  }
}
function* truncateDanmaku(danmaku, valuePerSecond = 3.5) {
  const { trunc } = Math, map = []
  for (const dan of danmaku) {
    const i = trunc(dan.time)
    void (map[i] ??= []).push(dan)
  }
  for (const s of map) {
    if (s == null) { continue }
    if (s.length < valuePerSecond) {
      yield* s
    } else {
      let i = 0, step = trunc(s.length / valuePerSecond) || 1
      for (; i < s.length; i += step) {
        yield s[i]
      }
    }
  }
}

const modalMatch = (vm) => {
  let name = vm.title || (vm.file?.name ?? '').replace(/\.[^.]+$/, '')
  const data = shallowReactive({
    name,
    list: vm.list,
    index: vm.index,
    loading: false
  })
  const handleMatch = async () => {
    try {
      data.loading = true
      const resp = await match(data.name, vm.file)
      if (isArray(resp.matches)) {
        vm.list = data.list = resp.matches
      }
      data.index = resp.isMatched ? 0 : -1
    } catch (e) {
      Message.error(e.message)
      throw e
    } finally {
      data.loading = false
    }
  }
  let modal, input, offset
  Modal.confirm({
    title: '将视频关联到弹幕库',
    width: 600,
    loading: true,
    closable: true,
    render() {
      modal = this
      return h(Card, { padding: 0, 'dis-hover': true }, {
        title: () => h(Input, {
          modelValue: data.name,
          'onUpdate:modelValue'(value) { data.name = value }
        }, {
          append: () => h(Button, {
            type: 'primary',
            loading: data.loading,
            onClick: handleMatch
          }, () => '获取')
        }),
        default: () => h('div', {
          class: 'ivu-scroll-wrapper',
          style: 'touch-action: none; height: 60vh'
        }, [
          h('div', {
            class: 'ivu-scroll-container',
            style: 'height: 100%'
          }, [
            h('div', { class: 'ivu-scroll-content' }, [
              h(CellGroup, { onOnClick(index) { data.index = index } }, () => [
                h(Cell, { name: -2, selected: -2 === data.index }, {
                  default: () => h('div', {
                    class: 'ivu-input-wrapper ivu-input-wrapper-default ivu-input-type',
                    style: 'width: 300px'
                  }, [
                    h('input', {
                      ref(_) { input = _ },
                      type: 'text',
                      class: 'ivu-input ivu-input-default',
                      placeholder: '手动载入弹幕',
                      onPaste(e) { data.index = -2 }
                    })
                  ]),
                  extra: () => h('div', {
                    class: 'ivu-input-wrapper ivu-input-wrapper-default ivu-input-type',
                    style: 'width: 100px'
                  }, [
                    h('input', {
                      ref(_) { offset = _ },
                      type: 'text',
                      class: 'ivu-input ivu-input-default',
                      placeholder: 'offset'
                    })
                  ])
                }),
                Array.from(data.list, (cell, index) => h(Cell, {
                  name: index,
                  title: `[${episodeTypes[cell.type] ?? cell.type}]${cell.animeTitle}`,
                  label: cell.episodeTitle,
                  selected: index === data.index
                }, {
                  extra: () => h('a', {
                    href: commentURL(cell.episodeId),
                    target: '_blank'
                  }, ['详细'])
                }))
              ])
            ])
          ])
        ])
      })
    },
    async onOk() {
      try {
        const { index } = data
        let danmaku
        if (index === -2) {
          const comments = JSON.parse(input.value)
          if (isArray(comments)) {
            danmaku = comments
          } else if (isArray(comments.comments)) {
            danmaku = comments.comments
          }
        } else if (index >= 0) {
          const ep = data.list[index]
          if (ep != null) {
            danmaku = await comment(ep.episodeId)
          }
        }
        if (danmaku == null) {
          Message.warning('未选中')
          return
        }
        vm.index = index
        vm.loadDanmaku(danmaku, +offset.value || 0)
      } catch (e) {
        Message.error('弹幕加载失败')
        throw e
      } finally {
        modal.remove()
      }
    }
  })
}

export default defineComponent({
  name: 'ddplay-api',
  props: {
    file: { type: Blob },
    title: { type: String, default: '' }
  },
  setup() {
    return {
      list: [],
      danmaku: [],
      index: -1
    }
  },
  data() {
    return {
      platforms: ''
    }
  },
  watch: {
    file() {
      this.list = []
      this.danmaku = []
      this.index = -1
    }
  },
  methods: {
    loadDanmaku(comments, offset = 0) {
      const vm = this, platformMap = { '!': 0 }
      let danmaku = convertDanmakuToDplayer(comments, offset)
      danmaku = filterPlatform(danmaku, (platform, dan) => {
        platform ??= '!'
        if (platform === 'Gamer') { platform = '#' + platform }
        platformMap[platform] = +(platformMap[platform] ?? 0) + 1
        if (platform[0] === '#') { return false }
        return true
      })
      danmaku = truncateDanmaku(danmaku)
      vm.danmaku = danmaku = Array.from(danmaku)
      const platforms = Object.entries(platformMap)
        .sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}[${v}]`).join(',')
      vm.platforms = `(${platforms})`
      vm.$emit('danmaku', danmaku)
      Message.success(`加载了 ${danmaku.length} 条弹幕 ${vm.platforms}`)
    },
    handleMatch() {
      if (typeof fetch !== 'function') {
        Message.error('缺少 GM_xmlhttpRequest')
        return
      }
      if (!(this.title || this.file != null)) {
        Message.warning('未选择文件')
      }
      modalMatch(this)
    }
  },
  render() {
    const vm = this
    return h(Cell, { title: `弹弹Play API[${vm.danmaku.length}] ${vm.platforms}` }, {
      extra: () => h(ButtonGroup, null, () => [
        h(Button, { onClick: vm.handleMatch }, () => '加载弹幕')
      ])
    })
  }
})
