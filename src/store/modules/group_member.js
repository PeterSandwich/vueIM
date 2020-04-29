let _ = require('lodash')
const group_member = {
    state: { 
        members:{}
    },
    mutations: {
        save_group_member(state,  playload){
            let tmp = state.members
            tmp[playload.gid]=playload.memberList
            state.members = tmp
        }
    },
    getters:{
        get_group_member(state, playload){
            if(state.members[playload]){
                return state.members[playload]
            }
            return []
        }
    },
    mutations:{
        remove_member(state,payload){
            console.log(payload)
            console.log(state.members[payload.gid])
            if(state.members[payload.gid]){
                state.members[payload.gid] = _.remove(state.members[payload.gid], function(v) {
                    return v.uid!=payload.uid;
                });      
            }
        }
    }
}
export default group_member;