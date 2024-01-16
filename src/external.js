
import { $string, $array } from './bind'
import { gmxhr } from './utils'
import * as ddplayApi from './ddplay-api'
import GM_fetch_raw from './GM-fetch?raw'
const { fromCharCode: chr } = String, { from } = Array
const { toLowerCase } = $string, { join } = $array

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
${join(from(ddplayApi.hosts, host => `// @connect ${host}`), '\n')}
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

export const redirectorName = `${chr(84)}${chr(117)}${chr(99)}${chr(97)}${chr(111)}`
export const createRedirector = async () => {
  const { href, hostname } = new URL(location.pathname, location.href)
  const { finalUrl: url } = await new Promise((ok, onerror) => {
    gmxhr({
      url: `https://www.${toLowerCase(redirectorName)}.${chr(102)}${chr(117)}${chr(110)}/favicon.ico`,
      onload(resp) { ok(resp) }, onerror
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
  const hasPartName = /^\\u5B8C\\u7ED3/.test(doc.querySelectorAll('.show_top>.l>.t>a')[1]?.textContent)
  const xpath = doc.createExpression('concat("[",./*/*/text(),"]",./*/text())', null)
  const lists = el.closest('#part_lists').cloneNode(true)
  for (const el of lists.querySelectorAll('a[pid]')) {
    let m = el.getAttribute('pid')?.match(/(^|&)file=([^&]*)(&|$)/i)
    if (m != null) {
      let result = hasPartName ? xpath.evaluate(el, STRING_TYPE, null) : null
      el.href = createUrl(hasPartName ? ${'`${title} ${result.stringValue}`'} : title, unescape(m[2]))
    }
  }
  const part = el.closest('#video_part')
  part.append(lists)
  part.style.display = ''
  console.log(title, el, lists)
})();
`
}