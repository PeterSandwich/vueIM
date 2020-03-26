<template>
    <div class="ol_container">
        <div  class="ol_container_nx">
            <div v-if="ok" class="ol_container_in">
                <div class="ol_cantainer_list_item_head">在线好友数-{{count}}</div>
                <div class="ol_cantainer_list_item" v-for="i in count" v-bind:key='i.id'>
                    <div class="ol_cantainer_list_item_info">
                        <div class="ol_cantainer_list_item_img">
                                <img src="https://images.unsplash.com/photo-1584111768652-a2f4eb2120da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                                <div class="sideBar_me_head_satus"></div>
                        </div>
                        <div class="ol_cantainer_list_item_name">
                            <div class="ol_cantainer_list_item_name_1">nxo<span>#1234</span></div>
                            <div>收到的好友请求</div>
                        </div>
                    </div>
                    <div class="ol_cantainer_list_item_action">
                        <div class="ol_cantainer_list_item_action_com ol_cantainer_list_item_action_del">
                            <svg t="1584688386695" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2639" width="14" height="14"><path d="M604.010237 516.920604 1003.934137 116.996704C1030.645959 90.284883 1030.645959 46.861051 1003.934137 20.14923 977.153827-6.631082 933.798482-6.631082 907.086661 20.14923L507.162763 420.07313 116.964706 29.875073C90.252885 3.163252 46.829053 3.163252 20.117232 29.875073-6.66308 56.655385-6.66308 100.010725 20.117232 126.722546L410.31529 516.920604 35.322423 891.913471C8.54211 918.625293 8.54211 962.049126 35.322423 988.760942 62.034243 1015.541258 105.389583 1015.541258 132.169896 988.760942L507.162763 613.768077 891.881473 998.486785C918.593295 1025.267102 961.948633 1025.267102 988.728944 998.486785 1015.50926 971.774963 1015.50926 928.419625 988.728944 901.639315L604.010237 516.920604Z" p-id="2640" fill="#dbdbdb"></path></svg>
                        </div>
                        <div class="ol_cantainer_list_item_action_com ol_cantainer_list_item_action_access">
                            <svg t="1584689247436" class="icon" viewBox="0 0 1196 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4208" width="14" height="14"><path d="M141.93624 417.289101a85.332053 85.332053 0 1 0-110.249013 130.216713L422.849359 878.935509a85.332053 85.332053 0 0 0 120.318196-10.239846L1159.26498 140.642584A85.332053 85.332053 0 1 0 1028.877602 30.222907L467.904684 693.423625 141.93624 417.289101z" p-id="4209" fill="#dbdbdb"></path></svg>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'friend_online',
    data: function(){
        return {
            ok: true,
            count: 15
        }
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
</style>