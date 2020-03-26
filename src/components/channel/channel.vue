<template>
    <div>
        <div>
            <button @click="xxx()">channel</button>
            
        </div>
        <div style="color:green; font-size:30px;">
            {{this.uid}}
            <!-- <router-view></router-view> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'channel',
    data: function(){
        return {
            uid: this.$route.params.id
        }
    },
    methods:{
        xxx:function(){
            this.$store.commit('increment')
            console.log(this.$store.state.home.count)
        }
    },
    watch: {
        $route(){
            this.uid = this.$route.params.id
        }
    }
    
}
</script>

<style>

</style>