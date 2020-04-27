<template>
    <div class="home_container">

        <div class="home_nav">
            <div class="home_head" @click="goto('home')">
                <div class="home_pill " v-bind:class="{ home_pill_hight: currentChoose('master','home') }"></div>
                <el-tooltip  effect="dark"  placement="right-start"  v-bind:open-delay='opendelay' content="发现服务器"  v-bind:enterable="false" transition="el-zoom-in-center">
                    <div slot="content" class=" tooltip_item"><strong>主页</strong></div>
                    <div class="headimg_bg" v-bind:class="{ headimg_bg_focus : currentChoose('master','home') }">
                        <svg t="1584091682998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13041" width="40" height="40"><path d="M848 312c0 165.92-216.48 232-308.32 92.32A168 168 0 1 1 848 312z" fill="#69CC00" p-id="13042"></path><path d="M800 264a168.16 168.16 0 0 1-260.32 140.32 168 168 0 0 1 232.64-232.64A167.68 167.68 0 0 1 800 264z" fill="#84E507" p-id="13043"></path><path d="M768 512a256 256 0 1 1-256-256 256 256 0 0 1 256 256z" fill="#FD7504" p-id="13044"></path><path d="M720 432c0 235.84-293.28 345.12-448 169.44a256 256 0 0 1 432-258.88A251.36 251.36 0 0 1 720 432z" fill="#FD8F07" p-id="13045"></path><path d="M766.08 496c-104 0-181.12 12.8-256-51.84C446.56 390.08 384 400 290.24 400a16 16 0 0 1 0-32c99.04 0 167.84-10.24 240 51.84C596.32 476.48 663.36 464 766.08 464a16 16 0 0 1 0 32zM466.72 656h-176a16 16 0 0 1 0-32h176c68.64 0 71.04-64 154.56-64h138.72a16 16 0 0 1 0 32h-138.72c-68.64 0-71.04 64-154.56 64zM432 496H258.08a16 16 0 0 1 0-32H432a16 16 0 0 1 0 32zM711.84 368H576a16 16 0 0 1 0-32h135.84a16 16 0 0 1 0 32z" fill="#FDA736" p-id="13046"></path><path d="M480 592a48 48 0 1 1 48-48 48 48 0 0 1-48 48z m0-64a16 16 0 0 0 0 32 16 16 0 0 0 0-32z" fill="#FDA736" p-id="13047"></path><path d="M830.24 764.8a16 16 0 0 1 0-32c22.4 0 37.28-4.48 41.92-12.8 11.2-19.36-20.64-76.96-117.12-157.44a16 16 0 0 1 20.48-24.64c60.16 50.24 156.32 142.72 124.48 198.08-11.04 19.04-34.4 28.8-69.76 28.8z" fill="#68539B" p-id="13048"></path><path d="M832 736a48 48 0 1 1-48-48 48 48 0 0 1 48 48z" fill="#FF2E04" p-id="13049"></path><path d="M740.32 755.68a48 48 0 0 1 64-64 48 48 0 0 1-64 64z" fill="#FF5C3C" p-id="13050"></path><path d="M496 816a112 112 0 1 1-112-112 112 112 0 0 1 112 112z" fill="#2DE0C7" p-id="13051"></path><path d="M288 872.64c-58.72-99.2 55.2-211.36 153.28-153.28 57.6 98.24-54.88 212-153.28 153.28z" fill="#93E6D9" p-id="13052"></path><path d="M208 560a64 64 0 1 1-64-64 64 64 0 0 1 64 64z" fill="#D82FEA" p-id="13053"></path><path d="M85.76 586.24a64 64 0 0 1 84.48-84.48 64 64 0 0 1-84.48 84.48z" fill="#E667F9" p-id="13054"></path><path d="M528 784a16 16 0 0 1-0.96-32 240 240 0 1 0-75.84-471.68 16 16 0 0 1-8-31.04A272 272 0 0 1 784 512c0 157.12-133.76 272-256 272zM361.44 325.12a240 240 0 0 0-30.24 344.64 16 16 0 0 1-24 21.12 272 272 0 0 1 14.24-372.96c24.32 8.16 30.56 13.6 40 7.2zM395.84 301.92a240 240 0 0 0-34.4 23.2 16 16 0 0 0-3.52-28.32l-8.16-3.04a265.28 265.28 0 0 1 30.72-19.84 16 16 0 0 1 15.36 28zM470.08 773.6a96 96 0 0 0-115.84-48.8 16 16 0 0 1-10.24-30.4 128 128 0 0 1 154.88 65.12 16 16 0 0 1-28.8 14.08z" fill="#35214C" p-id="13055"></path><path d="M256 816c0-134.88 183.04-178.08 242.88-56.48C510.4 782.88 523.04 832 496 832a16 16 0 0 1-16-16 96 96 0 0 0-125.76-91.2C250.88 758.4 275.2 912 384 912a96 96 0 0 0 81.44-45.28 16 16 0 0 1 27.2 16.96C425.12 992 256 944 256 816zM73.92 598.56a16 16 0 0 1 28.16-16 48 48 0 1 0 0-46.4 16 16 0 0 1-28.16-16 80 80 0 1 1 0 77.12z" fill="#35214C" p-id="13056"></path><path d="M672 208a16 16 0 0 1-11.36-27.36l40-40a16 16 0 0 1 22.72 22.72C680.16 206.56 680.8 208 672 208zM672 320a16 16 0 0 1-11.36-27.36l40-40a16 16 0 0 1 22.72 22.72C680.16 318.56 680.8 320 672 320zM768 352a16 16 0 0 1-11.36-27.36l72-72a16 16 0 0 1 22.72 22.72C777.44 349.12 777.44 352 768 352z" fill="#C5EE09" p-id="13057"></path><path d="M272 192a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FED370" p-id="13058"></path><path d="M904.96 414.4a16 16 0 0 1 14.08-28.8 16 16 0 0 1-14.08 28.8z" fill="#FD7504" p-id="13059"></path><path d="M840.96 558.4a16 16 0 0 1 14.08-28.8 16 16 0 0 1-14.08 28.8z" fill="#FDA736" p-id="13060"></path><path d="M576 928a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD8F07" p-id="13061"></path><path d="M640 816a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FDA736" p-id="13062"></path><path d="M208 720a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD7504" p-id="13063"></path><path d="M576 96a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FD8F07" p-id="13064"></path><path d="M448 208a16 16 0 0 1-32 0 16 16 0 0 1 32 0z" fill="#FDA736" p-id="13065"></path><path d="M784 800a64 64 0 1 1 64-64 64 64 0 0 1-64 64z m0-96a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM346.72 326.88a820.8 820.8 0 0 0-25.28-8.96 256 256 0 0 1 28.32-24.16l8.16 3.04a16 16 0 0 1-11.2 30.08z" fill="#35214C" p-id="13066"></path><path d="M695.84 737.6C459.68 658.88 61.28 397.12 124 288c31.04-53.6 151.2-20.8 225.76 5.76a256 256 0 0 0-28.32 24.16c-416-139.68 7.84 265.92 384 389.28a16 16 0 0 1-9.6 30.4z" fill="#68539B" p-id="13067"></path><path d="M788.32 418.56c112-112-4.96-301.28-155.52-251.04-74.4 24.32-73.76 78.24-99.04 60.32a16 16 0 0 1-3.84-22.4A184 184 0 1 1 811.2 440.96a16 16 0 0 1-22.88-22.4z" fill="#35214C" p-id="13068"></path><path d="M746.72 461.6A240 240 0 0 0 520.96 272a16 16 0 0 1 0-32 272 272 0 0 1 256 214.72 16 16 0 0 1-30.24 6.88z" fill="#43b480" p-id="13069"></path></svg>
                    </div>
                </el-tooltip>
            </div>

            <div class="home_head guildSep"><img src=""/></div>
            
            <div class="home_head"  v-for="sv in getServeList" v-bind:key="sv.channel_id" @click="goto('channel',sv.channel_id)" >
                <div class="home_pill" v-bind:class="{ home_pill_hight: currentChoose('channel',sv.channel_id) }"></div>
                <div style="border-radius:300px ;">
                    <el-tooltip  effect="dark"  placement="right-start"  v-bind:open-delay='opendelay' v-bind:enterable="false" transition="el-zoom-in-center">
                        <div slot="content" class=" tooltip_item"><strong>{{sv.channel_name}}</strong></div>
                        <img class="headimg" v-bind:class="{ headimg_bg_focus : currentChoose('channel',sv.channel_id) }" :src='sv.head_img_url' alt=""/>
                    </el-tooltip>
                </div>
            </div>
            
            <div class="home_head guildSep"><img src=""/></div>
            
            <div class="home_head_tool" tabindex="-1" @click="dialogTableVisible = true" @mouseover="currentHover='add'" @mouseleave="currentHover='other'">
                <div class="home_pill" v-bind:class="{ home_pill_hight: discovery_select }"></div>
                <el-tooltip effect="dark"  placement="right-start"  v-bind:open-delay='opendelay' v-bind:enterable="false" transition="el-zoom-in-center">
                    <div slot="content" class=" tooltip_item"><strong>添加服务器</strong></div>
                    <div class="headimg_bg " v-bind:class="{ headimg_toolbg_focus : discovery_select }"  >
                        <svg t="1584092326051" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27815" width="26" height="26"><path d="M516.608 876.544c-20.992 0-41.472-4.608-41.472-26.624V549.376H179.2c-16.896 0-26.624-15.872-26.624-36.352 0-18.944 7.168-36.864 25.088-36.864h302.08V179.2c0-19.968 14.848-31.232 36.864-31.232 20.48 0 36.352 9.216 36.352 26.624V471.04h305.664c20.48 0 21.504 24.576 21.504 41.472s-5.632 36.352-26.112 36.352H552.96V849.92c0.512 17.408-15.36 26.624-36.352 26.624z" v-bind:fill="icon_switch_color(discovery_select,'add')" p-id="27816"></path></svg>
                    </div>
                </el-tooltip>
            </div>
            
            <div class="home_head_tool" style="margin-bottom: 50px;" @click="goto('search')" @mouseover="currentHover='search'" @mouseleave="currentHover='other'">
                <div class="home_pill" v-bind:class="{ home_pill_hight: currentChoose('discovery','search') }"></div>
                    <el-tooltip  effect="dark"  placement="right-start"  v-bind:open-delay='opendelay' content="发现服务器"  v-bind:enterable="false" transition="el-zoom-in-center">
                        <div slot="content" class=" tooltip_item"><strong>发现服务器</strong></div>
                        <div class="headimg_bg" v-bind:class="{ headimg_toolbg_focus : currentChoose('discovery','search') }">
                            <svg t="1584092426997" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28710" width="26" height="26"><path d="M854.3 887.3c-9.3 0-18.1-3.6-24.8-10.3L628 675.5l-3.5 2.7c-21 16.5-44.1 30.1-68.8 40.6-37.4 15.8-77.1 23.8-118 23.8-40.9 0-80.6-8-118-23.8-36.1-15.3-68.5-37.1-96.3-64.9-27.8-27.8-49.7-60.2-64.9-96.3-15.8-37.4-23.8-77.1-23.8-118s8-80.6 23.8-118c15.3-36.1 37.1-68.5 64.9-96.3 27.8-27.8 60.2-49.7 96.3-64.9 37.4-15.8 77.1-23.8 118-23.8 40.9 0 80.6 8 118 23.8 36.1 15.3 68.5 37.1 96.3 64.9 27.8 27.8 49.7 60.2 64.9 96.3 15.8 37.4 23.8 77.1 23.8 118s-8 80.6-23.8 118c-9.7 23-22.2 44.7-37.2 64.5l-2.6 3.5 202 202c6.6 6.6 10.3 15.4 10.3 24.7 0 9.4-3.6 18.1-10.3 24.7-6.7 6.7-15.5 10.3-24.8 10.3zM437.7 206.7c-62.2 0-120.7 24.2-164.8 68.2-44 44-68.2 102.5-68.2 164.8 0 62.2 24.2 120.7 68.2 164.8 44 44 102.5 68.2 164.8 68.2 62.2 0 120.7-24.2 164.8-68.2 44-44 68.2-102.5 68.2-164.8S646.5 319 602.5 274.9c-44-44-102.5-68.2-164.8-68.2z" p-id="28711" v-bind:fill="icon_switch_color(currentChoose('discovery','search'),'search')" class="path"></path></svg>
                        </div>
                    </el-tooltip> 
            </div> 
           
        </div>
        <div class="home_base">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <el-dialog  top="25vh" 
                    :show-close="false"  
                    :visible.sync="dialogTableVisible"
                    @open="discovery_select=true;add_server=0;"
                    @close="discovery_select=false;"
                    >
            <transition>
                <div class="h_dialog" v-if="add_server==0">
                    <div class="h_dialog_title"><h2>噢，另一个服务器?</h2></div>
                    <div class="h_dialog_select">
                        <div >
                            <div class="h_dialog_select_in">
                                <div class="h_dialog_select_title">
                                    <strong>创建</strong>一个新的服务器，并且邀请你的好友。这是免费的！
                                </div>
                                <div class="h_dialog_select_img">
                                    <img src="../assets/create_server.svg"/>
                                </div>
                                <div class="h_dialog_select_btn">
                                    <button @click="add_server=1">创建服务器</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="h_dialog_select_in">
                                <div class="h_dialog_select_title">
                                    <strong>加入</strong>一个服务器，不过需要一个邀请码哦。
                                </div>
                                <div class="h_dialog_select_img">
                                    <img src="../assets/join_server.svg"/>
                                </div>
                                <div class="h_dialog_select_btn">
                                    <button @click="add_server=2">加入服务器</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h_dialog_create" v-if="add_server==1">
                    <div class="h_d_c_body">
                        <h5>创建你的服务器</h5>
                        <p>通过创建服务器，您可以免费与您的朋友进行聊天。</p>
                        <div class="hdcb">
                            <div class="hdcb_input">
                                <div class="hdcb_input_title">服务器名称</div>
                                <div class="hdcb_input_raw" >
                                    <input v-model="create_server_input"  placeholder="输入服务器名称">
                                </div>
                                <p>您创建服务器代表你同意Happy Chat的社区守则。</p>
                            </div>
                            <div  class="hdcb_img">
                                <div class="hdcb_img_in">
                                    <div>
                                        <img  src="https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                                        <div class="hdcb_img_in_hover">
                                            更改图标
                                        </div>
                                    </div>
                                </div>
                                <div class="hdcb_img_label">
                                    最小尺寸：128x128
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h_d_c_foot">
                        <button class="dcf_btn_1" @click="add_server=0">
                            <svg t="1585118295184" class="icon" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2853" width="16" height="16"><path d="M393.3125 143.3125l-312.5 312.5c-24.4063 24.4063-24.4063 63.9688 0 88.375l312.5 312.5c24.4063 24.4063 63.9688 24.4063 88.375 0 24.4063-24.4063 24.4063-63.9688 0-88.375l-205.8125-205.8125h599.125c34.5313 0 62.5-27.9688 62.5-62.5 0-34.5313-27.9688-62.5-62.5-62.5h-599.125l205.8125-205.8125c12.1875-12.2188 18.3125-28.1875 18.3125-44.1875s-6.0938-32-18.3125-44.1875c-24.4063-24.4063-63.9688-24.4063-88.375 0z" p-id="2854" fill="#bfbfbf"></path></svg>
                            后退</button>
                        <div></div>
                        <button class="dcf_btn_2" @click="create_Server(create_server_input,'https://images.unsplash.com/photo-1584996931193-59d1ddbd4cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'
                        )">创建</button>
                    </div>
                </div>
                <div class="h_dialog_join" v-if="add_server==2">
                    <div class="h_d_c_body">
                        <h5>加入服务器</h5>
                        <p>在下面输入邀请以加入现有的服务器。<br>邀请看起来张这样的：<br>
                            <span>fdHYkds</span><br>
                            <span>https://happychat.gg/fdHYkds</span><br>
                            <span>https://happychat.gg/happychat-develop</span>
                        </p>
                        <div class="hdcb_input hdcb_input_join">
                                <div class="hdcb_input_raw hdcb_input_raw_join" >
                                    <input  placeholder="输入邀请">
                                </div>
                                <p>您加入别人的服务器也要同意Happy Chat的社区守则哦。</p>
                        </div>
                    </div>
                    <div class="h_d_c_foot">
                        <button class="dcf_btn_1" @click="add_server=0">
                            <svg t="1585118295184" class="icon" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2853" width="16" height="16"><path d="M393.3125 143.3125l-312.5 312.5c-24.4063 24.4063-24.4063 63.9688 0 88.375l312.5 312.5c24.4063 24.4063 63.9688 24.4063 88.375 0 24.4063-24.4063 24.4063-63.9688 0-88.375l-205.8125-205.8125h599.125c34.5313 0 62.5-27.9688 62.5-62.5 0-34.5313-27.9688-62.5-62.5-62.5h-599.125l205.8125-205.8125c12.1875-12.2188 18.3125-28.1875 18.3125-44.1875s-6.0938-32-18.3125-44.1875c-24.4063-24.4063-63.9688-24.4063-88.375 0z" p-id="2854" fill="#bfbfbf"></path></svg>
                            后退</button>
                        <div></div>
                        <button class="dcf_btn_2">加入</button>
                    </div>
                </div>
                </transition>
        </el-dialog>
            <el-dialog title="收货地址" 
            :visible.sync="isConnecting"
            :fullscreen="true"
            class="connecting"
            :close-on-press-escape="false"
            >
                <global-home-loading></global-home-loading>
            </el-dialog>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import home_loading from './common/home_loading'
