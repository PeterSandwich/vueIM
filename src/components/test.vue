<template>
<div>
    <div class="test_container">
        <div class="c1"></div>
        <div class="c2">
             <mutliline-input ref="mip" @send="sendtext($event)"></mutliline-input>
        </div>
        <div></div>
        <!-- <mutliline-input @input="text($event)" :value="searchText"></mutliline-input> -->
       </div>

    <button @click="add()">add</button>
</div>
</template>
<script>
import mutliline_input from "./common/mutliline_input"
export default {
    name: 'test',
    data: function(){
        return {
            searchText: ""
        }
    },
    components:{
        'mutliline-input':mutliline_input
    },
    methods:{
        sendtext(e){
            console.log('send',e)
        },
        add(){
            this.$refs.mip.addemj('😁')
        }
    }
    
}
</script>
<style>
.test_container{
    width: 100%;
    height: 100%;
   display: grid;
    grid-template-columns: 42px auto 1px;
}
.c1{
    height: 50px;
    background-color: maroon;
}
.c2{
    height: 500px;
    background-color: rgb(238, 77, 77);
    overflow-x: hidden;
}
</style>