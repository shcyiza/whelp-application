import Vue from 'vue'
import Router from 'vue-router'
import WholeWorld from './components/WholeWorld.vue'
import Eu from './components/EuBloc.vue'
import Search from './components/SearchCountries.vue'

Vue.use(Router)
// https://router.vuejs.org/api/
// pretty standard router for modern JS front-end frameworks
// one weird thing down below
export default new Router({
  routes: [{
      path: '/world',
      name: 'world',
      component: WholeWorld,
      alias: '/'
    },
    {
      path: '/eu',
      name: 'European Union',
      component: Eu
    },
    {
      path: '/search',
      name: 'Search Countries',
      component: Search
    },
  ],
  // class assigment when link is actif
  // as in angular
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
  /*
  only quirck of the vue router compare to the other
  popular front-end framework
  weirdly enought you got to specify the default
  scrolling behavior for it to work as expected
  */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
