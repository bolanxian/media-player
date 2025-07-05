
export { apply, bindCall, bind, call, createBinder } from 'bind:core'
export { $number, $string, $array, isPlainObject, on, off } from 'bind:utils'
export { fromEntries, getOwnPropertyDescriptor as getPropDesc } from 'bind:Object'

import { bind } from 'bind:core'
import { freeze, getOwnPropertyDescriptor as getPropDesc } from 'bind:Object'

export const noop = () => { }
export const nextTick = queueMicrotask
export const empty = freeze([])

const DocumentProto = Document.prototype, doc = document
export { doc as document }
export const getReadyState = bind(getPropDesc(DocumentProto, 'readyState').get, doc)
export const setTitle = bind(getPropDesc(DocumentProto, 'title').set, doc)
export const canHover = matchMedia('(hover: hover)').matches

export const { mediaSession } = navigator
export let setActionHandler = noop
if (typeof MediaSession === 'function') {
  setActionHandler = bind(MediaSession.prototype.setActionHandler, mediaSession)
}