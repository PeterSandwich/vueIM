import Vue from 'vue'
import vuex from 'vuex'
import VuexPersistence from "vuex-persist";
Vue.use(vuex);

import myself from './modules/myself.js'
import server from './modules/server.js'
import chat_list from './modules/chat_list.js'
import emoji from './modules/emoji.js'
import gif from './modules/gif.js'
import myfriends from './modules/friend.js'
import group_member from './modules/group_member'
import chat_message from './modules/chat_message.js'

const vuexPersist = new VuexPersistence({
    storage: sessionStorage
  });

  
export default new vuex.Store({
    modules:{
        me: myself,
        server: server,
        chat_list,
        emoji,
        gif,
        myfriends,
        chat_message,
        group_member
    },
    plugins: [vuexPersist.plugin]
})