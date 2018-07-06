import Vue from 'vue'
import Router from 'vue-router'
import NewsRoom from '@/components/NewsRoom'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsRoom',
      component: NewsRoom
    }
  ]
})
