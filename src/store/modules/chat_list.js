let _ = require('lodash')
const chat_list={
    state: { 
        clist: [
            {
                chat_id: 3030001,
                chat_name: '陈云鹏',
                user_status: 1,
                is_group: false,
                chat_img: 'https://images.unsplash.com/photo-1531356971115-564896495bef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
            },
            {
                chat_id: 3030002,
                chat_name: '吴广城',
                user_status: 2,
                is_group: false,
                chat_img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
            },
            {
                chat_id: 3030003,
                chat_name: '甘源弘',
                user_status: 3,
                is_group: false,
                chat_img: 'https://images.unsplash.com/photo-1581930860472-1ef7a510101a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
            },
            {
                chat_id: 3030004,
                chat_name: '王锦',
                user_status: 0,
                is_group: false,
                chat_img: 'https://images.unsplash.com/photo-1519531591569-b84b8174b508?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80'
            },
            {
                chat_id: 3030005,
                chat_name: '王鲜',
                user_status: 2,
                is_group: false,
                chat_img: 'https://images.unsplash.com/photo-1553073441-48924e457d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
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
        }
    }
}

export default chat_list;