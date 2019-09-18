import Vue from 'vue'
import Router from 'vue-router'
import Cases from './01-views/v-01-cases/Cases.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'cases',
      component: Cases
    }
  ]
})
