import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

// UI frameworks and components
import VModal from 'vue-js-modal'

Vue.use(VModal)
  // CSS framework Stylesheets
import 'buefy/dist/buefy.css'
// end UI frameworks and components

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
