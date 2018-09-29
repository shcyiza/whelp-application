import Vue from 'vue'
import Router from 'vue-router'
import WholeWorld from './components/WholeWorld.vue'
import Eu from './components/EuBloc.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: WholeWorld
    },
      {
          path: '/eu',
          name: 'European Union',
          component: Eu
      },
  ]
})
