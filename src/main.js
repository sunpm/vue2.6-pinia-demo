import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)
Vue.use(VueCompositionAPI)

const pinia = createPinia()


pinia.use(piniaPluginPersistedstate)

new Vue({
  pinia,
  render: h => h(App),
}).$mount('#app')
