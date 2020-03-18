<template>
    <div class="master_can">

        <div class="sideBar">
            <div class="sideBar_search">
                <div>寻找或开始新的对话</div>
            </div>
            <div class="sideBar_tool">
                <div class="sideBar_list">
                    <div class="sideBar_select sideBar_select_h" @mouseover="sideBar_select_hover='friend'" @click="sideBar_select_click('friend')"  @mouseleave="sideBar_select_hover=0" v-bind:class="{sideBar_select_hover_active: sideBar_select_hover=='friend'&&sideBar_select_select!='friend', sideBar_select_select_active:sideBar_select_select=='friend'}">
                        <div>
                            <svg t="1584330809456" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8538" width="28" height="28"><path d="M833.829799 308.87372c0 0.340761 0.475837 2.049682 0.475837 2.390443 0.249687 3.095501 0.249687 3.095501 0.412392 5.282307 0.895393 12.001335-3.498684 23.539112-7.835456 34.441417-11.423167 28.713972-32.389688 49.926086-56.419987 68.225871-10.372232 7.898901-22.550599 12.869099-35.141358 16.527418-8.147564 2.367931-16.154935 5.445012-24.449855 7.034207-15.255449 2.922563-30.664394 5.057179-46.031383 7.375991-11.911284 1.797949-23.859407 3.349281-35.782971 5.061272-10.594289 1.521656-21.342074 2.411933-31.725562 4.848425-13.56597 3.183506-26.862811 7.535627-40.219004 11.571546-3.079128 0.930185-4.468778 0.924045-4.832052-2.902096-0.677429-7.142677-2.054799-14.21577-2.953262-21.342074-2.095731-16.627702-4.436032-33.236985-5.996574-49.916876-1.243317-13.283538-1.992377-26.659173-2.048659-39.997969-0.092098-21.584598 0.080841-23.700795 0.988514-64.754816 0.418532-18.913768 2.240017-37.784558 2.895957-56.692187 0.49528-14.298658 3.573385-27.744901 10.525728-40.266076 8.354272-15.046694 20.255323-26.919093 35.230386-34.870182 22.354124-11.868305 46.248324-15.69547 71.052243-8.524141 17.71957 5.123694 30.18037 16.555048 37.821397 33.31578 4.984524 10.934027 6.735401 22.397103 6.217608 34.350342-0.112564 2.597151 0.989537 5.246491 1.612731 8.264221 17.006326-8.510838 33.838689-12.780071 51.957349-11.594059 9.976212 0.652869 19.076474 4.222161 27.220968 9.18929 12.259208 7.476275 21.799492 18.055215 29.037337 30.653137 6.180769 10.758018 11.106965 21.973454 13.96199 34.054607C831.237765 296.66977 832.493362 302.780955 833.829799 308.87372z" p-id="8539" v-bind:fill="icon_color('friend')"></path><path d="M566.627155 650.006144c-5.616928-26.831089-34.767851-136.169309-38.551014-162.870438 0 0-0.001023 0.002047-0.002047 0.00307 0-0.001023 0.001023-0.002047 0.001023-0.002047-32.091906-3.352351-63.609737 1.434675-94.690616 8.266267-51.702546 8.700149-144.868435 62.120826-144.868435 62.120826-36.282345 23.311939-44.700061 69.040423-45.902446 85.987397s1.820462 65.87943 17.170055 86.687338c21.029966 28.507264 60.682058 40.11872 92.530416 29.238928 0.001023 6.625908 2.311649 12.703323 4.77884 18.73162 1.866511 4.016477 3.208065 8.246825 5.009084 12.295024 23.651676 53.173037 70.78209 74.621535 126.193097 57.124022 37.31793-11.784394 63.010079-36.272112 77.623915-72.466452 3.377934-12.236696 6.138814-24.561395 5.331425-37.395702C575.971987 708.165752 572.656475 678.80505 566.627155 650.006144z" p-id="8540" v-bind:fill="icon_color('friend')"></path><path d="M268.164552 488.245993c23.442922-0.572028 46.937009 0.694825 70.098521-3.959172 59.803038-12.016685 119.843482-21.030989 181.136453-15.331173l0-0.001023 0.001023 0.001023c14.363126 1.540076 11.919471-3.246951 11.272741-8.918114-2.362814-20.727067-7.65126-41.306778-10.600429-61.956074-7.504928-52.552913-14.681374-105.202017-34.039257-155.162896-12.593829-32.503275-35.631522-53.06559-69.839625-60.526515-85.505419-18.647709-151.844314 39.426965-143.782707 125.758192-36.83186-0.032746-69.628824 8.071839-87.160105 45.036729C161.248498 403.799696 202.356754 489.852584 268.164552 488.245993z" p-id="8541" v-bind:fill="icon_color('friend')"></path><path d="M859.124905 513.953492c-11.625782-20.644179-34.314527-31.375591-56.104809-37.894052-42.528606-12.720719-85.819574-14.956643-129.799228-9.895371-35.818787 4.122901-64.11525 8.571213-122.514311 17.531282-7.91118 0.823761-5.192256 5.462408-4.050246 9.743922 5.506411 20.654412 12.515035 52.173267 15.589047 62.210877 10.981099 33.9226 33.835619 100.003622 49.881061 147.57201 2.468215 5.040806 22.843264 44.828998 37.634132 53.703109 30.982642 18.587334 63.309908 15.289218 92.991927-0.825808 31.398104-17.046235 46.078455-45.461401 40.902572-82.233909-2.298346-6.55223-4.596691-13.103436-6.89606-19.654642 0.174985 0.107447 0.343831 0.223081 0.518816 0.331551 5.375427 1.89107 10.92277 3.89982 16.535605 3.988848 22.997784 0.367367 45.299719-1.611707 59.855226-23.225981 10.943236-14.651698 18.032702-30.096459 21.818935-48.892547C880.525308 561.412386 868.88213 531.139919 859.124905 513.953492z" p-id="8542" v-bind:fill="icon_color('friend')"></path></svg></div>
                        <div>好友</div>
                    </div>
                    <div class="sideBar_select sideBar_select_h" @mouseover="sideBar_select_hover='info'" @click="sideBar_select_click('info')" @mouseleave="sideBar_select_hover=0" v-bind:class="{sideBar_select_hover_active: sideBar_select_hover=='info'&&sideBar_select_select!='info', sideBar_select_select_active:sideBar_select_select=='info'}">
                        <div>
                            <svg t="1584331842010" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10504" width="28" height="28"><path d="M 1009.37 548.571 L 867.962 97.5238 L 148.724 251.124 l 34.1333 112.152 l -168.229 43.8857 S 92.6476 658.286 146.286 824.076 s 177.981 87.7714 177.981 87.7714 S 867.962 682.667 950.857 648.533 c 75.581 -34.1333 58.5143 -99.9619 58.5143 -99.9619 Z M 202.362 794.819 l -107.276 -341.333 l 107.276 -24.381 l 131.657 443.733 l 46.3238 -29.2571 c -146.286 78.0191 -177.981 -48.7619 -177.981 -48.7619 Z M 926.476 609.524 s -102.4 39.0095 -224.305 90.2095 l -78.0191 -246.248 l -253.562 78.0191 L 458.362 804.571 c -24.381 12.1905 -48.7619 21.9429 -65.8286 31.6952 L 260.876 414.476 l -36.5714 -117.029 l 626.59 -143.848 s 97.5238 309.638 117.029 373.029 C 987.429 585.143 926.476 609.524 926.476 609.524 Z" v-bind:fill="icon_color('info')" p-id="10505"></path><path d="M 887.467 385.219 l -209.676 65.8286 l 17.0667 51.2 l 209.676 -70.7048 l -17.0667 -46.3238 Z M 704.609 538.819 l 17.0667 51.2 l 207.238 -75.581 l -14.6286 -48.7619 l -209.676 73.1429 Z M 416.914 304.762 l 12.1905 41.4476 c 7.31429 21.9429 14.6286 41.4476 21.9429 60.9524 c -12.1905 -14.6286 -26.819 -29.2571 -39.0095 -43.8857 l -48.7619 -46.3238 l -41.4476 9.75238 l 46.3238 148.724 l 31.6952 -9.75238 l -14.6286 -43.8857 c -7.31429 -24.381 -14.6286 -43.8857 -21.9429 -63.3905 c 12.1905 14.6286 29.2571 31.6952 43.8857 43.8857 l 48.7619 46.3238 l 34.1333 -9.75238 l -43.8857 -143.848 l -29.2571 9.75238 Z M 543.695 397.41 l -9.75238 -34.1333 l 51.2 -14.6286 l -7.31429 -24.381 l -51.2 14.6286 l -9.75238 -29.2571 l 53.6381 -14.6286 L 560.762 268.19 l -85.3333 21.9429 l 43.8857 141.41 l 87.7714 -26.819 l -7.31428 -26.819 l -56.0762 19.5048 Z M 675.352 321.829 c 0 -14.6286 -2.4381 -26.819 -4.87619 -43.8857 c 7.31429 14.6286 12.1905 26.819 19.5048 39.0095 l 29.2571 53.6381 l 29.2571 -9.75238 l -9.75238 -138.971 l -29.2571 7.31428 l 7.31429 56.0762 c 2.4381 17.0667 4.87619 31.6952 7.31429 48.7619 c -7.31429 -14.6286 -12.1905 -26.819 -19.5048 -43.8857 l -26.819 -53.6381 l -31.6952 7.31429 l 7.31429 58.5143 l 7.31429 51.2 c -7.31429 -12.1905 -14.6286 -29.2571 -21.9429 -46.3238 l -29.2571 -48.7619 l -31.6952 7.31429 l 75.581 129.219 l 31.6952 -9.75238 l -9.75238 -63.3905 Z M 804.571 290.133 c 14.6286 2.4381 21.9429 4.87619 24.381 12.1905 c 2.4381 7.31429 -2.4381 14.6286 -14.6286 19.5048 c -12.1905 2.4381 -24.381 2.4381 -31.6952 0 l 2.4381 26.819 c 7.31429 2.4381 21.9429 2.4381 36.5714 -2.4381 c 31.6952 -9.75238 39.0095 -31.6952 34.1333 -53.6381 c -4.87619 -17.0667 -19.5048 -26.819 -41.4476 -29.2571 c -17.0667 -2.4381 -24.381 -4.87619 -26.819 -12.1905 c -2.4381 -7.31429 2.4381 -14.6286 12.1905 -17.0667 c 12.1905 -2.4381 19.5048 -2.4381 26.819 0 l -2.4381 -24.381 c -7.31429 -2.4381 -17.0667 -2.4381 -31.6952 0 c -26.819 7.31429 -39.0095 26.819 -31.6952 48.7619 c 4.87619 19.5048 21.9429 29.2571 43.8857 31.6952 Z" fill="#8a8a8a" p-id="10506"></path></svg></div>
                        <div>资讯</div>
                    </div>
                    <div class="sideBar_select sideBar_select_slash">
                        <div style="flex:1;line-height: 20px;">私信</div>
                        <div style="color: rgb(168, 168, 168);"><svg x="0" y="0" class="privateChannelRecipientsInviteButtonIcon-cXLJ7f icon-22AiRD" aria-hidden="false" width="16" height="16" viewBox="0 0 18 18"><polygon fill-rule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg></div>
                    </div>
                    <div class="sideBar_select" v-for="i in 15" v-bind:key="i.id" @mouseover="sideBar_select_hover=i" @click="sideBar_select_select=i" @mouseleave="sideBar_select_hover=0" v-bind:class="{sideBar_select_hover_active: sideBar_select_hover==i&&sideBar_select_select!=i, sideBar_select_select_active:sideBar_select_select==i}">
                        <div class="sideBar_select_w">
                            <div>
                                <div class="sideBar_me_head">
                                    <img src="https://images.unsplash.com/photo-1584111768652-a2f4eb2120da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                                    <div class="sideBar_me_head_satus"></div>
                                </div>
                            </div>
                            <div>nxo</div>
                            <div v-if="sideBar_select_hover==i">
                                <svg class="closeIcon-rycxaQ" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sideBar_me">
                <div class="sideBar_me_in">
                    <div style="position:relative;"  ref="changing_status_el">
                        <div class="sideBar_me_head" @click="changing_status = !changing_status"  @mouseover="head_hover=true" @mouseleave="head_hover=false" >
                            <img src="https://images.unsplash.com/photo-1584367369849-668e6a5b5326?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                            <div v-bind:class="{ sideBar_me_head_hover: head_hover }" ></div>
                            <div class="sideBar_me_head_satus"></div>
                        </div>
                        <div v-if="changing_status" class="sideBar_me_change_status">
                            <div>
                                <button > aaaa</button>
                            </div>
                        </div>
                    </div>
                    <div class="sideBar_me_info">
                        <div class="sideBar_me_info_name">Captain Seagullkkkk</div>
                        <div class="sideBar_me_info_num">#2234</div>
                    </div>
                    <div class="sideBar_me_setting">
                        <div @click="open_microphone=!open_microphone">
                            <div style="position: relative;">
                                <img  style="z-index:3" :src="require('../assets/microphone.svg')" alt=""/>
                                <div class="sideBar_me_setting_del" v-if="!open_microphone">
                                    <img style="z-index:4" :src="require('../assets/del.svg')" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div @click="open_earphone=!open_earphone">
                            <div style="position: relative;">
                                <img style="z-index:3" :src="require('../assets/earphone.svg')" alt=""/>
                                <div class="sideBar_me_setting_del" v-if="!open_earphone">
                                    <img style="z-index:4" :src="require('../assets/del.svg')" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div >
                            <img :src="require('../assets/setting.svg')" alt=""/>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>

        <div class="chatAera">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'channel',
    data: function(){
        return {
            open_microphone: false,
            open_earphone:true,
            head_hover: false,
            changing_status: false,
            sideBar_select_hover: 'friend',
            sideBar_select_select: 'friend'
        }
    },
    mounted: function() {
      document.addEventListener('click',e => {
         if(!this.$refs.changing_status_el.contains(e.target)){
            this.changing_status = false//点击其他区域关闭
          }
      })
    },
    methods:{
        icon_color:function(e){
            if(this.sideBar_select_select==e){
                return 'rgb(250, 250, 250)'
            }else if(this.sideBar_select_hover==e){
                return 'rgb(212, 212, 212)'
            }
            return '#8a8a8a'
        },
        sideBar_select_click:function(e){
            this.sideBar_select_select=e
            if(e=='friend'){
                this.$router.push('./@me')
            }else if(e=='info'){
                this.$router.push('./infomation')
            }
            
        }
    },
    computed:{
        
    }
    
}
</script>

