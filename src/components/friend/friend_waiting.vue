<template>
    <div class="wt_container">
        <div  class="wt_container_nx">
            <div v-if="wait_friend_list_count&&wait_friend_list_count>0" class="wt_container_in">
                <div class="wt_cantainer_list_item_head">待处理数-{{wait_friend_list_count}}</div>
                <div class="wt_cantainer_list_item" v-for="friend in wait_friend_list" v-bind:key='friend.uid'>
                    <div class="wt_cantainer_list_item_info">
                        <div class="wt_cantainer_list_item_img">
                            <wait-friend-head style="width: 36px;height: 36px;" :with_status="false" :headimg="friend.avatar" v-bind:bg_color="'#2f3136'"   v-bind:user_status="0"></wait-friend-head>
                        </div>
                        <div class="wt_cantainer_list_item_name">
                            <div class="wt_cantainer_list_item_name_1">{{friend.name}}<span>#{{friend.fixid}}</span></div>
                            <div><span v-if="friend.from_me">发出</span><span v-else>收到</span>的好友请求<span class="wt_time_show">{{friend.time|toTimeRead}}</span></div>
                        </div>
                    </div>
                    <div class="wt_cantainer_list_item_action">
                        <el-tooltip class="item" effect="dark" content="拒绝" placement="top" :enterable="false" transition="el-zoom-in-top">
                        <div class="wt_cantainer_list_item_action_com wt_cantainer_list_item_action_del" @click="refuse(friend.uid,friend.name)">
                            <svg t="1584688386695" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2639" width="14" height="14"><path d="M604.010237 516.920604 1003.934137 116.996704C1030.645959 90.284883 1030.645959 46.861051 1003.934137 20.14923 977.153827-6.631082 933.798482-6.631082 907.086661 20.14923L507.162763 420.07313 116.964706 29.875073C90.252885 3.163252 46.829053 3.163252 20.117232 29.875073-6.66308 56.655385-6.66308 100.010725 20.117232 126.722546L410.31529 516.920604 35.322423 891.913471C8.54211 918.625293 8.54211 962.049126 35.322423 988.760942 62.034243 1015.541258 105.389583 1015.541258 132.169896 988.760942L507.162763 613.768077 891.881473 998.486785C918.593295 1025.267102 961.948633 1025.267102 988.728944 998.486785 1015.50926 971.774963 1015.50926 928.419625 988.728944 901.639315L604.010237 516.920604Z" p-id="2640" class="f_w_n_icon"></path></svg>
                        </div>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="同意" placement="top" :enterable="false" transition="el-zoom-in-top">
                        <div class="wt_cantainer_list_item_action_com wt_cantainer_list_item_action_access" v-if="!friend.from_me" @click="agree(friend.uid,friend.name)">
                            <svg t="1584689247436" class="icon" viewBox="0 0 1196 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4208" width="14" height="14"><path d="M141.93624 417.289101a85.332053 85.332053 0 1 0-110.249013 130.216713L422.849359 878.935509a85.332053 85.332053 0 0 0 120.318196-10.239846L1159.26498 140.642584A85.332053 85.332053 0 1 0 1028.877602 30.222907L467.904684 693.423625 141.93624 417.289101z" p-id="4209" class="f_w_y_icon"></path></svg>
                        </div> 
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div v-else class="ad_cantainer_list_nx_img">
                    <img src="../../assets/undraw_add_document_0hek.svg"/>
                    <h3>暂时没什么要处理的</h3>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import myhead from '../common/myhead.vue';
