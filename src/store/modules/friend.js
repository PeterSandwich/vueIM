let _ = require('lodash')
import fl from './friend_res'
const myfriends={
    state: { 
        friends: [],
        wait_friends: [],
        wait_friend_to_me: [],
        shield_friends:  []
    },
    mutations: {
        flush_wait_friends(state, playload){
            if(playload){
                state.wait_friends = playload
            }
        },
        flush_wait_friend_to_me(state, playload){
            state.wait_friend_to_me = playload
        },
        delete_one_wait_friend_to_me(state,uid){
            state.wait_friend_to_me =  _.filter(state.wait_friend_to_me, function(n) {
                return n.uid!=uid;
            });
        },
        flush_all_friend_list(state,playload){
            if(playload){
                state.friends = playload
            }
        },
        flush_shield_friend_list(state,playload){
            if(playload){
                state.shield_friends = playload
            }
        }
    }
}

export default myfriends;