<style>
:root{
    --elevation-low:0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)
}
svg{
    filter: unset;
}
.master_can{
    height: 100%;
    display: grid;
    grid-template-columns: 240px auto;
    
}

.sideBar{
    background-color: #2f3136;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.sideBar_tool{
    background-color: #2f3136;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 0px;
    padding: 4px;
}

.sideBar_me{
    height: 52px;
    background-color: #292b2f;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
}
.sideBar_me_in{
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 90px 3fr;
    align-content: center;
}
.sideBar_search{
    height: 48px;
    box-shadow: var(--elevation-low);
    
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f3136;
}
.sideBar_search div{
    border: 1px solid transparent; 
    width: 90%;
    height: 60%;
    background-color: #202225;
    border-radius: 4px;
    color: white;
    text-align: left;
    color: #72767d;
    padding: 4px;
    font-size: 13px;
    cursor: pointer;
}

.sideBar_list{
    
    overflow-x: hidden;
    overflow-y: scroll;
    
}

.sideBar_list::-webkit-scrollbar {
    display:none;
}
.sideBar_select{
    height: 42px;
    color: rgb(153, 153, 153);
    margin: 2px 5px;
    border-radius: 4px;
}
.sideBar_select_slash{
    background-color:unset;
    padding: 18px 8px 4px 12px;
    height: 40px;
    
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;

    color:#8e9297;
    display: flex;
    flex-direction: row; 
}
.sideBar_select_slash:hover{
    color: rgb(189, 189, 189);
}
.chatAera{
    background-color: #36393f;
}

