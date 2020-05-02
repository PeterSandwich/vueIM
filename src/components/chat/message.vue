<template>
    <div class="msg_container" v-bind:class="{msg_container_active:with_head}">
        <div  class="msg_with_head">
            <div>
                <div class="msg_head_img" v-if="with_head">
                    <img :src="user_info.headimg" />
                </div>
                <div v-else class="msg_head_time">
                    <span class="msg_head_time_span">{{msg.timestamp|toTimeHm}}</span>
                </div>
            </div>
            <div class="msg_text">
                <h2 v-if="with_head">{{user_info.name}}<span>{{msg.timestamp|toTimeRead}}</span></h2>
                <div>
                    <template v-if="msg.innerText">
                        <div v-for="t in msg.innerText" :key="t.id">{{t}}</div>
                    </template>
                    <template v-if="msg.msg_type=='image'&& percentage<0" >
                        <div class="imgstyle">
                            <div :style="imgstyle" >
                                <!-- <img style="max-width:400px" :src="msg.content.src" /> -->
                                <el-image 
                                style="max-width:400px"
                                :src="msg.content.src" 
                                :preview-src-list="[msg.content.src]">
                            </el-image>

                            </div>
                        </div>
                    </template>
                    <template v-if="(msg.msg_type=='file' ||msg.msg_type=='image')&& percentage>=0" >
                        <div class="imgstyle">
                            <div class="filestyle" >
                                <div>
                                    <svg t="1585797811811" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31924" width="40" height="38"><path d="M934.956522 974.758957c0 26.713043-17.853217 48.484174-39.980522 48.528695L130.048 1024c-22.127304 0-40.069565-21.682087-40.069565-48.439652L89.043478 49.062957c0-26.757565 17.853217-48.528696 39.980522-48.528696L691.867826 0l242.331826 227.06087 0.75687 747.698087z" fill="#E6E4E2" p-id="31925"></path><path d="M934.956522 222.430609L730.37913 222.608696c-22.127304 0-40.069565-21.23687-40.114087-47.460174L690.086957 0l244.869565 222.430609z" fill="#C4BCB1" p-id="31926"></path><path d="M712.347826 380.349217c0 13.356522-10.774261 24.175304-24.041739 24.175305H291.172174A24.130783 24.130783 0 0 1 291.172174 356.173913h397.133913c13.267478 0 24.041739 10.818783 24.041739 24.175304z m0 181.248c0 13.356522-10.774261 24.175304-24.041739 24.175305H291.172174a24.130783 24.130783 0 0 1 0-48.350609h397.133913c13.267478 0 24.041739 10.863304 24.041739 24.175304z m0 193.357913c0 13.356522-10.774261 24.175304-24.041739 24.175305H291.172174a24.130783 24.130783 0 0 1 0-48.350609h397.133913c13.267478 0 24.041739 10.818783 24.041739 24.175304z" fill="#C4BCB1" p-id="31927"></path></svg>
                                </div>
                                <div class="filestyle_info">
                                    <div>{{msg.content.fileName}}</div>
                                    <div><el-progress :percentage="percentage" :color="customColors"></el-progress></div>
                                </div>
                                <div @click="cancel()" class="filestyle_icon filestyle_icon_del">
                                    <svg t="1585798552111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="34289" width="16" height="16"><path d="M529.306 328.294l296.96-296.96a101.786 101.786 0 0 1 143.872 143.77l-296.96 296.96 296.96 297.062a101.786 101.786 0 0 1-143.77 143.975l-296.96-296.96-296.96 296.96a101.786 101.786 0 0 1-144.18-143.872l296.96-296.96-296.96-297.063A101.786 101.786 0 0 1 232.244 31.334l296.96 296.96z" p-id="34290" fill="#707070"></path></svg>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-if="msg.msg_type=='file' && percentage<0">
                        <div class="imgstyle">
                            <div class="filestyle" >
                                <div>
                                    <svg t="1585797811811" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31924" width="40" height="38"><path d="M934.956522 974.758957c0 26.713043-17.853217 48.484174-39.980522 48.528695L130.048 1024c-22.127304 0-40.069565-21.682087-40.069565-48.439652L89.043478 49.062957c0-26.757565 17.853217-48.528696 39.980522-48.528696L691.867826 0l242.331826 227.06087 0.75687 747.698087z" fill="#E6E4E2" p-id="31925"></path><path d="M934.956522 222.430609L730.37913 222.608696c-22.127304 0-40.069565-21.23687-40.114087-47.460174L690.086957 0l244.869565 222.430609z" fill="#C4BCB1" p-id="31926"></path><path d="M712.347826 380.349217c0 13.356522-10.774261 24.175304-24.041739 24.175305H291.172174A24.130783 24.130783 0 0 1 291.172174 356.173913h397.133913c13.267478 0 24.041739 10.818783 24.041739 24.175304z m0 181.248c0 13.356522-10.774261 24.175304-24.041739 24.175305H291.172174a24.130783 24.130783 0 0 1 0-48.350609h397.133913c13.267478 0 24.041739 10.863304 24.041739 24.175304z m0 193.357913c0 13.356522-10.774261 24.175304-24.041739 24.175305H291.172174a24.130783 24.130783 0 0 1 0-48.350609h397.133913c13.267478 0 24.041739 10.818783 24.041739 24.175304z" fill="#C4BCB1" p-id="31927"></path></svg>
                                </div>
                                <div class="filestyle_info">
                                    <div>{{msg.content.fileName}}</div>
                                    <div>{{msg.content.fileSize}}B</div>
                                </div>
                                <div class="filestyle_icon">
                                    <a :href="msg.content.src" :download="msg.content.fileName">
                                        <svg t="1585798013243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33291" width="28" height="28"><path d="M769.452 752.614H254.48c-15.14 0-27.429 12.153-27.429 27.158v8.962c0 15.004 12.289 27.157 27.43 27.157h514.97c15.141 0 27.498-12.153 27.498-27.157v-8.962c0-15.005-12.289-27.158-27.497-27.158z m-470.366-261.05l190.305 175.912c12.153 11.202 32.454 11.202 44.606 0l190.306-175.98c18.67-17.313 4.82-45.896-22.337-45.896h-61.172c-17.041 0-30.824-12.153-30.824-27.157V235.13c0-15.005-13.782-27.158-30.823-27.158H443.835c-17.041 0-30.824 12.153-30.824 27.158v183.38c0 15.004-13.782 27.157-30.823 27.157h-60.765c-27.09 0-41.007 28.583-22.337 45.896z" p-id="33292" fill="#707070"></path></svg>
                                    </a>
                                </div>
    
                            </div>
                        </div>
                    </template>

                </div>
            </div>
        </div>
        <div class="msg_op" v-if="isMeSend" @click="delete_msg()">
            <svg t="1587781189309" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3722" width="22" height="22"><path d="M656 288h144a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-48v496a16 16 0 0 1-16 16H288a16 16 0 0 1-16-16V336h-48a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h144v-80a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16v80z m-48 0v-48H416v48h192z m32 48H320v464h384V336h-64z m-208 112h16a16 16 0 0 1 16 16v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V464a16 16 0 0 1 16-16z m144 0h16a16 16 0 0 1 16 16v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V464a16 16 0 0 1 16-16z" p-id="3723" fill="#dbdbdb"></path></svg>
            <p>删除</p>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import _ from 'lodash'
