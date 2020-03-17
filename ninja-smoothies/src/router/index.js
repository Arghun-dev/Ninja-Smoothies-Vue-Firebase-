import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmoothy from '@/components/AddSmoothy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/add-smoothy',
      name: 'AddSmoothy',
      component: AddSmoothy
    }
  ]
})