.sideBar_me_head{
    position: relative;
    height: 32px;
    margin-right: 8px;
    
}
.sideBar_me_head img{
    width: 32px;
    height: 32px;
    border-radius: 50px;
}
.sideBar_me_info{
    height: 32px;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
    line-height: 10px;
    
}

.sideBar_me_info_name{
    height: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
}
.sideBar_me_info_num{
    height: 40%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #b9bbbe;
    font-size: 12px;
    font-weight: 450;
    line-height: 10px;
    vertical-align: baseline;
}


.sideBar_me_setting{
    height: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
}
.sideBar_me_setting div{
    
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    
}
.sideBar_me_setting div:hover{
    
    background-color: #36393f;
    border-radius: 5px;
}
.sideBar_me_setting_del{
    position:absolute;
}
.sideBar_me_head_satus{
    position: absolute;
    left: 20px;
    top: 19px;
    height: 16px;
    width: 16px;
    background-color: rgb(67, 181, 129);
    border: 3px solid #292b2f;
    border-radius: 50px;
}
.sideBar_me_head_hover{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    border-radius: 50px;
    background-color: #292b2f6e;
}

.sideBar_me_change_status{
    position: absolute;
    width: 224px;
    height: 240px;
    bottom: 42px;
    left: 0;
    padding: 5px 10px 5px 9px;
    transition: transform .12s ease-out,opacity .12s ease-out,-webkit-transform .12s ease-out;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
}
.sideBar_me_change_status div{
    height: 100%;
    border-radius: 4px;
    padding: 6px 4px;
    background-color: #18191c;
    display: flex;
    flex-direction: column;
}
.sideBar_select_h{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.sideBar_select_h div:nth-child(1){
    margin-left: 12px;
    margin-right: 12px;
}
.sideBar_select_h div:nth-child(2){
    flex: 1;
    margin-left: 4px;
}
.closeIcon-rycxaQ{
    display: block;
    width: 16px;
    height: 16px;
    color: rgb(212, 212, 212);
}
.sideBar_select_w{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
}
.sideBar_select_w div:nth-child(1){
    margin-right: 6px;
}
.sideBar_select_w div:nth-child(2){
    flex: 1;
    font-size: 16px;
}
.sideBar_select_hover_active{
    color: rgb(212, 212, 212);
    background-color: rgba(255, 255, 255, 0.048);
}

.sideBar_select_select_active{
    color: rgb(250, 250, 250);
    background-color: rgba(255, 255, 255, 0.11);
}
</style>