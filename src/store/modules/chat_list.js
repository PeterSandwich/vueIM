let _ = require('lodash')
const chat_list={
    state: { 
        clist: [
            {
                chat_id: 3030000,
                chat_name: "吴广城",
                chat_user_id: 1606100138,
                is_group: false,
                chat_img: "https://images.unsplash.com/photo-1520182205149-1e5e4e7329b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                user_status: 2,
                group_memnber: []
            }
        ]
     },
    getters:{
        getChatList: state => {
            return state.clist
        }
    },
    mutations: {
        chatlist_delete (state, payload) {
            state.clist = _.remove(state.clist, function(v) {
                return v.chat_id!=payload;
            });      
        },
        chatlist_add(state, payload){
            console.log(payload)
            let item={
                chat_id: 3030000+state.clist.length+1,
                chat_user_id: payload.chat_user_id,
                chat_name: payload.chat_name,
                is_group: payload.is_group,
                chat_img: payload.chat_img,
                user_status: payload.user_status,
                group_memnber: payload.group_memnber
            }
            state.clist.unshift(item)
        }
    }
}

export default chat_list;