
import { createApp, shallowRef as sr, onMounted, createVNode as h } from 'vue'
import { Spin, Bar } from './components/spin.vue?spin-img'
import { setGrant, beforeLoad } from './utils'
const { isNaN } = Number

const ready = beforeLoad('external:tampermonkey:grant')
const AppPromise = import('./components/app.vue')
createApp({
  setup() {
    const show = sr(0)
    let App
    onMounted(async () => {
      try {
        App = (await AppPromise).App
        show.value = 1
        setGrant((await ready)?.detail)
        show.value = 2
      } catch (e) {
        show.value = 0 / 0
        throw e
      }
    })
    const props = { ref(vm) { window._vm = vm }, show }
    return () => {
      const $show = show.value
      const loading = $show <= 1, error = isNaN($show)
      return [
        App != null ? h(App, props) : null,
        h(Spin, { show: loading }),
        h(Bar, { loading, error })
      ]
    }
  }
}).mount('#app')
