import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueCompositionAPI from '@vue/composition-api'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false


new Vue({
  pinia,
  render: h => h(App)
}).$mount('#app')
