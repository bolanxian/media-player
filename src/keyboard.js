
import { noop, on, document } from './bind'

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
