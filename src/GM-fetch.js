
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
  const nextTick = queueMicrotask
  const { apply } = Reflect
  const { getOwnPropertyDescriptor: getProp, getOwnPropertyDescriptors: getProps } = Object
  const { fromEntries, defineProperties: defProps } = Object
  const { bind: _bind, call: _call } = Function.prototype
  const evtProto = EventTarget.prototype
  const signalProto = AbortSignal.prototype, { throwIfAborted: _throwIf } = signalProto

  const bindCall = apply(_bind, _bind, [_call])
  const on = bindCall(evtProto.addEventListener), _options = { once: true }
  const getAborted = bindCall(getProp(signalProto, 'aborted').get)
  const getReason = bindCall(getProp(signalProto, 'reason').get)
  const throwIfAborted = _throwIf != null ? bindCall(_throwIf) : (signal) => {
    if (getAborted(signal)) { throw getReason(signal) }
  }

  const onAbort = (signal, fn) => {
    if (typeof fn != 'function') { throw new TypeError('onAbort: Argument 2 is not callable.') }
    const cb = () => { let err; try { err = getReason(signal) } catch (e) { err = e } fn(err) }
    getAborted(signal) ? nextTick(cb) : on(signal, 'abort', cb, _options)
  }

  const handleError = (resp, signal) => {
    const { error } = resp
    if (typeof error === 'string') {
      if (error === 'aborted') {
        signal != null && throwIfAborted(signal)
        throw new DOMException('The operation was aborted. ', 'AbortError')
      }
      throw new TypeError(`GM_xmlhttpRequest Error: ${error}`, { cause: resp })
    }
    const { statusText } = resp
    if (typeof statusText === 'string' && statusText.length > 0) {
      throw new TypeError(`GM_xmlhttpRequest Error: ${statusText}`, { cause: resp })
    }
    throw new TypeError('NetworkError when attempting to fetch resource.', { cause: resp })
  }
  const parseHeaders = (responseHeaders) => {
    const headers = new Headers(), errors = []
    let count = 0
    for (let line of String(responseHeaders).split(/\r?\n/)) {
      line = line.trim()
      if (!line) { continue }
      const index = line.indexOf(':')
      let key = line, value = ''
      if (index >= 0) {
        key = line.slice(0, index).trim()
        value = line.slice(index + 1)
      }
      try {
        headers.append(key, value)
        count++
      } catch (e) {
        errors[errors.length] = e
      }
    }
    if (count < 1 && errors.length > 0) { throw new AggregateError(errors, 'Parse Headers Error') }
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
      throwIfAborted(signal)
      let data, resp
      if (!(method === 'GET' || method === 'HEAD')) {
        data = await request.blob()
      }
      try {
        resp = await new Promise((ok, onerror) => {
          const { abort } = GM_xmlhttpRequest({
            method, url, data,
            headers: fromEntries(request.headers),
            anonymous: request.credentials !== 'include',
            responseType: method === 'HEAD' ? 'blob' : responseType,
            onreadystatechange(resp) {
              if (resp.readyState === readyState) { ok(resp) }
            },
            onerror, onabort: onerror
          })
          onAbort(signal, (reason) => { abort(reason) })
        })
      } catch (resp) {
        if (resp instanceof Error) { throw resp }
        handleError(resp, signal)
      }
      return new Response(resp.response, {
        url: resp.finalUrl,
        status: resp.status,
        statusText: resp.statusText,
        headers: parseHeaders(resp.responseHeaders ?? '')
      })
    }
    GM_fetch.responseType = responseType
    const props = getProps(GM_xmlhttpRequest)
    defProps(GM_fetch, props)
    return GM_fetch
  }
});
