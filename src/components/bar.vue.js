
import { defineComponent, createVNode as h, shallowRef as sr, watch, onMounted, onBeforeUnmount } from 'vue'
import { bindCall, getPropDesc, empty, on } from '../bind'
import { createAborter } from '../aborter'

const ElemProto = HTMLElement.prototype
const MediaProto = HTMLMediaElement.prototype
const TimeRangesProto = TimeRanges.prototype
const setProperty = bindCall(CSSStyleDeclaration.prototype.setProperty)

const getStyle = bindCall(getPropDesc(ElemProto, 'style').get)
const getCurrentTime = bindCall(getPropDesc(MediaProto, 'currentTime').get)
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
    let video, abort = null, duration100 = 0, buffered, played
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
      setProperty(pointerStyle, 'left', `${getCurrentTime(video) / duration100}%`)
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
      on(video, 'loadeddata', progress, aborter)
      on(video, 'progress', progress, aborter)
      on(video, 'seeking', timeupdate, aborter)
      on(video, 'timeupdate', timeupdate, aborter)
      loadstart()
    }, { immediate: true }))
    onBeforeUnmount(() => abort?.())
    let pointerStyle, pointerVNode
    return () => h('div', { class: rootClass }, [
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