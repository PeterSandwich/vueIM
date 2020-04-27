import friend from './friend.js'
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
        },
        chatlist_change(state,chat_id){
            let idx = _.findIndex(state.clist, (o)=>{return o.uid==chat_id})
            if(idx>=0){
                let tmp = state.clist[idx]
                _.remove(state.clist, (o)=>{return o.uid==chat_id})
                tmp.unread_count++
                state.clist.unshift(tmp)
            }else{
                
                let idx = _.findIndex(friend.state.friends, (o)=>{return o.uid == chat_id})
                if(idx>=0){
                    let f = friend.state.friends[idx]
                    let item={
                        uid: chat_id,
                        is_group: false,
                        chat_name: f.name,
                        avatar: f.headimg,
                        member_count: 0,
                        unread_count: 1,
                        latest_msg_time: 0
                    }
                    state.clist.unshift(item)
                }else{
                    console.log("something wrong")
                }
            }
        },
        clear_unread(state,chat_id){
            let idx = _.findIndex(state.clist, (o)=>{return o.uid==chat_id})
            if(idx>=0){
                state.clist[idx].unread_count =0
            }
        }

    }
}

export default chat_list;