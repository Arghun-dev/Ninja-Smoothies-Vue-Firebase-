import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmoothy from '@/components/AddSmoothy'
import EditSmoothy from '@/components/EditSmoothy'

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
    },

    {
      path: '/edit-smoothy/:smoothy_slug',
      name: 'EditSmoothy',
      component: EditSmoothy
    }
  ]
})
