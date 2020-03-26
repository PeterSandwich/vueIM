let _ = require('lodash')
const server={
    state: { 
        server_datas: {
            inc_count: 4,
            server_items: [
                {
                    channel_id: 2020001,
                    channel_name: 'Captian Cat',
                    head_img_url: 'https://images.unsplash.com/photo-1585077888877-6608b48b59be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80' 
                },
                {
                    channel_id: 2020002,
                    channel_name: 'Jiawei Pan',
                    head_img_url: 'https://images.unsplash.com/photo-1585069301205-f914289f4561?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' 
                },
                {
                    channel_id: 2020003,
                    channel_name: '复仇者联盟',
                    head_img_url: 'https://images.unsplash.com/photo-1585064210818-8b7af20d03b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' 
                },
                {
                    channel_id: 2020004,
                    channel_name: '66号公路',
                    head_img_url: 'https://images.unsplash.com/photo-1585083971801-793e25e109fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' 
                },
            ]
        }
     },
     getters: {
        getServeList: state => {
          return state.server_datas.server_items
        }
    },
    mutations: {
        server_add (state, payload) {
            state.server_datas.inc_count += 1
            let tmp = {
                channel_id: 2020000+state.server_datas.inc_count,
                channel_name: payload.name,
                head_img_url: payload.img
            }
            state.server_datas.server_items.push(tmp)
        },
        server_delete (state, payload) {
            state.server_datas.server_items = _.remove(state.server_datas.server_items, function(v) {
                return v.channel_id!=payload.channel_id;
            });   
        }
    }
}

export default server;