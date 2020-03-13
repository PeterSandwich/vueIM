<template>
    <div class="home_container">

        <div class="home_nav">
            <div class="home_head" @click="headfocus('home')">
                <div class="home_pill " v-bind:class="{ home_pill_hight: currentChoose=='home' }"></div>
                <div class="headimg_bg" v-bind:class="{ headimg_bg_focus : currentChoose=='home' }">
                    <svg t="1584091682998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13041" width="40" height="40"><path d="M848 312c0 165.92-216.48 232-308.32 92.32A168 168 0 1 1 848 312z" fill="#69CC00" p-id="13042"></path><path d="M800 264a168.16 168.16 0 0 1-260.32 140.32 168 168 0 0 1 232.64-232.64A167.68 167.68 0 0 1 800 264z" fill="#84E507" p-id="13043"></path><path d="M768 512a256 256 0 1 1-256-256 256 256 0 0 1 256 256z" fill="#FD7504" p-id="13044"></path><path d="M720 432c0 235.84-293.28 345.12-448 169.44a256 256 0 0 1 432-258.88A251.36 251.36 0 0 1 720 432z" fill="#FD8F07" p-id="13045"></path><path d="M766.08 496c-104 0-181.12 12.8-256-51.84C446.56 390.08 384 400 290.24 400a16 16 0 0 1 0-32c99.04 0 167.84-10.24 240 51.84C596.32 476.48 663.36 464 766.08 464a16 16 0 0 1 0 32zM466.72 656h-176a16 16 0 0 1 0-32h176c68.64 0 71.04-64 154.56-64h138.72a16 16 0 0 1 0 32h-138.72c-68.64 0-71.04 64-154.56 64zM432 496H258.08a16 16 0 0 1 0-32H432a16 16 0 0 1 0 32zM711.84 368H576a16 16 0 0 1 0-32h135.84a16 16 0 0 1 0 32z" fill="#FDA736" p-id="13046"></path><path d="M480 592a48 48 0 1 1 48-48 48 48 0 0 1-48 48z m0-64a16 16 0 0 0 0 32 16 16 0 0 0 0-32z" fill="#FDA736" p-id="13047"></path><path d="M830.24 764.8a16 16 0 0 1 0-32c22.4 0 37.28-4.48 41.92-12.8 11.2-19.36-20.64-76.96-117.12-157.44a16 16 0 0 1 20.48-24.64c60.16 50.24 156.32 142.72 124.48 198.08-11.04 19.04-34.4 28.8-69.76 28.8z" fill="#68539B" p-id="13048"></path><path d="M832 736a48 48 0 1 1-48-48 48 48 0 0 1 48 48z" fill="#FF2E04" p-id="13049"></path><path d="M740.32 755.68a48 48 0 0 1 64-64 48 48 0 0 1-64 64z" fill="#FF5C3C" p-id="13050"></path><path d="M496 816a112 112 0 1 1-112-112 112 112 0 0 1 112 112z" fill="#2DE0C7" p-id="13051"></path><path d="M288 872.64c-58.72-99.2 55.2-211.36 153.28-153.28 57.6 98.24-54.88 212-153.28 153.28z" fill="#93E6D9" p-id="13052"></path><path d="M208 560a64 64 0 1 1-64-64 64 64 0 0 1 64 64z" fill="#D82FEA" p-id="13053"></path><path d="M85.76 586.24a64 64 0 0 1 84.48-84.48 64 64 0 0 1-84.48 84.48z" fill="#E667F9" p-id="13054"></path><path d="M528 784a16 16 0 0 1-0.96-32 240 240 0 1 0-75.84-471.68 16 16 0 0 1-8-31.04A272 272 0 0 1 784 512c0 157.12-133.76 272-256 272zM361.44 325.12a240 240 0 0 0-30.24 344.64 16 16 0 0 1-24 21.12 272 272 0 0 1 14.24-372.96c24.32 8.16 30.56 13.6 40 7.2zM395.84 301.92a240 240 0 0 0-34.4 23.2 16 16 0 0 0-3.52-28.32l-8.16-3.04a265.28 265.28 0 0 1 30.72-19.84 16 16 0 0 1 15.36 28zM470.08 773.6a96 96 0 0 0-115.84-48.8 16 16 0 0 1-10.24-30.4 128 128 0 0 1 154.88 65.12 16 16 0 0 1-28.8 14.08z" fill="#35214C" p-id="13055"></path><path d="M256 816c0-134.88 183.04-178.08 242.88-56.48C510.4 782.88 523.04 832 496 832a16 16 0 0 1-16-16 96 96 0 0 0-125.76-91.2C250.88 758.4 275.2 912 384 912a96 96 0 0 0 81.44-45.28 16 16 0 0 1 27.2 16.96C425.12 992 256 944 256 816zM73.92 598.56a16 16 0 0 1 28.16-16 48 48 0 1 0 0-46.4 16 16 0 0 1-28.16-16 80 80 0 1 1 0 77.12z" fill="#35214C" p-id="13056"></path><path d="M672 208a16 16 0 0 1-11.36-27.36l40-40a16 16 0 0 1 22.72 22.72C680.16 206.56 680.8 208 672 208zM672 320a16 16 0 0 1-11.36-27.36l40-40a16 16 0 0 1 22.72 22.72C680.16 318.56 680.8 320 672 320zM768 352a16 16 0 0 1-11.36-27.36l72-72a16 16 0 0 1 22.72 22.72C777.44 349.12 777.44 352 768 352z" fill="#C5EE09" p-id="13057"></path><path d="M272 192a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FED370" p-id="13058"></path><path d="M904.96 414.4a16 16 0 0 1 14.08-28.8 16 16 0 0 1-14.08 28.8z" fill="#FD7504" p-id="13059"></path><path d="M840.96 558.4a16 16 0 0 1 14.08-28.8 16 16 0 0 1-14.08 28.8z" fill="#FDA736" p-id="13060"></path><path d="M576 928a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD8F07" p-id="13061"></path><path d="M640 816a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FDA736" p-id="13062"></path><path d="M208 720a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD7504" p-id="13063"></path><path d="M576 96a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD8F07" p-id="13064"></path><path d="M448 208a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FDA736" p-id="13065"></path><path d="M784 800a64 64 0 1 1 64-64 64 64 0 0 1-64 64z m0-96a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM346.72 326.88a820.8 820.8 0 0 0-25.28-8.96 256 256 0 0 1 28.32-24.16l8.16 3.04a16 16 0 0 1-11.2 30.08z" fill="#35214C" p-id="13066"></path><path d="M695.84 737.6C459.68 658.88 61.28 397.12 124 288c31.04-53.6 151.2-20.8 225.76 5.76a256 256 0 0 0-28.32 24.16c-416-139.68 7.84 265.92 384 389.28a16 16 0 0 1-9.6 30.4z" fill="#68539B" p-id="13067"></path><path d="M788.32 418.56c112-112-4.96-301.28-155.52-251.04-74.4 24.32-73.76 78.24-99.04 60.32a16 16 0 0 1-3.84-22.4A184 184 0 1 1 811.2 440.96a16 16 0 0 1-22.88-22.4z" fill="#35214C" p-id="13068"></path><path d="M746.72 461.6A240 240 0 0 0 520.96 272a16 16 0 0 1 0-32 272 272 0 0 1 256 214.72 16 16 0 0 1-30.24 6.88z" fill="#43b480" p-id="13069"></path></svg>
                </div>
            </div>

            <div class="home_head guildSep"><img src=""/></div>

            <div class="home_head " v-for="i in 10" v-bind:key="i.id" @click="headfocus(i)"  @mouseover="currentHover='other'">
                <div class="home_pill" v-bind:class="{ home_pill_hight: currentChoose==i }"></div>
                <div style="border-radius:300px ;">
                    <img class="headimg" v-bind:class="{ headimg_bg_focus : currentChoose==i }" src='https://images.unsplash.com/photo-1562887009-7924341c5cbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt=""/>
                </div>
                <!-- <div class="tag" v-if="i==2">
                    <div>提示信息</div>
                </div>  -->
            </div>
            
            <div class="home_head guildSep"><img src=""/></div>

             <div class="home_head_tool" tabindex="-1" @click="headfocus('add')" @mouseover="currentHover='add'" @mouseleave="currentHover='other'">
                <div class="home_pill" v-bind:class="{ home_pill_hight: currentChoose=='add' }"></div>
                <div class="headimg_bg " v-bind:class="{ headimg_toolbg_focus : currentChoose=='add' }"  >
                    <svg t="1584092326051" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27815" width="26" height="26"><path d="M516.608 876.544c-20.992 0-41.472-4.608-41.472-26.624V549.376H179.2c-16.896 0-26.624-15.872-26.624-36.352 0-18.944 7.168-36.864 25.088-36.864h302.08V179.2c0-19.968 14.848-31.232 36.864-31.232 20.48 0 36.352 9.216 36.352 26.624V471.04h305.664c20.48 0 21.504 24.576 21.504 41.472s-5.632 36.352-26.112 36.352H552.96V849.92c0.512 17.408-15.36 26.624-36.352 26.624z" v-bind:fill="icon_switch_color('add')" p-id="27816"></path></svg>
                </div>
            </div>
            <div class="home_head_tool" style="margin-bottom: 50px;" @click="headfocus('search')" @mouseover="currentHover='search'" @mouseleave="currentHover='other'">
                <div class="home_pill" v-bind:class="{ home_pill_hight: currentChoose=='search' }"></div>
                <div class="headimg_bg" v-bind:class="{ headimg_toolbg_focus : currentChoose=='search' }">
                    <svg t="1584092426997" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28710" width="26" height="26"><path d="M854.3 887.3c-9.3 0-18.1-3.6-24.8-10.3L628 675.5l-3.5 2.7c-21 16.5-44.1 30.1-68.8 40.6-37.4 15.8-77.1 23.8-118 23.8-40.9 0-80.6-8-118-23.8-36.1-15.3-68.5-37.1-96.3-64.9-27.8-27.8-49.7-60.2-64.9-96.3-15.8-37.4-23.8-77.1-23.8-118s8-80.6 23.8-118c15.3-36.1 37.1-68.5 64.9-96.3 27.8-27.8 60.2-49.7 96.3-64.9 37.4-15.8 77.1-23.8 118-23.8 40.9 0 80.6 8 118 23.8 36.1 15.3 68.5 37.1 96.3 64.9 27.8 27.8 49.7 60.2 64.9 96.3 15.8 37.4 23.8 77.1 23.8 118s-8 80.6-23.8 118c-9.7 23-22.2 44.7-37.2 64.5l-2.6 3.5 202 202c6.6 6.6 10.3 15.4 10.3 24.7 0 9.4-3.6 18.1-10.3 24.7-6.7 6.7-15.5 10.3-24.8 10.3zM437.7 206.7c-62.2 0-120.7 24.2-164.8 68.2-44 44-68.2 102.5-68.2 164.8 0 62.2 24.2 120.7 68.2 164.8 44 44 102.5 68.2 164.8 68.2 62.2 0 120.7-24.2 164.8-68.2 44-44 68.2-102.5 68.2-164.8S646.5 319 602.5 274.9c-44-44-102.5-68.2-164.8-68.2z" p-id="28711" v-bind:fill="icon_switch_color('search')" class="path"></path></svg>
                </div>
            </div>  
        </div>
        <div class="home_base">
            <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <el-button>右边</el-button>
            </el-tooltip>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'home',
    data: function () {
    return {
        currentChoose: 'home',
        currentHover: 'home'
    }
    },
    methods: {
        headfocus: function(data){
            this.currentChoose = data
        },
        icon_switch_color:function(data){
            console.log(this.currentHover)
            if(this.currentChoose == data || this.currentHover == data)
                return '#ffffff'
            else
                return '#43b480'
        }
    }
}
</script>

