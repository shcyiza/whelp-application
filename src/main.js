import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

// CSS framework
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
// end CCS framework

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
