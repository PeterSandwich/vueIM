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
 
Vue.use(UUID);
Vue.use(ContextMenu)
Vue.use(ElementUI);

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


