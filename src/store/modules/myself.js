
const myself={
    state: { 
        base:{
            me_id: '1606100136',
            me_fixid: '8888',
            me_name: '潘家炜',
            me_sd_status_keep_time: 0,
            me_sd_status: '😁正在玩switch',
            me_sd_status_exsit: true,
            me_status: 1,
            me_email: 'TX1606100136@hc.com',
            me_headimg: 'https://images.unsplash.com/photo-1494236536165-dab4d859818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
        },
        
        me_open_microphone: true,
        me_open_earphone:false
     },
    mutations: {
        switch_microphone (state) {
            state.me_open_microphone = !state.me_open_microphone
        },
        switch_earphone (state) {
            state.me_open_earphone = !state.me_open_earphone
        },
        switch_status (state,payload) {
            state.base.me_status = payload
        },
        set_sd_status(state, payload){
            state.base.me_sd_status = payload.msg
            state.base.me_sd_status_keep_time = payload.keep_time
            if(state.base.me_sd_status){
                
                state.base.me_sd_status_exsit = true
                console.log('sadasdasda')
            }
        },
        clear_status(state){
            state.base.me_sd_status_exsit = false
            state.base.me_sd_status = ''
            state.base.me_sd_status_keep_time = 0
        }
    }
}

export default myself;
