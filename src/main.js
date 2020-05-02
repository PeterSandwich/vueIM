// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import ContextMenu from '@gahing/vcontextmenu'
import '@gahing/vcontextmenu/lib/vcontextmenu.css'
import axios from 'axios';
import router from './router'
import g_websocket from './g_websocket'
import UUID from 'vue-uuid';
import VueCookies from 'vue-cookies'
import { Message } from 'element-ui';
import { Notification } from 'element-ui';

 
Vue.use(UUID);
Vue.use(ContextMenu)
Vue.use(ElementUI);
Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.withCredentials = true
Vue.prototype.$gws = g_websocket

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

axios.interceptors.response.use(function (response) {
  
  if(response.status == 200){
    let code = response.data.code
    let data = response.data.data
    if(code == 1001){
      return response
    }else if(code == 2005){
      Message.error("电子邮箱或密码错误")
    }else if(code == 2010){
      Notification({
        title: '请重新登录',
        message: '服务器需要更新数据,您被迫下线了(*T_T*)',
        type: 'warning'
      })
      setTimeout(()=>{
        window.localStorage.clear()
        location.reload()
      },2000)
      
    }else if(code == 2012){
      Notification({
        title: '请重新登录',
        message: '似乎有人在异地登录,您被迫下线了(*T_T*)',
        type: 'warning'
      })
      setTimeout(()=>{
        window.localStorage.clear()
        location.reload()
      },2000)
      
    }else if(code == 2003){
      Message.error("内部错误")
      console.log("internal error:",data)
    }else{
      // 其他错误等下一层处理
      return response
    }
  }
}, function (error) {
  console.log(error)
  return Promise.reject(error)
}
)