export default {
    name: 'message',
    props:[
        'with_head',
        'msg',
        'chat_id'
    ],
    filters: {
        toTimeHm: function (value) {
            return moment(value).format("HH:mm");
        },
        toTimeRead: function(value){
            console.log("timestamp:",value)
            function toCn(n){
                switch(n){
                    case 0: return '星期日';
                    case 1: return '星期一';
                    case 2: return '星期二';
                    case 3: return '星期三';
                    case 4: return '星期四';
                    case 5: return '星期五';
                    case 6: return '星期六';    
                    default: return ''
                }
            }
            let weekday = toCn(moment(value).weekday())
            let Hm = moment(value).format("HH:mm")
            let p = moment().day(0).valueOf()
            let pp = moment().day(-7).valueOf()
            let ppp = moment().day(-7-7).valueOf()
            if(value >= pp){
                return weekday+Hm
            }else if(value >= ppp){
                return '上'+weekday+Hm
            }else{
                return moment(value).format("YYYY/MM/DD HH:mm")
            }
        }
    },
    computed:{
        imgstyle(){
            let w = this.msg.content.width;
            let h = this.msg.content.height;
            console.log(w,h)
            if (w>400){
                w=400
                h = (400*h)/this.msg.content.width
            }
            
            return "width:" + 
            w+
            "px;height:"+h+"px; background-color: #9191911f;;"
        },
        isMeSend(){
            return this.$store.state.me.base.me_id == this.msg.sender
        }
    },
    mounted: function(){
        console.log("mounted=>",this.msg)

        let uid = this.msg.sender;
        if(uid == this.$store.state.me.base.me_id){
            this.user_info = {
                name: this.$store.state.me.base.me_name,
                headimg: this.$store.state.me.base.me_headimg
            }
        }else{
            let idx = _.findIndex(this.$store.state.chat_list.clist, function(o){return o.uid == uid});
            if(idx>=0){
                this.user_info = {
                    name: this.$store.state.chat_list.clist[idx].chat_name,
                    headimg: this.$store.state.chat_list.clist[idx].avatar
                }
            }else{
                //todo 去群组列表查找
            }
        }

        console.log("param:",this.msg)
        if(this.msg.param){
            this.source = this.$axios.CancelToken.source();
            this.$axios.post('/api/upload', this.msg.param,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    cancelToken: this.source.token,
                    onUploadProgress: ( progressEvent )=> {
                        this.percentage = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ))
                    }
                }
            ).then((response) =>{
                this.percentage = -1
                if(response.status == 200 && response.data.code == 1001){
                    let src = response.data.data
                    let op = 0
                    if(this.msg.isgroup){
                        op = 1
                    }
                    let body = {
                        op: op,
                        msg: {
                            msg_id: this.msg.msg_id,
                            msg_type: this.msg.msg_type,
                            sender: this.msg.sender,
                            receiver:this.msg.receiver, 
                            innerText: this.msg.innerText, 
                            content: this.msg.content
                        }
                    }
                    body.msg.content.src = "/files/"+src
                    this.$gws.ws.send(JSON.stringify(body))
                     console.log("fileUploadAfter")
                    this.$store.commit("fileUploadAfter",{chat_id: this.chat_id,msg_id:this.msg.msg_id})
                }else{
                    console.log(response.data.message)
                    this.$message.error(response.data.message)
                    this.$store.commit("msglist_del",{chat_id: this.chat_id,msg_id:this.msg.msg_id})
                }
            })
            .catch( (error)=> {
                console.log("catch error")
                console.log(error)
                this.$store.commit("msglist_del",{chat_id: this.chat_id,msg_id:this.msg.msg_id})
            });
        }
    },
    methods:{
        cancel(){
            this.source.cancel('Operation canceled by the user.');
        },
        delete_msg(){
            this.$emit('del_msg',this.msg)
        }
    },
    data:function(){
        return {
            source: null,
            percentage: -1,
             customColors: [
                {color: '#f56c6c', percentage: 20},
                {color: '#e6a23c', percentage: 40},
                {color: '#5cb87a', percentage: 60},
                {color: '#1989fa', percentage: 80},
                {color: '#6f7ad3', percentage: 100}
            ],
            user_info: {
                name: 'unknow',
                headimg: ''
            }
        }
    }
}
</script>

