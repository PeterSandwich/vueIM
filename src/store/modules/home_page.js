
const home_page={
    state: { 
        me_open_microphone: true,
        me_open_earphone:false,
        me_status: 1
     },
    mutations: {
        switch_microphone (state) {
            state.me_open_microphone = !state.me_open_microphone
        },
        switch_earphone (state) {
            state.me_open_earphone = !state.me_open_earphone
        },
        switch_status (state,payload) {
            state.me_status = payload
        }
    }
}

export default home_page;

