/*
vue js components works by initilizing
small instances of the Vue object
and nesting the inside of each other
this file is where Vue js gets initialize
the main Vue obj instance gets loaded
also global dependencies get loaded here
*/
import Vue from 'vue'
// main vue object that gets created at boot
import App from './App.vue'
// router works kind of the same as in
// angular, nothing much
import router from './router'
/*
this file load VUEX
the official state management library for Vue
this enable use to load all the data once
see file src/store/index.js for more comments
*/
import store from './store/index'
/*
UI libraries
just used the modal component as required by the assigment.
I tried keep the whole thing as minimal as posible
*/
import VModal from 'vue-js-modal'
Vue.use(VModal)
// CSS Stylesheets need to be loaded here
// otherwise they won't be build for production
import '../public/bulma.min.css'
// end UI frameworks and components

Vue.config.productionTip = true

// here is where vue gets initialized and instaciate
// All the dependcies App.vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
