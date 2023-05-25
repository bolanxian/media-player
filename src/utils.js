
import * as ddplayApi from './ddplay-api'
import GM_fetch_raw from './GM-fetch?raw'

const { trunc, pow, min } = Math
const units = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
const exps = Array.from(units, (_, i) => pow(0x400, i))
export const formatSize = size => {
  let i = 1, len = exps.length
  while (i < len && size > exps[i]) { i++ } i--
  return (size / exps[i]).toFixed(min(2, i >> 1)) + ' ' + units[i]
}
export const formatTime = (t, separator = ':') => {
  t = trunc(t)
  let arr = [trunc(t / 3600), trunc(t / 60) % 60, t % 60], i
  if (arr[0] === 0) { arr.shift() }
  for (i = 1; i < arr.length; i++) {
    arr[i] = String(arr[i]).padStart(2, '0')
  }
  return arr.join(separator)
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
export const download = (href, filename = '') => {
  const a = document.createElement('a')
  a.href = href
  a.download = filename
  a.click()
}

const { apply } = Reflect
const { addEventListener: _on, removeEventListener: _off } = EventTarget.prototype
export const waitEvent = (target, type, options = !1) => new Promise((ok, reject) => {
  const done = e => {
    e.type === type ? ok(e) : reject(e)
    apply(_off, target, a)
    apply(_off, target, b)
  }
  const a = [type, done, options], b = ['error', done, options]
  apply(_on, target, a)
  apply(_on, target, b)
})
export const beforeLoad = (type) => new Promise(ok => {
  if (document.readyState === 'complete') { return ok() }
  const target = window, options = !1, done = (e) => {
    ok(e.type === type ? e : null)
    apply(_off, target, a)
    apply(_off, target, b)
  }
  const a = [type, done, options], b = ['load', done, options]
  apply(_on, target, a)
  apply(_on, target, b)
})

export const createUserScript = () => {
  const { href, hostname } = new URL(location.pathname, location.href)
  return `\
// ==UserScript==
// @name dispatch-GM_fetch
// @namespace ${href}
// @version 0.1
// @description dispatch GM_fetch and GM_xmlhttpRequest
// @author ${hostname}
// @match  ${href}
// @run-at document-start
// @grant GM_xmlhttpRequest
// @grant GM_fetch
${ddplayApi.hosts.map(host => `// @connect ${host}`).join('\n')}
// @connect *
// ==/UserScript==
'use strict';
${GM_fetch_raw}
var GM_fetch
const { Reflect: { apply }, dispatchEvent: _emit } = unsafeWindow
const e = new CustomEvent('external:tampermonkey:grant', { detail: { GM_xmlhttpRequest, GM_fetch } })
unsafeWindow.addEventListener('load', () => { apply(_emit, unsafeWindow, [e]) }, { once: !0, capture: !0 })
`
}