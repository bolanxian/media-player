
import { nextTick, $number, $string, $array, on, off, document, getReadyState } from './bind'

export let gmxhr, fetch
export const setGrant = (grant) => {
  if (grant == null) { return }
  gmxhr = grant.GM_xmlhttpRequest
  fetch = grant.GM_fetch
}

const { toFixed } = $number
const { padStart } = $string
const { join } = $array
const { trunc, pow, min } = Math
const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
const exps = Array.from(units, (_, i) => pow(0x400, i))
export const formatSize = size => {
  let i = 1, len = exps.length
  while (i < len && size > exps[i]) { i++ } i--
  return `${toFixed(size / exps[i], min(2, i >> 1))} ${units[i]}`
}
export const formatTime = (t, separator = ':') => {
  t = trunc(t)
  const h = trunc(t / 3600), m = trunc(t / 60) % 60, s = t % 60
  const a = h === 0 ? [m, s] : [h, m, s]
  let i = 0; for (; i < a.length; i++) {
    a[i] = padStart(a[i], 2, '0')
  }
  return join(a, separator)
}

export const captureVideoToImage = typeof OffscreenCanvas === 'function' ? (video, type = 'image/png', quality) => {
  const canvas = new OffscreenCanvas(video.videoWidth, video.videoHeight)
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
  return canvas.convertToBlob({ type, quality })
} : (video, type = 'image/png', quality) => new Promise(ok => {
  const canvas = document.createElement('canvas')
  !({ videoWidth: canvas.width, videoHeight: canvas.height } = video)
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
  canvas.toBlob(ok, type, quality)
})
export const download = (href, filename) => {
  const a = document.createElement('a')
  a.href = href
  if (filename == null) {
    a.target = '_blank'
  } else {
    a.download = filename
  }
  a.click()
}
export const waitEvent = (target, type, options = !1) => new Promise((ok, reject) => {
  const done = e => {
    e.type === type ? ok(e) : reject(e)
    off(target, type, done, options)
    off(target, 'error', done, options)
  }
  on(target, type, done, options)
  on(target, 'error', done, options)
})
export const beforeLoad = (type) => new Promise(ok => {
  if (getReadyState() === 'complete') { return ok() }
  const target = window, options = !1, done = (e) => {
    ok(e.type === type ? e : null)
    off(target, type, done, options)
    off(target, 'load', done, options)
  }
  on(target, type, done, options)
  on(target, 'load', done, options)
})
export const onLoad = (fn) => {
  if (getReadyState() === 'complete') { return nextTick(fn) }
  on(window, 'load', fn, { once: true })
}
