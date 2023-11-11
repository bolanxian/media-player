
import { call, bind, bindCall, $string, fromEntries, getPropDesc } from './bind'
const { slice: sliceStr, startsWith } = $string

const record = history
export { record as history }
const HistoryProto = History.prototype, PopStateEventProto = PopStateEvent.prototype
const createSetState = setState => state => {
  call(setState, record, state, '', state != null ? `#?${new URLSearchParams(state)}` : '#')
}
export const getState = bind(getPropDesc(HistoryProto, 'state').get, record)
export const getPopState = bindCall(getPropDesc(PopStateEventProto, 'state').get)
export const pushState = createSetState(HistoryProto.pushState)
export const replaceState = createSetState(HistoryProto.replaceState)
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