import butif_loading from './common/butif_loading'
export default {
    name: 'home',
    data: function () {
        return {
            discovery_select: false,
            currentHover: 'home',
            opendelay: 100,
            dialogTableVisible: false,
            add_server: 0,
            create_server_input: "",
            isConnecting: true,
            websocket: null
        }
    },
    mounted:function(){
        console.log("mounted")
        this.init()
    },
    computed: {
        ...mapGetters([
            'getServeList'
        ])
    },
    methods: {
        init(){
            console.log("websocket init")
            if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                this.$gws.setWs(new WebSocket("ws://localhost:9876/ws"))
                this.$gws.ws.onmessage = this.onmessage
                this.$gws.ws.onopen = this.onopen
                this.$gws.ws.onclose = this.onclose
                this.$gws.ws.onerror = this.onerror
            }
        },
        onmessage:function(event){
            console.log("onmessage")
            console.log(event.data)
            let data = JSON.parse(event.data)
             let payload = data.msg
            if(data.op==0||data.op==1){
                let chat_id = payload.sender
                if(data.op==1){
                    chat_id = payload.receiver
                }
                this.$store.commit("msglist_add",{
                            chat_id: chat_id,
                            msg_id: payload.msg_id,
                            msg_type: payload.msg_type,
                            timestamp: payload.timestamp/1000000,
                            sender: payload.sender,
                            receiver: payload.receiver,
                            innerText: payload.innerText,
                            content: payload.content
                        })
                this.$store.commit("chatlist_change",chat_id)
            }
            if(data.op==10||data.op==11){
                let chat_id = payload.sender
                if(data.op==11){
                    chat_id = payload.receiver
                }
                this.$store.commit("msglist_del",{
                    chat_id: chat_id,
                    msg_id: payload.msg_id
                })
            }
            
        },
        onopen:function(){
             console.log("onopen")
             this.isConnecting = false
        },
        onclose:function(){
             this.isConnecting = true
             this.$gws.setWs(new WebSocket("ws://localhost:9876/ws"))
        },
        onerror:function(){
            console.log("onerror")
        },
        currentChoose:function(key, value){
            let ph = this.$route.path.split('/')[1]
            if(key == ph){
                if(key == 'channel'){
                    let id = this.$route.path.split('/')[2]
                    return value==id
                }else{
                    return true
                }
            }
            return false
        },
        goto: function(e, data){
            if(e=='channel'){
                this.$router.push({name: 'channel', params:{id: data}}).catch(()=>{})
            } else if(e=='search'){
                this.$router.push({name: 'discovery'}).catch(()=>{})
            }
            else{
                this.$router.push({name: 'home'}).catch(()=>{})
            }
        },
        icon_switch_color:function(b,data){
            if( b||this.currentHover == data)
                return '#ffffff'
            else
                return '#43b480'
        },
        create_Server(name, img){
            this.$store.commit('server_add',{
                name: name,
                img: img
            })
            this.dialogTableVisible = false
        }
    },
    components:{
        'global-home-loading':butif_loading
    }
}
</script>

