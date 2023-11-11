
import { nextTick, bind, call, bindCall, getPropDesc, on } from './bind'

const Aborter = AbortController, AborterProto = Aborter.prototype
const _abort = AborterProto.abort
const _getSignal = getPropDesc(AborterProto, 'signal').get
export const createAborter = () => {
  const aborter = new Aborter()
  return {
    abort: bind(_abort, aborter),
    signal: call(_getSignal, aborter)
  }
}
const SignalProto = AbortSignal.prototype
const _throwIf = SignalProto.throwIfAborted
export const getAborted = bindCall(getPropDesc(SignalProto, 'aborted').get)
export const getReason = bindCall(getPropDesc(SignalProto, 'reason').get)
export const throwIfAborted = _throwIf != null ? bindCall(_throwIf) : (signal) => {
  if (getAborted(signal)) { throw getReason(signal) }
}
const _options = { once: true }
export const onAbort = (signal, fn, options = _options) => {
  if (typeof fn != 'function') { throw new TypeError('onAbort: Argument 2 is not callable.') }
  const cb = () => { let err; try { err = getReason(signal) } catch (e) { err = e } fn(err) }
  getAborted(signal) ? nextTick(cb) : on(signal, 'abort', cb, options)
}
export const concatSignal = (...args) => {
  const { abort, signal } = createAborter(), options = { once: true, signal }
  for (const signal of args) { onAbort(signal, abort, options) }
  return signal
}
