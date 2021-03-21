import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'

Vue.config.productionTip = false

import './assets/css/main.css';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
