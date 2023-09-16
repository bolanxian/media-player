
import { createApp } from 'vue'
import App from './components/app.vue'
import { setGmxhr, setFetch, beforeLoad } from './utils'

const app = createApp(App)
const grantEvent = await beforeLoad('external:tampermonkey:grant')
const grant = grantEvent?.detail
if (grant != null) {
  setGmxhr(grant.GM_xmlhttpRequest)
  setFetch(grant.GM_fetch)
}
const vm = app.mount('#app')
window._vm = vm
