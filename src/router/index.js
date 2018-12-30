import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import City from '@/components/city/city'
import Detaile from '@/components/detailes/detaile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detaile',
      name: 'Detaile',
      component: Detaile
    }
  ]
})
