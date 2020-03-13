<template>
    <div style="height: 100%;overflow-x: hidden;overflow-y: hidden;" class="bg" >
        <!-- <div class="bg"></div> -->
        <div class="account_laler"></div>
        <div class="logo">
            <img src="../assets/logo.png" style="height: 100px; weight: 100px; margin-top: 40px;margin-left: 40px;"> 
        </div>
        <div class="account_container">
            <transition name="account_fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  name: 'account'
}
</script>

<style>
.bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:  url( 'https://images.unsplash.com/photo-1463338686275-5ee6b39a1005?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80' );
    background-size:100% 100%;
}
.account_container{
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    height: 100%;
    justify-items: center;
    align-items: center;
    
    
}
.logo{
    position: absolute;
}
.account_laler{ 
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
}

.account_fade-enter-active {
    transition: all 0.3s;
    backface-visibility: hidden;
    transform-style: preserve-3d; 
}

.account_fade-enter{
    transform: translate3d(80%, 0, 0);
    opacity: 0;
    backface-visibility: hidden;
    transform-style: preserve-3d; 
}

/* .account_fade-leave{
    transform:  translate3d(100%, 0, 0);
    opacity: 1;
    backface-visibility: hidden;
    transform-style: preserve-3d; 
}

.account_fade-leave-active{
    transition: all 10s;
    backface-visibility: hidden;
    transform-style: preserve-3d; 
    
} */

/* */


</style>