<style>
.home_container{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 65px auto;   
}
.home_nav{
    height: 100%;
    background-color: #202225 ; 
    display: flex;
    flex-direction:  column;
    align-items:center;
    overflow-x: hidden;
    overflow-y: scroll;

}
.home_nav::-webkit-scrollbar {
    display:none;
}

.home_base{
   height: 100%;
   background-color: #2f3136;

}

.home_head{
    height: 45px;
    width: 100%;
    margin-top: 8px;
    padding-right: 4px;
    display: grid;
    grid-template-columns: 5px auto;
    justify-items: center;
    align-items: center;
    
    
}
.home_head:hover:after{
content: attr('title');
}
.headimg:hover{
    border-radius:15px;
}
.home_head:hover .home_pill{
    height: 40%;
}

.home_head:hover .headimg_bg{
    border-radius:15px;
    background-color: #7289da;
    /* background-color: #43b480; */
}
svg{
    filter: drop-shadow(#ffffff 80px 0);
}
.home_pill{
    height: 0%;
    width: 4px;
    background-color: white;
    border-top-right-radius:25px;
    border-bottom-right-radius: 25px;
    transition: height .2s linear;
}


.guildSep{
    height: 1px;
    width: 32px;
    border-radius: 1px;
    background-color: rgba(82, 82, 82, 0.568);
}
.headimg{
    height: 45px;
    width: 45px;
    overflow: hidden;
    border-radius:100px ;
}

.headimg_bg{
    height: 45px;
    width: 45px;
    border-radius:300px ;
    background-color: #36393f;
    display: flex;
    flex-direction:  column;
    align-items:center;
    justify-content: center;
}
.home_pill_hight{
    height: 80%;
}
.headimg_bg_focus{
    border-radius:15px;
    background-color: #7289da;
}
.headimg_toolbg_focus{
    border-radius:15px;
    background-color: #43b480;
}


.home_head_tool{
    height: 45px;
    width: 100%;
    margin-top: 8px;
    padding-right: 4px;
    display: grid;
    grid-template-columns: 5px auto;
    justify-items: center;
    align-items: center;
    
}
.home_head_tool:hover .home_pill{
    height: 40%;
}

.home_head_tool:hover .headimg_bg{
    border-radius:15px;
    background-color: #43b480;
}

.tag{
    position:  relative;
    overflow-x:unset;
    overflow-y: unset;
    left: 50px;
    height: 50px;
    background-color: tomato;
    width: 200px;
    display: flex;
    flex-direction:  column;
    align-items:center;
    justify-items: center;
}

.tag div{
    width: 80%;
    height: 80%;
    background-color: black;
    border-radius: 5px;
}




</style>