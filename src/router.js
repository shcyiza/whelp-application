import Vue from 'vue'
import Router from 'vue-router'
import WholeWorld from './components/WholeWorld.vue'
import Eu from './components/EuBloc.vue'
import Search from './components/SearchCountries.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: WholeWorld
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
  ]
})
