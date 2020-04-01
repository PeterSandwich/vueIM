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
            //             content: {
            //                 text: {
            //                     innerText: []
            //                 },
            //                 image: {
            //                     imageUrl: '',
            //                     width: 300,
            //                     height: 200,
            //                     innerText: []
            //                 },
            //                 file: {
            //                     fileName: '',
            //                     fileSize: '',
            //                     innerText: []
            //                 }
            //             }
            //         }
            //     ]
            // }
        ]
     },
    getters:{
        getMsgList: (state) => (chat_id) => {
            console.log('getiiiiii')
            let idx = _.findIndex( state.msglist, function(o){ return o.chat_id == chat_id;})
            if(idx>=0){
                console.log('getiiiiii',state.msglist[idx].messages)
                return state.msglist[idx].messages
            }
            return []
        }
    },
    mutations: {
        msglist_add(state, payload){
            // console.log('add msg=>', payload)
            let cid = payload.chat_id
            let item={
                msg_id: uuidv1(),
                msg_type: payload.msg_type,
                timestamp: payload.timestamp,
                sender: payload.sender,
                receiver: payload.receiver,
                content: payload.content
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

            console.log(state.msglist)
        }
    }
}

export default chat_message;