import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ga from '@/components/Ga'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/ga',
      component: Ga
    }
  ]
})
