
import { createApp, shallowReactive, createVNode as h, onMounted, onErrorCaptured } from 'vue'
import { Spin, Bar } from './components/spin.vue?spin-img'
import { setGrant, beforeLoad } from './utils'
const { defineProperty } = Object

const ready = beforeLoad('external:tampermonkey:grant')
const AppPromise = import('./components/app.vue')
createApp({
  setup(_, { expose }) {
    const data = shallowReactive({ loading: false, error: false })
    let App, props, vm
    onMounted(async () => {
      try {
        data.loading = true
        App = (await AppPromise).App
        setGrant((await ready)?.detail)
      } catch (e) {
        data.error = true
        throw e
      } finally {
        data.loading = false
      }
    })
    onErrorCaptured((error, inst, info) => {
      if (vm === inst) { data.error = true }
    })
    defineProperty(window, 'vm', { get() { return vm } })
    expose(data)
    return () => [
      App != null ? h(App, props ??= { ref(_) { vm = _ } }) : null,
      h(Spin, { show: data.loading }),
      h(Bar, data)
    ]
  }
}).mount('#app')
