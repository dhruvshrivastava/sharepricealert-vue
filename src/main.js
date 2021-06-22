import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNativeSock from 'vue-native-websocket'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import SlitherSlider from 'slither-slider'
import { Tabs } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyBECWAfqIvVuk0GXjbwqOWCKs7XU27l6K8",
  authDomain: "sharepricealert2017.firebaseapp.com",
  databaseURL: "https://sharepricealert2017.firebaseio.com",
  projectId: "sharepricealert2017",
  storageBucket: "sharepricealert2017.appspot.com",
  messagingSenderId: "186383751336",
  appId: "1:186383751336:web:d5736a7481621de8f44a9d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueNativeSock, 'ws://localhost:5678', { store: store, format: 'json' })

Vue.use(Buefy)
Vue.use(SlitherSlider)
Vue.use(Tabs);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
