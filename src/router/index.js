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

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home,
      meta: {
        requireAuth: true
      },
      redirect: '/master',
      children: [{
          path: 'master',
          name: 'master',
          component: master,
          redirect: '/master/@me',
          children: [{
            path: '@me',
            name: 'me',
            component: friend
          }, {
            path: 'infomation',
            name: 'infomation',
            component: infomation
          }, {
            path: 'chat/:id',
            name: 'chat',
            component: chat,
            beforeEnter: (to, from, next) => {

              // console.log(store.state.chat_list.clist)
              if (_.findIndex(store.state.chat_list.clist, function (o) {
                  return o.uid == to.params.id;
                }) >= 0) {
                  console.log("chat befor in")
                next()
              } else {
                next('/')
              }
            }


          }]
        },
        {
          path: 'channel/:id',
          name: 'channel',
          component: channel
        },
        {
          path: 'discovery',
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
      children: [{
          path: 'login',
          name: 'login',
          component: login,
          meta: {
            requireOperation: true
          }
        },
        {
          path: 'register',
          name: 'register',
          component: register,
          meta: {
            requireOperation: true
          }
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

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
    if (store.state.me.base.me_id!='') { // 判断是否登录window.localStorage.getItem('user_id_cache')
      next()
    } else { // 没登录则跳转到登录界面
      next({
        path: '/account/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else if(to.matched.some(res => res.meta.requireOperation)) {
    if (store.state.me.base.me_id!='') {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  next()
})

export default router
