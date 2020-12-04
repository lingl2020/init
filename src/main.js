import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import logMethod from './utils/log'
// import dataAnalyze from 'data_analyze'
import dayjs from 'dayjs'
import beaconAction from './utils/pathBeaconAction'

Vue.config.productionTip = false
/**
 * @log 埋点处理
 * @param  {String} pageType
 * @param  {Object} params
 */
function $log(pageType, params) {
  logMethod(pageType, params)
}

dataAnalyze('c','a')
Vue.prototype.$log = $log
Vue.prototype.$dateFormat = dayjs
Vue.prototype.pathBeaconAction = beaconAction

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
