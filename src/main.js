
import { createApp } from 'vue'
import App from './components/app.vue'
import { setGmxhr, setFetch } from './ddplay-api'
import { beforeLoad } from './utils'

const app = createApp(App)
beforeLoad('external:tampermonkey:grant').then(e => {
  const _ = e?.detail
  if (_ != null) {
    setGmxhr(_.GM_xmlhttpRequest)
    setFetch(_.GM_fetch)
  }
  const vm = app.mount('#app')
  window._vm = vm
})
