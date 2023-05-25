
!(function (root, factory) {
  if (typeof GM_xmlhttpRequest == 'function' && typeof unsafeWindow != 'undefined') {
    try { if (GM_fetch != null) { return } } catch (e) { return }
    GM_fetch = factory()(GM_xmlhttpRequest)
  } else {
    typeof define == 'function' && define.amd ? define(factory) :
      typeof exports == 'object' && typeof module == 'object' ? module.exports = factory() :
        (root.createGM_fetch = factory())
  }
})(this, function () {
  'use strict';
  const handleError = (resp, signal) => {
    const { error } = resp
    if (typeof error === 'string') {
      if (error === 'aborted') {
        signal?.throwIfAborted()
        throw new DOMException('The operation was aborted. ', 'AbortError')
      }
      throw new TypeError(`GM_xmlhttpRequest Error: ${error}`, { cause: resp })
    }
    const { statusText } = resp
    if (typeof statusText === 'string' && statusText.length) {
      throw new TypeError(`GM_xmlhttpRequest Error: ${statusText}`, { cause: resp })
    }
    throw new TypeError('NetworkError when attempting to fetch resource.', { cause: resp })
  }
  const parseHeaders = (responseHeaders) => {
    const headers = new Headers()
    for (let line of String(responseHeaders).split(/\r?\n/)) {
      line = line.trim()
      if (!line) { continue }
      const index = line.indexOf(':')
      let key, value
      if (index < 0) {
        key = line; value = ''
      } else {
        key = line.slice(0, index).trim()
        value = line.slice(index + 1)
      }
      try {
        headers.append(key, value)
      } catch (e) {
        console.warn(e)
      }
    }
    return headers
  }
  return (GM_xmlhttpRequest) => {
    const responseType = GM_xmlhttpRequest.RESPONSE_TYPE_STREAM ?? 'blob'
    const readyState = responseType === 'stream' ? 2 : 4
    if (readyState !== 2) {
      console.warn('GM_xmlhttpRequest not support stream')
    }
    const GM_fetch = async (request, init) => {
      if (!(request instanceof Request && init == null)) {
        request = new Request(request, init)
      }
      init = null
      const { method, url, signal } = request
      signal.throwIfAborted()
      let data, done, resp
      if (!(method === 'GET' || method === 'HEAD')) {
        data = await request.blob()
      }
      try {
        resp = await new Promise((ok, onerror) => {
          const { abort } = GM_xmlhttpRequest({
            method, url, data,
            headers: Object.fromEntries(request.headers),
            anonymous: request.credentials !== 'include',
            responseType: method === 'HEAD' ? 'blob' : responseType,
            onreadystatechange(resp) {
              if (resp.readyState === readyState) { ok(resp) }
            },
            onerror, onabort: onerror
          })
          const onabort = e => { abort(signal.reason) }
          signal.addEventListener('abort', onabort)
          done = () => { signal.removeEventListener('abort', onabort) }
        })
      } catch (resp) {
        if (resp instanceof Error) { throw resp }
        handleError(resp, signal)
      } finally {
        done?.()
      }
      return new Response(resp.response, {
        url: resp.finalUrl,
        status: resp.status,
        statusText: resp.statusText,
        headers: parseHeaders(resp.responseHeaders ?? '')
      })
    }
    GM_fetch.responseType = responseType
    const props = Object.getOwnPropertyDescriptors(GM_xmlhttpRequest)
    Object.defineProperties(GM_fetch, props)
    return GM_fetch
  }
});
