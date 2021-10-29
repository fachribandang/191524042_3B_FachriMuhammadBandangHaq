import Vue from 'vue'
import Router from 'vue-router'
import Language from '@/views/Language'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Language',
      component: Language
    }
  ]
})
