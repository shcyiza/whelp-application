import Vue from 'vue'
import Router from 'vue-router'
import WholeWorld from './components/WholeWorld.vue'
import Eu from './components/EuBloc.vue'
import Search from './components/SearchCountries.vue'

Vue.use(Router)

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
  linkActiveClass: "active",
  linkExactActiveClass: "exact",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
