<template>
    <div class="ol_container">
        <div  class="ol_container_nx">
            <div v-if="friend_list_count>0" class="ol_container_in">
                <div class="ol_cantainer_list_item_head">在线-{{friend_list_count}}</div>
                <div class="ol_cantainer_list_item" v-for="friend in friend_list" v-bind:key='friend.uid'>
                    <div class="ol_cantainer_list_item_info">
                        <div class="ol_cantainer_list_item_img">
                            <ol-friend-head style="width: 36px;height: 36px;" :headimg="friend.headimg" v-bind:bg_color="'#2f3136'" v-bind:with_status="true"  v-bind:user_status="friend.status"></ol-friend-head>
                        </div>
                        <div class="ol_cantainer_list_item_name">
                            <div class="ol_cantainer_list_item_name_1">{{friend.name}}<span>#{{friend.fix_id}}</span></div>
                            <div>[{{user_status_cn(friend.status)}}]<span v-if="friend.sd_status&&friend.status>=1&&friend.status<=3">..{{friend.sd_status}}</span></div>
                        </div>
                    </div>
                    <div class="ol_cantainer_list_item_action">
                        <el-tooltip class="item" effect="dark" content="更多" placement="top" :enterable="false" transition="el-zoom-in-top">
                        <el-popover
                            placement="right-start"
                            width="10"
                            trigger="click"
                            :visible-arrow="false"
                            >
                            <div class="ol_cantainer_list_item_action_del_select_w">
                                <div class=" ol_cantainer_list_item_action_del_select">
                                <div> 开始语言通话</div>
                                <div> 开始视频通话</div>
                                <div> 删除好友</div>
                            </div>
                            </div>
                        <div slot="reference" class="ol_cantainer_list_item_action_com ol_cantainer_list_item_action_del">
                            <svg t="1585450365270" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24664" width="16" height="16"><path d="M386.133333 168.533333c0 68.266667 55.466667 125.866667 125.866667 125.866667 68.266667 0 125.866667-55.466667 125.866667-125.866667C637.866667 98.133333 580.266667 42.666667 512 42.666667s-125.866667 55.466667-125.866667 125.866666zM386.133333 857.6c0 68.266667 55.466667 123.733333 123.733334 123.733333 68.266667 0 123.733333-55.466667 123.733333-123.733333 0-68.266667-55.466667-123.733333-123.733333-123.733333-68.266667 2.133333-123.733333 55.466667-123.733334 123.733333zM386.133333 512c0 68.266667 55.466667 125.866667 125.866667 125.866667 68.266667 0 125.866667-55.466667 125.866667-125.866667 0-68.266667-55.466667-125.866667-125.866667-125.866667-68.266667 2.133333-125.866667 57.6-125.866667 125.866667z" p-id="24665" class="ol_f_n_icon"></path></svg>
                        </div>
                        </el-popover>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="消息" placement="top" :enterable="false" transition="el-zoom-in-top">
                        <div @click="goToChat(friend.uid)" class="ol_cantainer_list_item_action_com ol_cantainer_list_item_action_access">
                            <svg t="1585450257461" class="icon" viewBox="0 0 1097 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23141" width="18" height="16"><path d="M932.571 36.571h-768A90.697 90.697 0 0 0 73.143 128v581.486a91.429 91.429 0 0 0 91.428 95.085H321.83V936.23a50.103 50.103 0 0 0 51.2 51.2 65.097 65.097 0 0 0 36.57-14.63l168.229-168.229h351.085a90.697 90.697 0 0 0 91.429-91.428V128a85.577 85.577 0 0 0-87.772-91.429zM661.943 577.83H266.97a47.543 47.543 0 0 1 0-95.086h394.972a47.543 47.543 0 0 1 0 95.086zM830.17 358.4h-563.2a46.08 46.08 0 0 1-47.542-47.543 48.274 48.274 0 0 1 47.542-47.543h563.2a48.274 48.274 0 0 1 47.543 47.543A46.08 46.08 0 0 1 830.17 358.4z" class="ol_f_y_icon" p-id="23142"></path></svg>
                        </div> 
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div v-else class="ad_cantainer_list_nx_img">
                    <img src="../../assets/undraw_reading_time_gvg0.svg"/>
                    <h3>好友或许有事要忙...</h3>
            </div>
        </div>
    </div>
</template>