export default {
    name: 'friend_waiting',
    data: function(){
        return {
            ok: true,
            count: 15
        }
    },
    mounted:function(){
        this.$axios.get('http://localhost:9876/api/request_friend_list')
            .then((response) =>{
                if(response.status == 200 && response.data.code == 1001){
                    console.log(response.data.data)
                    if(response.data.data){
                        this.$store.commit("flush_wait_friend_to_me",response.data.data)
                    }
                    
                }else{
                    console.log(response);
                    this.$message.error(response.data.message)
                    this.$store.commit("flush_wait_friend_to_me",[])
                }
                
            }
            ).catch(function (error) {
                console.log(error);
            });
    },
    filters: {
        toTimeRead: function(value){
            value/=1000
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
            if(value>pp && value<=p){
                return '上'+weekday+Hm
            }else if (value > p){
                return weekday+Hm
            }else{
                return moment(value).format("YYYY/MM/DD HH:mm")
            }
        }
    },
    methods:{
        user_status_cn(s){
            if(s==1){
                return "在线"
            }else if(s==2){
                return "闲置"
            }else if(s==3){
                return "请勿打扰"
            }else{
                return "离线"
            }
        },
        agree(uid,name){
            if(uid==""){
                console.log("uid 为空")
                return
            }
            this.$axios.post('http://localhost:9876/api/agree_request_friend',{uid:uid})
            .then((response) =>{
                if(response.status == 200 && response.data.code == 1001){
                    this.$message({ message: '已接受 '+name+" 的请求",type: 'success'})
                    this.$store.commit("delete_one_wait_friend_to_me",uid)
                }else{
                    this.$message.error(response.data.message)
                }
                
            })
            .catch(function (error) {
                this.$message.error(error)
            });

        },
        refuse(uid,name){
            if(uid==""){
                console.log("uid 为空")
                return
            }
            this.$axios.post('http://localhost:9876/api/refuse_request_friend',{uid:uid})
            .then((response) =>{
                if(response.status == 200 && response.data.code == 1001){
                    this.$message({ message: '已拒绝 '+name+" 的请求",type: 'success'})
                    this.$store.commit("delete_one_wait_friend_to_me",uid)
                }else{
                    this.$message.error(response.data.message)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    computed: {
        wait_friend_list(){
            return this.$store.state.myfriends.wait_friend_to_me
        },
        wait_friend_list_count(){
            return this.$store.state.myfriends.wait_friend_to_me.length
        }
    },
    components:{
        'wait-friend-head': myhead
    }
}
</script>

<style>
.wt_container{

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.wt_container_nx{
    flex:1;
    width: 100%;
    height: 0px;
    display: flex;
    flex-direction: column;
}
.wt_container_in{
    overflow-x: hidden;
    overflow-y: scroll;
}
.wt_container_in::-webkit-scrollbar{
    display: none;
}


.wt_cantainer_list_item{
    height: 62px;
    margin: 0 30px;
    padding: 0px 12px;
    border-top: 1px solid hsla(0, 0%, 100%, 0.06);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}
.wt_cantainer_list_item:hover{
    background-color: hsla(0, 0%, 100%, 0.06);
    border-radius: 8px;
    
}
.wt_cantainer_list_item:hover .wt_cantainer_list_item_name_1 span{
    display: inline;
}
.wt_cantainer_list_item_head{
    margin: 12px 20px 8px 30px;
    color: #b9bbbe;
    font-size: 12px;
    font-weight: 700;
}
.wt_cantainer_list_item_info{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.wt_cantainer_list_item_img{
    position: relative;
    /* height: 100%; */
    /* width: 32px; */
    /* background-color: indigo; */
    margin-right: 12px;
    
}

.wt_cantainer_list_item_action{
    display: flex;
    flex-direction: row-reverse;
}
.wt_cantainer_list_item_action_com{
    width: 36px;
    height: 36px;
    background-color: #2f3136;
    border-radius: 50px;
    margin: 0px 6px;
    display: grid; 
    justify-content: center;
    align-content: center;
}
.wt_cantainer_list_item:hover .wt_cantainer_list_item_action_com{
    background-color: #1f2024;
}
.wt_cantainer_list_item:hover .wt_time_show{
    display: inline;
}

.wt_cantainer_list_item_name{
    font-size: 12px;
    color: #b9bbbe;
}
.wt_cantainer_list_item_name_1{
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    font-weight: 600;
}
.wt_cantainer_list_item_name_1 span{
    color: #b9bbbe;
    font-size: 12px;
    display: none;
}
.wt_time_show{
    display: none;
    font-size: 11px;
    color: rgb(104, 104, 104);
}

.f_w_y_icon,.f_w_n_icon{
    fill: #dbdbdb;
}

.wt_cantainer_list_item_action_access:hover .f_w_y_icon{
    fill: rgb(0, 243, 0);
}
.wt_cantainer_list_item_action_del:hover .f_w_n_icon{
    fill: red;
}
.ad_cantainer_list_nx_img{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
}
.ad_cantainer_list_nx_img h3{
    color: #72767d;
    font-size: 16px;
    line-height: 20px;
}
.ad_cantainer_list_nx_img img{
    width: 400px;
    height: 300px;
}
</style>