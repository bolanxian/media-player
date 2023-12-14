
import { defineComponent, createVNode as h, shallowRef as sr, watch, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import { bindCall, call, getPropDesc, empty, on, off, document } from '../bind'
import { createAborter } from '../aborter'

const { min, max } = Math
const ElemProto = HTMLElement.prototype
const MediaProto = HTMLMediaElement.prototype
const TimeRangesProto = TimeRanges.prototype
const setProperty = bindCall(CSSStyleDeclaration.prototype.setProperty)
const _getRect = ElemProto.getBoundingClientRect

const getStyle = bindCall(getPropDesc(ElemProto, 'style').get)
const currentTimeDesc = getPropDesc(MediaProto, 'currentTime')
const getCurrentTime = bindCall(currentTimeDesc.get)
const setCurrentTime = bindCall(currentTimeDesc.set)
const getDuration = bindCall(getPropDesc(MediaProto, 'duration').get)
//const getSeekable = bindCall(getPropDesc(MediaProto, 'seekable').get)
const getBuffered = bindCall(getPropDesc(MediaProto, 'buffered').get)
const getPlayed = bindCall(getPropDesc(MediaProto, 'played').get)
const getRangesLength = bindCall(getPropDesc(TimeRangesProto, 'length').get)
const start = bindCall(TimeRangesProto.start)
const end = bindCall(TimeRangesProto.end)

const baseClass = 'ivu-loading-bar'
const rootClass = `${baseClass} ${baseClass}--player`
const pointerClass = `${baseClass}-inner ${baseClass}-inner--pointer`
const bufferedClass = `${baseClass}-inner ${baseClass}-inner-color--buffered`
const playedClass = `${baseClass}-inner ${baseClass}-inner-color-primary`

function* createRangesVNodes(ranges, duration100, className, key) {
  let i = 0, length = getRangesLength(ranges)
  for (; i < length; i++) {
    const left = start(ranges, i) / duration100, width = end(ranges, i) / duration100 - left
    yield h('div', {
      class: className, key: `${key}-${i}`,
      style: `left:${left}%;width:${width}%`
    })
  }
}

export default defineComponent({
  props: {
    video: { type: HTMLVideoElement }
  },
  setup(props) {
    const inst = getCurrentInstance()
    let video, abort = null, isMousedown = false
    let duration100 = 0, buffered, played
    const $buffered = sr(empty)
    const $played = sr(empty)
    const durationchange = e => {
      duration100 = getDuration(video) / 100
      setProperty(pointerStyle, 'display', duration100 > 0 ? '' : 'none')
    }
    const progress = e => {
      buffered = getBuffered(video)
      $buffered.value = null
    }
    const timeupdate = e => {
      played = getPlayed(video)
      $played.value = null
      isMousedown || setProperty(pointerStyle, 'left', `${getCurrentTime(video) / duration100}%`)
    }
    const loadstart = e => {
      durationchange(e)
      progress(e)
      timeupdate(e)
    }
    onMounted(() => watch(() => props.video, _video => {
      video = _video; abort?.()
      if (video == null) {
        abort = null
        duration100 = 0
        $buffered.value = $played.value = empty
        buffered = played = void 0
        return
      }
      let aborter = createAborter(); ({ abort } = aborter)
      on(video, 'loadstart', loadstart, aborter)
      on(video, 'durationchange', durationchange, aborter)
      on(video, 'loadedmetadata', progress, aborter)
      on(video, 'progress', progress, aborter)
      on(video, 'seeking', timeupdate, aborter)
      on(video, 'timeupdate', timeupdate, aborter)
      loadstart()
    }, { immediate: true }))

    let x, width, percent
    const onMousedown = e => {
      if (!(duration100 > 0)) { return }
      isMousedown = true
      on(document, 'mousemove', onMousemove)
      on(document, 'mouseup', onMouseup)
      !({ x, width } = call(_getRect, inst.vnode.el))
      onMousemove(e)
    }
    const onMousemove = e => {
      percent = min(max((e.clientX - x) / width, 0), 1) * 100
      setProperty(pointerStyle, 'left', `${percent}%`)
    }
    const onMouseup = e => {
      isMousedown = false
      off(document, 'mousemove', onMousemove)
      off(document, 'mouseup', onMouseup)
      onMousemove(e)
      setCurrentTime(video, percent * duration100)
    }

    onBeforeUnmount(() => abort?.())
    let pointerStyle, pointerVNode
    return () => h('div', { class: rootClass, onMousedown }, [
      pointerVNode ??= h('div', {
        class: pointerClass, key: 'pointer',
        ref(el) { pointerStyle = getStyle(el) }
      }),
      ...$buffered.value ??= [
        ...createRangesVNodes(buffered, duration100, bufferedClass, 'buffered')
      ],
      ...$played.value ??= [
        ...createRangesVNodes(played, duration100, playedClass, 'played')
      ]
    ])
  }
})