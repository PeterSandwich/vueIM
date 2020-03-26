import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import home_page from './modules/home_page.js'
import server from './modules/server.js'
import chat_list from './modules/chat_list.js'

export default new vuex.Store({
    modules:{
        home: home_page,
        server: server,
        chat_list
    }
})