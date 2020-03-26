<template>
<div>
    <div class="test_container">
        <user-head style="width: 32px;height: 32px;" v-bind:with_status="true" v-bind:user_status="1" v-bind:bg_color="'#fff'"></user-head>
        <user-head style="width: 32px;height: 32px;" v-bind:with_status="true" v-bind:user_status="2" v-bind:bg_color="'#fff'"></user-head>
        <user-head style="width: 32px;height: 32px;" v-bind:with_status="true" v-bind:user_status="3" v-bind:bg_color="'#fff'"></user-head>
        <user-head style="width: 32px;height: 32px;" v-bind:with_status="true" v-bind:user_status="4" v-bind:bg_color="'#fff'"></user-head>
    </div>
</div>
</template>
<script>
import myhead from './common/myhead'
export default {
    name: 'test',
    components:{
        'user-head': myhead
    }
    
}
</script>
<style>
.test_container{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

</style>