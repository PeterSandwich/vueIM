
import axios from "axios"
const myself={
    state: { 
        base:{
            me_id: '',//window.localStorage.getItem('user_id_cache'),
            me_fixid: '',//window.localStorage.getItem('user_fixid_cache'),
            me_name: '',//window.localStorage.getItem('user_name_cache'),
            me_email: '',//window.localStorage.getItem('user_email_cache'),
            me_status: {},//window.localStorage.getItem('status_cache'),
            me_headimg: ''//window.localStorage.getItem('user_avatar_cache')
        },
        setting: {}//window.localStorage.getItem('user_setting_cache')
     },
    mutations: {
        setBase(state,payload){

            state.base.me_id = payload.uid
            // window.localStorage.setItem("user_id_cache",payload.uid)

            state.base.me_fixid = payload.fix_id
            // window.localStorage.setItem("user_fixid_cache",payload.fix_id)

            state.base.me_name =payload.name
            // window.localStorage.setItem("user_name_cache",payload.name)

            state.base.me_headimg = payload.avatar
            // window.localStorage.setItem("user_avatar_cache",payload.avatar)

            state.base.me_email =payload.email
            // window.localStorage.setItem("user_email_cache",payload.email)
            
            var status = {
                status: 1,
                self_defind_status: payload.self_defind_status,
                self_defind_status_deadline: payload.self_defind_status_deadline,
                me_sd_status_exsit:false
            }
            if(payload.self_defind_status.me_sd_status!=""){
                status.me_sd_status_exsit=true
            }
            state.base.me_status =status// JSON.stringify(status)
            // window.localStorage.setItem("status_cache",state.base.me_status)

            var setting ={
                me_open_microphone: false,
                me_open_earphone:false
            }
            state.setting = setting//JSON.stringify(setting)
            // window.localStorage.setItem("user_setting_cache",state.setting)
        },
        switch_microphone (state) {
            state.setting.me_open_microphone = !state.setting.me_open_microphone
            // var tmp =JSON.parse(window.localStorage.getItem("user_setting_cache"))
            // tmp.me_open_microphone = !tmp.me_open_microphone
            // state.setting = JSON.stringify(tmp)
            // window.localStorage.setItem("user_setting_cache",state.setting)
        },
        switch_earphone (state) {
            state.setting.me_open_earphone = !state.setting.me_open_earphone
            // var tmp =JSON.parse(window.localStorage.getItem("user_setting_cache"))
            // tmp.me_open_earphone = !tmp.me_open_earphone
            // state.setting = JSON.stringify(tmp)
            // window.localStorage.setItem("user_setting_cache",state.setting)
        },
        switch_status (state,payload) {
            // var tmp =JSON.parse(window.localStorage.getItem("status_cache"))
            // tmp.status = payload
            state.base.me_status.status = payload//JSON.stringify(tmp)
            // window.localStorage.setItem("status_cache",state.base.me_status)
        },
        set_sd_status(state, payload){
            // var tmp = JSON.parse(window.localStorage.getItem("status_cache"))
            state.base.me_status.self_defind_status = payload.msg.trim()
            state.base.me_status.self_defind_status_deadline = payload.keep_time
            if(state.base.me_status.self_defind_status!=""){
                state.base.me_status.me_sd_status_exsit = true
            }
            // state.base.me_status = JSON.stringify(tmp)
            // window.localStorage.setItem("status_cache",state.base.me_status)
        },
        clear_status(state){
            state.base.me_status.self_defind_status = ''
            state.base.me_status.self_defind_status_deadline = 0
            state.base.me_status.me_sd_status_exsit = false
            // var tmp = JSON.parse(window.localStorage.getItem("status_cache"))
            // tmp.me_sd_status_exsit = false
            // tmp.me_sd_status = ''
            // tmp.me_sd_status_keep_time = 0
            // state.base.me_status = JSON.stringify(tmp)
            // window.localStorage.setItem("status_cache",state.base.me_status)
        }
    }
}

export default myself;