<style>
.home_container{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 72px auto;   
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
}

.home_head{
    height: 45px;
    width: 100%;
    margin-top: 12px;
    padding-right: 4px;
    position:relative;
    display: grid;
    grid-template-columns: 5px auto;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    
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
    transition: height .05s linear;
}


.guildSep{
    height: 1px;
    width: 32px;
    border-radius: 1px;
    background-color: rgba(82, 82, 82, 0.568);
}
.headimg{
    height: 48px;
    width: 48px;
    overflow: hidden;
    border-radius:100px ;
}

.headimg_bg{
    height: 48px;
    width: 48px;
    border-radius:300px ;
    background-color: #36393f;
    display: flex;
    flex-direction:  column;
    align-items:center;
    justify-content: center;
    fill: #43b480;
}
.home_pill_hight{
    height: 80%;
}
.headimg_bg_focus{
    border-radius:15px;
    background-color: #7289da;
    fill:#ffffff;
}
.headimg_toolbg_focus{
    border-radius:15px;
    background-color: #43b480;
    fill:#ffffff;
}


.home_head_tool{
    height: 45px;
    width: 100%;
    margin-top: 12px;
    padding-right: 4px;
    display: grid;
    grid-template-columns: 5px auto;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    
}
.home_head_tool:hover .home_pill{
    height: 40%;
}

