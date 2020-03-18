import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import account from '@/components/account'
import login from '@/components/login'
import register from '@/components/register'
import Notfound from '@/components/Notfound'
import channel from '@/components/channel'
import friend from '@/components/friend'
import infomation from '@/components/infomation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/channel',
      children:[
        {
          path: 'channel',
          name:'channel',
          component: channel,
          redirect: '/channel/@me',
          children:[
            {
              path: '@me',
              name: 'friend',
              component: friend
            },{
              path: 'infomation',
              name: 'infomation',
              component: infomation
            }
          ]
        }
      ]
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
