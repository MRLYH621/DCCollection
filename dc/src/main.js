import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/global.css'
import axios from 'axios'
import echarts from 'echarts'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:15335/'
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