.home_head_tool:hover .headimg_bg{
    border-radius:15px;
    background-color: #43b480;
}


.tooltip_item{
    font-size: 14px;
    color:#FFF;
    font-weight: 500;
}

.el-tooltip__popper[x-placement^=right]{margin-left:8px}
.el-tooltip__popper.is-dark{background:#000000;color:#FFF}

.home_container .el-dialog{
    width: 540px;
    max-width: 570px;
    border-radius: 6px;
}
.home_container .el-dialog__body{
    padding: unset;
}
.home_container .el-dialog__header{
    display: none;
}
.h_dialog{
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
}
.h_dialog_title{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.h_dialog_title>h2{
    font-size: 24px;
    font-weight: bold;
}
.h_dialog_select{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
     justify-content: center;
}
.h_dialog_select>div{
    width: 50%;
    height: 100%;
    padding: 18px 12px 8px 12px;

}

.h_dialog_select_in{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 12px;
    border: 1px solid rgba(156, 156, 156, 0.589);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.h_dialog_select_in:hover{
    box-shadow: 0px 0px 6px rgb(150, 150, 150);

}

.h_dialog_select_img{
    margin: 12px 0px;
}
.h_dialog_select_img>img{
    width: 100%;
    height: 100px;
}
.h_dialog_select_btn{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7289da;
    border-radius: 4px;
}
.h_dialog_select_btn>button{
    width: 194px;
    height: 38px;
    color: #fff;
    background-color: #7289da;
    border: 1px solid transparent; 
    border-radius: 4px;
    outline: none;
    cursor: pointer;
}
.h_dialog_select_btn>button:hover{
    background-color: #41b941;
}


.h_dialog_create{
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
}
.h_d_c_body{
    height:346px;
    padding: 28px 40px 0px;
    display: flex;
    flex-direction: column;
    justify-items: center;
}
.h_d_c_body>h5{
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    color: #7289da;
}
.h_d_c_body>p{
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
    margin: 0;
    padding: 10px 0;
    color: #747f8d;
    margin-bottom: 24px;
}
.h_d_c_foot{
    height:74px;
    background-color: #f6f6f7;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 32px;
    border-radius: 4px;
}
.h_d_c_foot>button{
    outline: none;
    border: 1px solid transparent; 
    cursor: pointer;
    
}
.h_d_c_foot>div{
    flex: 1;
}
.dcf_btn_1{
    width: 76px;
    height: 38px;
    background-color: inherit;
    color: #99AAB5;
}
.dcf_btn_1:hover{
    /* border-bottom: 2px solid rgb(77, 77, 77); */
    box-shadow: 0px 4px 2px -2px rgba(73, 73, 73, 0.842);
}
.dcf_btn_2{
    width: 100px;
    height: 38px;
    background-color: #7289DA;
    border-radius: 4px;
    color: #fff;
}
.dcf_btn_2:hover{
    background-color: rgb(79, 108, 216);
}
.hdcb{
    
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 200px;
}
.hdcb_input{
    flex: 1;
    height: 140px;
}

.hdcb_img{
    width: 190px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-items: center;
}
.hdcb_img_in{
    height: 140px;
    display: grid;
    justify-items: center;
    align-content: center;
}
.hdcb_img_in>div{
    width: 144px;
    height: 144px;
    border-radius: 100%;
    border: 4px solid rgba(0, 247, 255, 0.473);
    position: relative;
     overflow: hidden;
}
.hdcb_img_in_hover{
    width: 140px;
    height: 140px;
    position: absolute;
    background-color: rgba(119, 119, 119, 0.493);
    border-radius: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    line-height: 12px;
    color: rgb(187, 187, 187);
    display: none;
}
.hdcb_img_in>div:hover .hdcb_img_in_hover{
    display: block;
    line-height:140px;
    text-align: center;
}
.hdcb_img_in img{
    width: 140px;
    height: 140px;
    /* overflow: hidden; */
    border-radius: 100%;
}   
.hdcb_img_label{
    margin-top: 8px;
    text-align: center;
    font-size: 10px;
    font-weight:bold ;
}
.hdcb_input_title{
    font-size: 11px;
    font-weight: 700;
    color: #4f5660  ;
}
.hdcb_input_raw{
    height: 40px;
    border-bottom: 2px solid #e3e5e8;
    margin-top: 12px;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 16px;
    font-weight: 500;

}
.hdcb_input>p{
    font-size: 11px;
    line-height: 13px;
    margin: 15px 0;
    color:#747f8d;
}
.hdcb_input_raw>input{
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    line-height: 40px ;
    color: #2f3136;
    font-weight: bold;
    background-color: inherit;
}

.h_dialog_join{
    width: 100%;
    height: 420px;}

.h_d_c_body>p>span{
    color: #7289da;
    font-size: 12px;
}
input::-webkit-input-placeholder { color: rgba(184, 184, 184, 0.692);}

 
.connecting{
    width: 100%;
    height: 100%;
    background-color: violet;
}
.connecting .el-dialog{
    width: 100%;
    height: 100%;
    max-width: unset;
    border-radius: unset;
   
}
.connecting .el-dialog__body{
    padding: unset;
    width: 100%;
    height: 100%;
}
.connecting .el-dialog__header{
    display: none;
}
</style>
