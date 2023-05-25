
import { createMD5 as _createMD5 } from 'hash-wasm'

let T, setStream
export class HashStream extends TransformStream {
  static {
    T = class {
      static {
        setStream = (that, stream) => { that.#stream = stream }
      }
      #iHasherPromise
      #hasher = null
      #stream = null
      constructor(iHasherPromise) {
        this.#iHasherPromise = iHasherPromise
      }
      async start(controller) {
        this.#hasher = await this.#iHasherPromise
      }
      transform(chunk, controller) {
        this.#hasher.update(chunk)
        controller.enqueue(chunk)
      }
      flush(controller) {
        this.#stream.#result = this.#hasher.digest('hex')
      }
    }
  }
  #result = null
  get result() { return this.#result }
  constructor(iHasherPromise) {
    const t = new T(iHasherPromise)
    super(t)
    setStream(t, this)
  }
}
export const createMD5 = () => new HashStream(_createMD5())
