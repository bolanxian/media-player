
export { apply, bindCall, bind, call, createBinder } from 'bind:core'
export { $number, $string, $array, isPlainObject, on, off } from 'bind:utils'
export const { fromEntries, getOwnPropertyDescriptor: getPropDesc, freeze } = Object

import { bind } from 'bind:core'

export const noop = () => { }
export const nextTick = queueMicrotask
export const empty = freeze([])

const DocumentProto = Document.prototype, doc = document
export { doc as document }
export const getReadyState = bind(getPropDesc(DocumentProto, 'readyState').get, doc)
export const setTitle = bind(getPropDesc(DocumentProto, 'title').set, doc)
