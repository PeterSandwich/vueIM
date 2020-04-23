
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
    }
}
export default group_member;