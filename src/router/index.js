import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import account from '@/components/account'
import login from '@/components/login'
import register from '@/components/register'
import Notfound from '@/components/Notfound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/account',
      name: 'account',
      redirect: '/account/login',
      component: account,
      children:[
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register
        }
      ]
    },
    {
      path: '/NotFound',
      name: 'Notfound',
      component: Notfound
    },
    {
      path: '*',
      redirect: '/NotFound'
    }

  ]
})
