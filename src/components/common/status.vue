<template>
    <div class="sc_container">
        <svg v-if="now_status==status.s_ONLINE" t="1585021773760" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3258" width="100%" height="100%"><path stroke="null" id="svg_1" fill="#0e932e" p-id="8977" d="m514.702738,510.648637m-384.679266,0a16.529187,16.122722 0 1 0 769.358534,0a16.529187,16.122722 0 1 0 -769.358534,0z"/></svg>   
        <svg v-else-if="now_status==status.s_IDLE" t="1585021897882" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4564" width="100%" height="100%"><path d="M505.4 878.6c-196.7 0-358-150.9-374.9-343.1 1-18.6 16.1-33.4 34.9-33.4 10.8 0 20.5 4.8 26.9 12.4 0.2 0.3 0.5 0.1 0.5-0.7 41.6 44.2 100.5 71.9 166.1 71.9 127.1 0 230.1-103 230.1-230.1 0-66.1-28-125.1-72.6-166.8 0.1-0.1 0.5-0.1 0.3-0.3-7-6.5-11.4-15.7-11.4-26.1 0-19 14.9-34.1 33.7-35.3 192.1 17.1 342.9 178.3 342.9 375 0 208-168.5 376.5-376.5 376.5z" fill="#faa61a" p-id="4565"></path></svg>
        <svg v-else-if="now_status==status.s_NOTDISTURB" t="1585021964294" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6630" width="100%" height="100%"><path stroke="null" id="svg_1" fill="#d81e06" p-id="6631" d="m518.818197,104.727286a407.272733,400.454532 0 1 0 407.272733,400.454532a407.272733,400.454532 0 0 0 -407.272733,-400.454532zm206.351518,436.762409l-412.703037,0a36.926061,36.307878 0 1 1 0,-72.615755l412.703037,0a36.926061,36.307878 0 1 1 0,72.615755z"/></svg>
        <svg v-else t="1585022001907" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7516" width="100%" height="100%"><path stroke="null" id="svg_1" fill="#747f8d" p-id="3259" d="m516.176074,140.909851c-216.888812,0 -393.448138,171.182522 -393.448138,382.453857c0,211.208613 177.535461,382.453857 394.424273,382.453857c216.856613,0 390.938093,-171.245244 390.938093,-382.453857c0,-211.271335 -175.057615,-382.453857 -391.914227,-382.453857zm-0.766955,573.680786c-108.428699,0 -196.340591,-85.653601 -196.340591,-191.226929c0,-105.573328 87.911892,-191.226929 196.340591,-191.226929s196.340591,85.653601 196.340591,191.226929c0,105.573328 -87.911892,191.226929 -196.340591,191.226929z"/></svg>
    </div>
</template>

<script>
import {ONLINE,IDLE,NOTDISTURB,STEALTH} from './mycommon.js';
export default {
    name:'status',
    mounted: function(){
        console.log(this.now_status)
    },
    data: function(){
        return {
            status:{
                s_ONLINE:ONLINE,
                s_IDLE:IDLE,
                s_NOTDISTURB:NOTDISTURB,
                s_STEALTH:STEALTH
            }
        }
    },
    props: [
        'now_status'
    ]
}
</script>

<style>
.sc_container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>