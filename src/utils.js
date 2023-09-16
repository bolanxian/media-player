
import * as ddplayApi from './ddplay-api'
import GM_fetch_raw from './GM-fetch?raw'

export let gmxhr, fetch
export const setGmxhr = _ => { gmxhr = _ }
export const setFetch = _ => { fetch = _ }

const { apply } = Reflect
const { fromEntries, getOwnPropertyDescriptor: getProp } = Object
const { call: _call, bind: _bind } = Function.prototype
const StringPrototype = String.prototype
const EventTargetPrototype = EventTarget.prototype

export const call = apply(_bind, _call, [_call])
export const on = apply(_bind, _call, [EventTargetPrototype.addEventListener])
export const off = apply(_bind, _call, [EventTargetPrototype.removeEventListener])
export const sliceStr = apply(_bind, _call, [StringPrototype.slice])
export const startsWith = apply(_bind, _call, [StringPrototype.startsWith])
export const getString = apply(_bind, _call, [Object.prototype.toString])
export const isPlainObject = (o) => {
  o = getString(o)
  return o === '[object Object]' || o === '[object Array]'
}
export const setTitle = apply(_bind, getProp(Document.prototype, 'title').set, [document])
const AbortControllerPrototype = AbortController.prototype
export const abort = apply(_bind, _call, [AbortControllerPrototype.abort])
export const getSignal = apply(_bind, _call, [getProp(AbortControllerPrototype, 'signal').get])

const { history } = window
const HistoryPrototype = History.prototype
const PopStateEventPrototype = PopStateEvent.prototype
const buildSetState = setState => state => {
  call(setState, history, state, '', state != null ? `#?${new URLSearchParams(state)}` : '#')
}
export const pushState = buildSetState(HistoryPrototype.pushState)
export const replaceState = buildSetState(HistoryPrototype.replaceState)
export const getState = call(_bind, getProp(HistoryPrototype, 'state').get, history)
export const getPopState = call(_bind, _call, getProp(PopStateEventPrototype, 'state').get)
export const buildState = (hash = location.hash) => {
  let state, params
  if (startsWith(hash, '#!')) {
    params = new URL(decodeURIComponent(sliceStr(hash, 2))).searchParams
  } else if (startsWith(hash, '#')) {
    params = new URLSearchParams(sliceStr(hash, 1))
    let url = params.get('.')
    if (url != null) { params = new URL(url).searchParams }
  }
  if (params != null) {
    state = fromEntries(params)
    replaceState(state)
  }
  return state
}

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
  for (i = 0; i < arr.length; i++) {
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
  if (document.readyState === 'complete') { return ok() }
  const target = window, options = !1, done = (e) => {
    ok(e.type === type ? e : null)
    off(target, type, done, options)
    off(target, 'load', done, options)
  }
  on(target, type, done, options)
  on(target, 'load', done, options)
})

const noop = () => { }
export class KeyboardHandler {
  #target
  #rapeatMap = new Map()
  #downMap = new Map()
  #upMap = new Map()
  #handleKeyDown = e => {
    const { target } = e
    if (target != null) {
      const tag = target.tagName
      if ('INPUT' === tag || 'TEXTAREA' === tag || target.isContentEditable) { return }
    }
    const { key } = e
    const onDown = this.#downMap.get(key)
    if (onDown != null) {
      const map = this.#rapeatMap
      if (!e.repeat) { map.set(key, -1) }
      const repeat = (map.get(key) ?? -1) + 1
      map.set(key, repeat)
      e.preventDefault()
      e.stopPropagation()
      onDown(e, repeat)
      return
    }
  }
  #handleKeyUp = e => {
    const { key } = e
    const map = this.#rapeatMap
    const repeat = map.get(key)
    map.delete(key)
    if (repeat == null) { return }
    const onUp = this.#upMap.get(key)
    if (onUp != null) {
      e.preventDefault()
      e.stopPropagation()
      onUp(e, repeat)
    }
  }
  constructor(target = document, signal) {
    this.#target = target
    const opts = { capture: true, signal }
    on(target, 'keydown', this.#handleKeyDown, opts)
    on(target, 'keyup', this.#handleKeyUp, opts)
  }
  set(key, onDown, onUp) {
    if (onDown == null && onUp == null) {
      this.#downMap.delete(key)
      this.#upMap.delete(key)
    } else {
      this.#downMap.set(key, onDown ?? noop)
      this.#upMap.set(key, onUp ?? noop)
    }
  }
}

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

const chr = String.fromCharCode
export const redirectorName = `${chr(84)}${chr(117)}${chr(99)}${chr(97)}${chr(111)}`
export const createRedirector = async () => {
  const { href, hostname } = new URL(location.pathname, location.href)
  const url = await new Promise((ok, onerror) => {
    gmxhr({
      url: `https://www.${redirectorName.toLowerCase()}.${chr(102)}${chr(117)}${chr(110)}/favicon.ico`,
      onload(resp) { ok(resp.finalUrl) }, onerror
    })
  })
  return `\
// ==UserScript==
// @name ${redirectorName}-Redirector
// @namespace ${href}
// @version 0.1
// @description try to take over the world!
// @author ${hostname}
// @match ${new URL('/', url)}play/*/
// @run-at document-start
// ==/UserScript==
!(async function () {
  'use strict';
  const doc = document, { apply } = Reflect, { STRING_TYPE } = XPathResult
  const { addEventListener: _on, removeEventListener: _off } = EventTarget.prototype
  const once = (target, type) => new Promise(ok => { apply(_on, target, [type, ok, { once: true }]) })
  const tick0_5 = cb => setTimeout(cb, 500), raf = requestAnimationFrame
  const wait = (cb, tick = raf) => new Promise((ok, reject, next, _) => {
    (next = () => { try { _ = cb(); _ === void 0 ? tick(next) : ok(_) } catch (e) { reject(e) } })()
  })

  const createUrl = (title, url) => ${'`web+player:?${new URLSearchParams({ title, url })}`'}

  await once(doc, 'DOMContentLoaded')
  const el = await wait(() => doc.querySelector('#video_part #part_lists a[pid]') ?? void 0, tick0_5)
  const title = doc.evaluate('//h1[contains(@class,"show_title")]/text()', doc, null, STRING_TYPE, null).stringValue
  const xpath = doc.createExpression('concat("[",./*/*/text(),"]",./*/text())', null)
  const lists = el.closest('#part_lists').cloneNode(true)
  for (const el of lists.querySelectorAll('a[pid]')) {
    let m = el.getAttribute('pid')?.match(/(^|&)file=([^&]*)(&|$)/i)
    if (m != null) {
      let result = xpath.evaluate(el, STRING_TYPE, null)
      el.href = createUrl(${'`${title} ${result.stringValue}`'}, unescape(m[2]))
    }
  }
  el.closest('#video_part').append(lists)
  console.log(title, el, lists)
})();
`
}