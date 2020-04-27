let _ = require('lodash')
import uuidv1 from 'uuid/v1' 
const chat_message={
    state: { 
        msglist: [
            // {
            //     chat_id:3030000,
            //     messages: [
            //         {
            //             msg_id: 30300000001,
            //             msg_type: 0,
            //             timestamp: 1585705299,
            //             sender: 1606100136,
            //             receiver: 1606100138,
            //             innerText: [],
            //             src: '',
            //             width: 300,
            //             height: 200,
            //             fileName: '',
            //             fileSize: ''
            //         }
            //     ]
            // }
        ]
     },
    getters:{
        getMsgList: (state) => (chat_id) => {
            let idx = _.findIndex( state.msglist, function(o){ return o.chat_id == chat_id;})
            if(idx>=0){
                return state.msglist[idx].messages
            }
            return []
        }
    },
    mutations: {
        fileUploadAfter(state,payload){
            let idx = _.findIndex( state.msglist, function(o){ return o.chat_id == payload.chat_id;})
            if(idx>=0){
                let i = _.findIndex( state.msglist[idx].messages, function(o){ return o.msg_id == payload.msg_id;})
                if(i>=0){
                    state.msglist[idx].messages[i].param = null
                }
               
            }
        },
        msglist_del(state,payload){
            let idx = _.findIndex( state.msglist, function(o){ return o.chat_id == payload.chat_id;})
            console.log("msglist_del idx=",idx)
            if(idx>=0){
                state.msglist[idx].messages = _.remove( state.msglist[idx].messages, function(o) {
                    console.log(o.msg_id, payload.msg_id)
                    return o.msg_id != payload.msg_id;
                });   
                console.log("msglist_del result=",state.msglist[idx].messages)
                // state.msglist[idx].messages = _.filter( state.msglist[idx].messages, function(o){ return })
            }
        },
        msglist_add(state, payload){
            let cid = payload.chat_id
            let item={
                msg_id: payload.msg_id,
                msg_type: payload.msg_type,
                timestamp: payload.timestamp,
                sender: payload.sender,
                receiver: payload.receiver,
                innerText: payload.innerText,
                content: payload.content,
                param: payload.param,
                isgroup: payload.isgroup
            }

            let idx = _.findIndex( state.msglist, function(o){ return o.chat_id == cid;})
            if(idx>=0){
                state.msglist[idx].messages.push(item)
            }else{
                let initAry = {
                    chat_id: cid,
                    messages: [
                        item
                    ]
                }
                state.msglist.push(initAry)
            }
        }
    }
}

export default chat_message;