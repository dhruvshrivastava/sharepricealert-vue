import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNativeSock from 'vue-native-websocket'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import SlitherSlider from 'slither-slider'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueNativeSock, 'ws://localhost:5678', { store: store, format: 'json' })

Vue.use(BootstrapVue)
Vue.use(SlitherSlider)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
