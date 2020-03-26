<template>
    <div class="hc_container">
        <img src="https://images.unsplash.com/photo-1584111768652-a2f4eb2120da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
        <div class="hc_satus" ref="bg_status" v-if="with_status">
            <head-status class="hc_satus_icon" v-bind:now_status="hstatus"></head-status>
        </div>
    </div>
</template>
<script>
import status from './status'
export default {
    name: 'myhead',
    props: [
        'bg_color',
        'with_status',
        'user_status'
    ],
    data: function(){
        return {
            hstatus: 4
        }
    },
    components:{
        'head-status': status
    },
    mounted: function(){
        this.$refs.bg_status.setAttribute('style',`background-color:${this.bg_color}`)
        if(this.user_status){
            this.hstatus = this.user_status
        }
    },
    watch: {
        bg_color:function(){
            this.$refs.bg_status.setAttribute('style',`background-color:${this.bg_color}`)
        },
        user_status: function(){
            this.hstatus = this.user_status
        }
    }

    
}
</script>
<style >
.hc_container{
    width: 100%;
    height: 100%;
    position:relative;
}
.hc_container>img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
.hc_satus{
    position: absolute;
    left: 60%;
    top: 60%;
    height: 46%;
    width: 46%;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hc_satus_icon{
    height: 100px;
    width: 100px;
}
</style>