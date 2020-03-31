import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import account from '@/components/account'
import login from '@/components/login'
import register from '@/components/register'
import discovery from '@/components/discovery'
import test from '@/components/test'
import Notfound from '@/components/Notfound'
import master from '@/components/master'
import friend from '@/components/friend/friend'
import infomation from '@/components/infomation'
import chat from '@/components/chat/chat'
import channel from '@/components/channel/channel'
import store from '../store/index'
import _ from 'lodash'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/master',
      children:[
        {
          path: 'master',
          name:'master',
          component: master,
          redirect: '/master/@me',
          children:[
            {
              path: '@me',
              name: 'me',
              component: friend
            },{
              path: 'infomation',
              name: 'infomation',
              component: infomation
            },{
              path: 'chat/:id',
              name: 'chat',
              component: chat,
              beforeEnter: (to, from, next) => {
       
                console.log(store.state.chat_list.clist)
                if(_.findIndex(store.state.chat_list.clist, function(o) { return o.chat_id == to.params.id; })>=0){
                  next()
                }else{
                  next('/') 
                }              
              }
              
              
            }
          ]
        },
        {
          path: 'channel/:id',
          name: 'channel',
          component: channel
        },
        {
          path:'discovery',
          name: 'discovery',
          component: discovery
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
      path: '/test',
      name: 'test',
      component: test
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