<style>
.msg_container{
    position: relative;
    width: 100%;
    padding-right: 48px;
    padding-top: 2px;
    padding-bottom: 2px;
    /* background-color: blueviolet; */
    
}
.msg_container:hover .msg_head_time_span{
    visibility: visible;
}
.msg_container:hover {
    background-color: rgb(41, 45, 48);
}
.msg_container_active{
    margin-top: 15px;
}

.msg_with_head{
    display: grid;
    grid-template-columns: 72px auto;
    /* min-height: 48px; */
    
}


.msg_head_time{
    display: flex;
    justify-content:flex-end;
    padding-right: 12px;
    font-size: 0.6875rem;   
    color: #72767d;
    padding-top: 4px;
}
.msg_head_time_span{
    visibility: hidden;
}
.msg_head_img{
    padding-top: 5px;
    display: flex;
    justify-content: center;
}
.msg_head_img img{
    width: 40px;
    height: 40px;
    border-radius: 50px;
}
.msg_text{
    /* background-color: rgb(43, 226, 217); */
    font-size: 1rem;
    line-height: 1.375rem;
    color: #dcddde;
}
.msg_text h2{
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.375rem;
    color: white;
    display: inline;
    vertical-align: baseline;
}
.msg_text h2 span{
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: #72767d;
    vertical-align: baseline;
    margin-left: .25rem;
    padding-left: 5px;
}
.imgstyle{
    padding: 8px 0px 2px 0px;
}
.msg_op{
    display: none;
    height: 32px;;
    width: 80px;
    background-color: rgb(92, 92, 92);
    position: absolute;
    top: -10px;
    right: 20px;;
    z-index: 99;
    border-radius: 4px;

    
}
.msg_container:hover .msg_op{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: center;
    color: red;
    padding-left: 10px;
}
.msg_op>p{
    /* height: 32px;; */
    font-size: 14px;;
    margin-bottom: 0rem;
    line-height: 32px;
}
.filestyle{
    width: 520px;
    height: 62px;
    background-color: rgb(60, 62, 66);
    border: 1px solid rgba(0, 0, 0, 0.568);
    border-radius: 4px;
    padding: 10px;
    display: flex;
    flex-direction: row;
}
.filestyle_info{
     width: 420px;;
     padding-left: 8px;
}
.filestyle_info>div:first-child{
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.filestyle_info>div:last-child{
    font-size: 13px;
    color: rgb(156, 156, 156);
}
.filestyle_icon{
    padding: 6px;
}
.filestyle_icon_del{
    margin-left: 6px;
}
.el-image-viewer__mask{
    opacity: 0.9;
}
</style>