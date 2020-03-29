
<template>
    <div class="sh_container">
        <div  class="sh_container_nx">
            <div v-if="ok" class="sh_container_in">
                <div class="sh_cantainer_list_item_head">屏蔽好友数-{{sf_friend_list_count}}</div>
                <div class="sh_cantainer_list_item" v-for="friend in sf_friend_list" v-bind:key='friend.uid'>
                    <div class="sh_cantainer_list_item_info">
                        <div class="sh_cantainer_list_item_img">
                            <shield-friend-head style="width: 36px;height: 36px;" :headimg="friend.headimg" v-bind:bg_color="'#2f3136'" v-bind:with_status="true"  v-bind:user_status="friend.status"></shield-friend-head>
                        </div>
                        <div class="sh_cantainer_list_item_name">
                            <div class="sh_cantainer_list_item_name_1">{{friend.username}}<span>#{{friend.fixid}}</span></div>
                            <div>[{{user_status_cn(friend.status)}}]<span v-if="friend.sd_status&&friend.status>=1&&friend.status<=3">..{{friend.sd_status}}</span></div>
                        </div>
                    </div>
                    <div class="sh_cantainer_list_item_action">
                        <el-tooltip class="item" effect="dark" content="取消" placement="top" :enterable="false" transition="el-zoom-in-top">
                        <div class="sh_cantainer_list_item_action_com sh_cantainer_list_item_action_del">
                            <svg t="1584688386695" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2639" width="14" height="14"><path d="M604.010237 516.920604 1003.934137 116.996704C1030.645959 90.284883 1030.645959 46.861051 1003.934137 20.14923 977.153827-6.631082 933.798482-6.631082 907.086661 20.14923L507.162763 420.07313 116.964706 29.875073C90.252885 3.163252 46.829053 3.163252 20.117232 29.875073-6.66308 56.655385-6.66308 100.010725 20.117232 126.722546L410.31529 516.920604 35.322423 891.913471C8.54211 918.625293 8.54211 962.049126 35.322423 988.760942 62.034243 1015.541258 105.389583 1015.541258 132.169896 988.760942L507.162763 613.768077 891.881473 998.486785C918.593295 1025.267102 961.948633 1025.267102 988.728944 998.486785 1015.50926 971.774963 1015.50926 928.419625 988.728944 901.639315L604.010237 516.920604Z" p-id="2640" class="del_icon_switch"></path></svg>
                        </div>
                        </el-tooltip>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myhead from '../common/myhead.vue';
export default {
    name: 'friend_shield',
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
        }
    },
    computed: {
        sf_friend_list(){
            return this.$store.state.myfriends.shield_friends
        },
        sf_friend_list_count(){
            return this.sf_friend_list.length
        }
    },
    components:{
        'shield-friend-head': myhead
    }
}
</script>

<style scoped>
.sh_container{

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.sh_container_nx{
    flex:1;
    width: 100%;
    height: 0px;
    display: flex;
    flex-direction: column;
}
.sh_container_in{
    overflow-x: hidden;
    overflow-y: scroll;
}
.sh_container_in::-webkit-scrollbar{
    display: none;
}


.sh_cantainer_list_item{
    height: 62px;
    margin: 0 30px;
    padding: 0px 12px;
    border-top: 1px solid hsla(0, 0%, 100%, 0.06);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
}
.sh_cantainer_list_item:hover{
    background-color: hsla(0, 0%, 100%, 0.06);
    border-radius: 8px;
    
}
.sh_cantainer_list_item:hover .sh_cantainer_list_item_name_1 span{
    display: inline;
}
.sh_cantainer_list_item_head{
    margin: 12px 20px 8px 30px;
    color: #b9bbbe;
    font-size: 12px;
    font-weight: 700;
}
.sh_cantainer_list_item_info{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.sh_cantainer_list_item_img{
    position: relative;
    /* height: 100%; */
    /* width: 32px; */
    /* background-color: indigo; */
    margin-right: 12px;
    
}
.sh_cantainer_list_item_action{
    display: flex;
    flex-direction: row-reverse;
}
.sh_cantainer_list_item_action_com{
    width: 36px;
    height: 36px;
    background-color: #2f3136;
    border-radius: 50px;
    margin: 0px 6px;
    display: grid; 
    justify-content: center;
    align-content: center;
}
.sh_cantainer_list_item:hover .sh_cantainer_list_item_action_com{
    background-color: #1f2024;
}

.sh_cantainer_list_item_name{
    font-size: 12px;
    color: #b9bbbe;
}
.sh_cantainer_list_item_name_1{
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    font-weight: 600;
}
.sh_cantainer_list_item_name_1 span{
    color: #b9bbbe;
    font-size: 12px;
    display: none;
}
.del_icon_switch{
    fill: #dbdbdb;
}
.sh_cantainer_list_item_action_del:hover .del_icon_switch{
    fill: red
}
</style>