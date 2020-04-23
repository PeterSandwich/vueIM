let _ = require('lodash')
const chat_list={
    state: { 
        clist: [
            // {
            //     uid: "83ee5f562b574afcba420d595aa46ab2"
            //     is_group: false
            //     chat_name: "wgc"
            //     avatar: "https://img.51miz.com/Element/00/77/27/33/9085ae9e_E772733_58c62bd5.png"
            //     member_count: 0
            //     unread_count: 1
            //     latest_msg_time: 0
            // }
        ]
     },
    getters:{
        getChatList: state => {
            return state.clist
        }
    },
    mutations: {
        set_chatlist(state, payload){
            state.clist = payload
        },
        chatlist_delete (state, payload) {
            state.clist = _.remove(state.clist, function(v) {
                return v.uid!=payload;
            });      
        },
        chatlist_add(state, payload){
            
            let item={
                uid: payload.uid,
                is_group: false,
                chat_name: payload.name,
                avatar: payload.avatar,
                member_count: 0,
                unread_count: 0,
                latest_msg_time: 0
            }
            state.clist.unshift(item)
            // console.log(state.clist)
        },
        chatlist_group_add(state, payload){
            
            let item={
                uid: payload.uid,
                is_group: true,
                chat_name: payload.name,
                avatar: payload.avatar,
                member_count: payload.member_count,
                unread_count: 0,
                latest_msg_time: 0
            }
            state.clist.unshift(item)
            // console.log(state.clist)
        }
    }
}

export default chat_list;