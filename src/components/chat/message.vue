<template>
    <div class="msg_container" v-bind:class="{msg_container_active:with_head}">
        <div  class="msg_with_head">
            <div>
                <div class="msg_head_img" v-if="with_head">
                    <img src="https://images.unsplash.com/photo-1584111768652-a2f4eb2120da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div v-else class="msg_head_time">
                    <span class="msg_head_time_span">11:34</span>
                </div>
            </div>
            <div class="msg_text">
                <h2 v-if="with_head">name<span>上星期六11:36</span></h2>
                <div>{{message_content}}<br>{{message_content}}<br>{{message_content}}</div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'message',
    props:[
        'with_head'
    ],
    data:function(){
        return {
            message_content: 'hello world! pan jiawei 潘家伟在此，hello world! pan jiawei 潘家伟在此，hello world! pan jiawei 潘家伟在此，hello world! pan jiawei 潘家伟在此'
        }
    }
}
</script>

<style>
.msg_container{
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
    background-color: rgb(60, 62, 66);
}
.msg_container_active{
    margin-top: 17px;
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

</style>