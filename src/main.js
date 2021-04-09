import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './sw'

// import './service-worker'

import router from './router'

Vue.config.productionTip = false




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