<script>
import myhead from '../common/myhead.vue';
export default {
    name: 'friend_online',
    data: function(){
        return {
            ok: true,
            count: 15
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
        goToChat(uid){
            let idx = _.findIndex(this.$store.state.chat_list.clist, function(o) { return o.uid == uid; })
            if(idx<0){
                let fidx = _.findIndex(this.$store.state.myfriends.friends, function(o) { return o.uid == uid; })
                this.$store.commit("chatlist_add",{
                    uid: uid,
                    name: this.$store.state.myfriends.friends[fidx].name,
                    avatar: this.$store.state.myfriends.friends[fidx].headimg
                })

                this.$axios.post('http://localhost:9876/api/chat_open', {uid: uid})
                .then((response) =>{console.log(response);})
                .catch(function (error) {console.log(error);})
            }

            this.$router.push({
                    name: 'chat',
                    params: {
                    id: uid,
                    isgroup: false
                }
            }).catch(() => {})
        }
    },
    mounted:function(){
        this.$axios.get('http://localhost:9876/api/all_friend_list')
            .then((response) =>{
                if(response.status == 200 && response.data.code == 1001){
                    console.log(response.data.data)
                    if(response.data.data){
                        this.$store.commit("flush_all_friend_list",response.data.data)
                    }
                    
                }else{
                    console.log(response);
                    this.$message.error(response.data.message)
                    this.$store.commit("flush_all_friend_list",[])
                }
                
            }
            ).catch(function (error) {
                console.log(error);
            });
    },
    computed: {
        friend_list(){
            return this.$store.state.myfriends.friends.filter((f)=>{return f.status==1||f.status==2})
        },
        friend_list_count(){
            if(this.friend_list){
                return this.friend_list.length
            }else{
                return 0
            }
            
        }
    },
    components:{
        'ol-friend-head': myhead
    }
}
</script>

<style scoped>

.ol_container{

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.ol_container_nx{
    flex:1;
    width: 100%;
    height: 0px;
    display: flex;
    flex-direction: column;
}
.ol_container_in{
    overflow-x: hidden;
    overflow-y: scroll;
}
.ol_container_in::-webkit-scrollbar{
    display: none;
}


.ol_cantainer_list_item{
    height: 62px;
    margin: 0 30px;
    padding: 0px 12px;
    border-top: 1px solid hsla(0, 0%, 100%, 0.06);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}
.ol_cantainer_list_item:hover{
    background-color: hsla(0, 0%, 100%, 0.06);
    border-radius: 8px;
    
}
.ol_cantainer_list_item:hover .ol_cantainer_list_item_name_1 span{
    display: inline;
}
.ol_cantainer_list_item_head{
    margin: 12px 20px 8px 30px;
    color: #b9bbbe;
    font-size: 12px;
    font-weight: 700;
}
.ol_cantainer_list_item_info{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.ol_cantainer_list_item_img{
    position: relative;
    /* height: 100%; */
    /* width: 32px; */
    /* background-color: indigo; */
    margin-right: 12px;
    
}
.ol_cantainer_list_item_img img{
    width: 32px;
    height: 32px;
    border-radius: 50px;
}
.ol_cantainer_list_item_action{
    display: flex;
    flex-direction: row-reverse;
}
.ol_cantainer_list_item_action_com{
    width: 36px;
    height: 36px;
    background-color: #2f3136;
    border-radius: 50px;
    margin: 0px 6px;
    display: grid; 
    justify-content: center;
    align-content: center;
}
.ol_cantainer_list_item:hover .ol_cantainer_list_item_action_com{
    background-color: #1f2024;
}

.ol_cantainer_list_item_name{
    font-size: 12px;
    color: #b9bbbe;
}
.ol_cantainer_list_item_name_1{
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    font-weight: 600;
}
.ol_cantainer_list_item_name_1 span{
    color: #b9bbbe;
    font-size: 12px;
    display: none;
}

.ol_cantainer_list_item_action_del_select_w{
    background-color: black;
    padding: 5px;
    border-radius: 4px;
}

.ol_cantainer_list_item_action_del_select>div{
    border-radius: 4px;
    line-height: 30px;
    color: rgb(202, 202, 202);
    margin: 0px 5px;
    text-align:center;
}
.ol_cantainer_list_item_action_del_select>div:hover{
    background-color: rgba(97, 97, 97, 0.418);
}
.ol_cantainer_list_item_action_del_select>div:last-child{
    color: red;
}

.ol_f_y_icon,.ol_f_n_icon{
    fill: #dbdbdb;
}

.ol_cantainer_list_item_action_del:hover .ol_f_n_icon{
    fill: #ffc760;
}
.ol_cantainer_list_item_action_access:hover .ol_f_y_icon{
    fill: #ffc760;
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