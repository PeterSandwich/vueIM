import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import myself from './modules/myself.js'
import server from './modules/server.js'
import chat_list from './modules/chat_list.js'
import emoji from './modules/emoji.js'
import gif from './modules/gif.js'
import myfriends from './modules/friend.js'
export default new vuex.Store({
    modules:{
        me: myself,
        server: server,
        chat_list,
        emoji,
        gif,
        myfriends
    }
})