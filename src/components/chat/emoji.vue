<template>
    <div class="emj_container">
        
        <div class="emj_search">
            <div class="emj_search_inp">
                <input placeholder="探索最适用的表情符号"/>
                <svg t="1585294599423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8401" width="26" height="26"><path d="M874.895 772.853 719.488 617.445c30.736-49.14 48.52-107.211 48.52-169.444 0-176.732-143.268-320-320-320.001-176.731 0-320 143.27-320 320 0 176.731 143.269 320.001 320 320.001 62.241 0 120.319-17.789 169.464-48.532l155.434 155.435c28.129 28.129 73.855 28.129 101.988 0C903.023 846.708 903.023 801.044 874.895 772.853zM448.009 640.001c-106.04 0-192-85.962-192-192.001s85.961-192 192-191.999c106.039 0 192 85.961 192 192C640.008 554.039 554.047 640.001 448.009 640.001z" p-id="8402" fill="#707070"></path></svg>
            </div>
            <div class="emj_search_icon"> 
                <svg t="1585294162465" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4654" width="32" height="32"><path d="M995.141827 511.379549c0 269.808403-218.825631 488.603003-488.634034 488.603004-269.839433 0-488.634034-218.7946-488.634034-488.634034C17.873759 241.540116 236.66836 22.745516 506.507793 22.745516c65.008465 0 126.975962 12.62933 183.637278 35.653807 178.858612 72.548827 304.965726 247.994107 304.965726 452.949196z" fill="#FBDF6C" p-id="4655"></path><path d="M599.505583 927.961241c-269.808403 0-488.603003-218.7946-488.603003-488.634034 0-144.197774 62.463981-273.74925 161.791951-363.178556C114.471063 157.044626 6.113278 321.567243 6.113278 511.50367c0 269.839433 218.76357 488.634034 488.603004 488.634034 125.610629 0 240.298594-47.445319 326.842082-125.424447a486.555004 486.555004 0 0 1-222.052781 53.247984z" fill="#FAC56B" p-id="4656"></path><path d="M223.542546 477.215196a65.629071 65.629071 0 0 0-65.722162 65.722162h131.413293a65.846283 65.846283 0 0 0-65.691131-65.722162z m573.098493 0a65.629071 65.629071 0 0 0-65.722162 65.722162h131.413293a65.846283 65.846283 0 0 0-65.691131-65.722162z" fill="#F8A880" p-id="4657"></path><path d="M509.952156 1019.904001c-68.763131 0-135.664444-13.467147-198.469758-40.091139a511.565421 511.565421 0 0 1-162.133284-109.226634 506.879846 506.879846 0 0 1-109.226634-162.133284A506.786756 506.786756 0 0 1 0.00031 509.952156c0-68.763131 13.498178-135.664444 40.12217-198.469758a511.565421 511.565421 0 0 1 109.226634-162.133284 504.11815 504.11815 0 0 1 162.133284-109.226634A506.16615 506.16615 0 0 1 509.952156 0.00031c68.794161 0 135.695474 13.498178 198.500788 40.12217a511.565421 511.565421 0 0 1 162.133284 109.226634 506.879846 506.879846 0 0 1 109.226634 162.133284 506.16615 506.16615 0 0 1 40.091139 198.469758c0 68.794161-13.467147 135.695474-40.091139 198.500788a511.565421 511.565421 0 0 1-109.226634 162.133284 506.879846 506.879846 0 0 1-162.133284 109.226634 506.786756 506.786756 0 0 1-198.500788 40.091139z m0-983.722368c-261.119921 0-473.584341 212.495451-473.584342 473.615371s212.309269 473.770523 473.584342 473.770523c261.275072 0 473.615372-212.495451 473.615371-473.615371S771.072077 36.181633 509.952156 36.181633z" fill="#595068" p-id="4658"></path><path d="M248.242659 310.303247a93.090881 62.060587 90 1 0 124.121175 0 93.090881 62.060587 90 1 0-124.121175 0Z" fill="#595068" p-id="4659"></path><path d="M620.606183 310.303247a93.090881 62.060587 90 1 0 124.121174 0 93.090881 62.060587 90 1 0-124.121174 0Z" fill="#595068" p-id="4660"></path><path d="M310.303247 589.575889h372.363523a186.181762 186.181762 0 1 1-372.363523 0z" fill="#873A17" p-id="4661"></path><path d="M310.303247 589.575889h372.363523v31.030294H310.303247z" fill="#FFFFFF" p-id="4662"></path><path d="M650.457325 694.2721A185.99558 185.99558 0 0 1 496.485008 775.757651a185.99558 185.99558 0 0 1-153.910256-81.39246c9.929694-39.563624 77.979128-10.457209 157.106377-10.457209 79.096218 0 141.59123-29.044355 150.807227 10.364118z" fill="#DB634E" p-id="4663"></path></svg>
            </div>
        </div>
        <div class="emj_body">
            <div class="emj_body_item" v-for="ej in emojis" :key="ej.code" @mouseover="hover_emoji_func(ej)" @click="$emit('emj', ej.emj)">
                <div>{{ej.emj}}</div>
            </div>
        </div>
        <div class="emj_footer">
            <div class="emj_footer_1">{{hover_emoji.emj}}</div>
            <div class="emj_footer_2">:{{hover_emoji.dsc}}:</div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'emoji',
    data: function(){
        return {
            hover_emoji: {
                emj: '😁',
                dsc: "grinning_face_with_smiling_eyes"
            }
        }
    },
    methods: {
        hover_emoji_func: function(ej){
            this.hover_emoji = ej
        }
    },
    computed:{
        emojis(){
            return this.$store.state.emoji.emojis
        }
    }
}
</script>
<style>
.emj_container{
    width: 100%;
    height: 380px;
    border-radius: 8px;
}
.emj_search{
     height: 58px;
     width: 100%;
     background-color: #2f3136;
     border-bottom: 3px solid rebeccapurple;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 10px;
}
.emj_search_inp{
    width: 85%;
    height: 38px;
    border-radius: 4px;
    /* margin-left: 0px; */
    background-color: rgb(19, 19, 19);
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.emj_search_icon{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 17px;
}
.emj_search_inp>input{
    outline: none;
    border: unset;
    width: 88%;
    height: 38px;
    border-radius:inherit;
    background-color: inherit;
    padding: 0px 6px;
    color:white;
    font-weight: bold;
}
.emj_search_inp>svg{
    margin-left: 8px;
}
.emj_body{
    background-color: #2f3136;
    height:266px;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    justify-items: center;
    padding: 6px 3px 0px 6px;
    
}
.emj_body_item{
    width: 30px;
    height: 30px;
    border-radius: 4px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.emj_body_item:hover{
    background-color: rgb(73, 73, 73);
}
.emj_body_item>div{
    font-size: 22px;
}
.emj_footer{
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #222325;
}
.emj_body::-webkit-scrollbar{
    width: 4px;
    border-radius: 8px;
}

.emj_body::-webkit-scrollbar-thumb{
    border-radius: 8px;
    width: 4px;
    box-shadow: 4px 0 0 #212225 inset;
}
.emj_footer_1{
    font-size: 28px;
    margin-left: 12px;
    margin-right: 6px;
}
.emj_footer_2{
    font-size: 16px;
    color: white;
    max-width: 320px;
    text-overflow: ellipsis;
}
</style>