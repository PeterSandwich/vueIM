<template>
    <div class="gif_container">
        <div class="gif_search">
            <div class="gif_search_inp">
                <input placeholder="探索好玩的表情包"/>
                <svg t="1585294599423" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8401" width="26" height="26"><path d="M874.895 772.853 719.488 617.445c30.736-49.14 48.52-107.211 48.52-169.444 0-176.732-143.268-320-320-320.001-176.731 0-320 143.27-320 320 0 176.731 143.269 320.001 320 320.001 62.241 0 120.319-17.789 169.464-48.532l155.434 155.435c28.129 28.129 73.855 28.129 101.988 0C903.023 846.708 903.023 801.044 874.895 772.853zM448.009 640.001c-106.04 0-192-85.962-192-192.001s85.961-192 192-191.999c106.039 0 192 85.961 192 192C640.008 554.039 554.047 640.001 448.009 640.001z" p-id="8402" fill="#707070"></path></svg>
            </div>
        </div>
        <div class="gif_body">
            <div class="gif_body_item gif_body_isp" @click="is_my_gif=!is_my_gif">
                <div v-if="!is_my_gif">
                    <svg  t="1585297510397" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22296" width="60" height="60"><path d="M512.03456 512m-400 0a400 400 0 1 0 800 0 400 400 0 1 0-800 0Z" fill="#FFDA64" p-id="22297"></path><path d="M512.03456 160a400 400 0 0 1 400 376V512a400 400 0 0 0-800 0v24A400 400 0 0 1 512.03456 160z" fill="#FFFFFF" p-id="22298"></path><path d="M512.03456 848A400 400 0 0 1 113.47456 480C112.03456 490.56 112.03456 501.28 112.03456 512a400 400 0 0 0 800 0c0-10.72 0-21.44-1.44-32A400 400 0 0 1 512.03456 848z" fill="#FFB666" p-id="22299"></path><path d="M1017.95456 220c-20.48-35.36-85.12-36.96-192-4.64A432 432 0 0 0 98.11456 635.52C16.03456 712-14.20544 768 6.11456 804 16.03456 822.56 39.55456 832 74.27456 832a455.36 455.36 0 0 0 124-23.2 432 432 0 0 0 727.68-420.32C1008.03456 312 1038.27456 256 1017.95456 220zM512.03456 128a384 384 0 0 1 364.16 262.24 2023.36 2023.36 0 0 1-310.08 215.52A2022.56 2022.56 0 0 1 224.03456 766.4 384 384 0 0 1 512.03456 128zM33.79456 788c-8-13.92 7.84-53.28 75.68-119.2a432 432 0 0 0 65.44 113.28c-97.12 27.36-134.56 17.92-141.12 5.92zM512.03456 896a382.56 382.56 0 0 1-262.56-104.16 2105.28 2105.28 0 0 0 332.8-158.24 2104.64 2104.64 0 0 0 304-209.12A384 384 0 0 1 512.03456 896z m336.96-654.08c97.12-27.36 134.56-17.28 141.12-5.92s-3.52 48-75.68 119.2a432 432 0 0 0-65.44-113.28z" fill="#3A394B" p-id="22300"></path><path d="M624.03456 304m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#3A394B" p-id="22301"></path><path d="M471.07456 270.08m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z" fill="#3A394B" p-id="22302"></path></svg>
                    <h6 >探索</h6>
                </div>
                <div v-else>
                    <svg   t="1585297345912" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14859" width="60" height="60"><path d="M786.309939 1003.349333c-11.093333 0-23.893333-3.754667-34.986666-9.216l-239.616-119.808L270.043273 994.133333c-23.893333 12.970667-55.296 11.093333-77.482667-5.461333s-34.986667-46.08-29.525333-73.728l49.834666-258.048L23.088606 479.914667C2.779273 459.605333-4.559394 428.202667 2.779273 402.432c9.216-27.648 31.402667-47.957333 60.757333-51.541333l263.68-47.957334L445.317939 63.146667c12.970667-25.770667 38.741333-42.325333 66.389334-42.325334S567.003273 37.376 578.096606 63.146667l117.930667 239.616 263.68 46.08c27.648 3.754667 51.541333 23.893333 59.050666 51.541333 9.216 27.648 1.877333 57.173333-18.432 77.482667L810.203273 656.896l47.957333 258.048c5.461333 29.525333-7.338667 57.173333-29.525333 73.728-10.922667 9.216-25.770667 14.677333-42.325334 14.677333z" fill="#FF9500" p-id="14860"></path></svg>
                    <h6 >收藏</h6>
                </div>
                
            </div>
            <div v-for="gif in gifs_list" :key="gif.id" class="gif_body_item">
                <img :src="gif.url" @click="send(gif)" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'gif',
    data: function(){
        return{
            is_my_gif: true
        }
    },
    methods:{
        send(gif){
            let item = {
                url: gif.url,
                height:gif.height,
                width:gif.width,
                size: gif.size
            }
            this.$emit('gifsend',item)
        }
    },
    computed:{
        gifs_list(){
            return this.$store.state.gif.gif_list
        }
    }
}
</script>

<style>
.gif_container{
    width: 100%;
    height: 420px;
}

.gif_search{
     height: 58px;
     width: 100%;
     background-color: #2f3136;
     border-bottom: 3px solid rebeccapurple;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 10px;
}
.gif_search_inp{
    width: 100%;
    height: 38px;
    border-radius: 4px;
    background-color: rgb(19, 19, 19);
    display: flex;
    flex-direction: row;
    align-items: center;
}

.gif_search_inp>input{
    outline: none;
    border: unset;
    width: 95%;
    height: 38px;
    border-radius:inherit;
    background-color: inherit;
    padding: 0px 6px;
    color:white;
    font-weight: bold;
}
.gif_body{
    height: 362px;
    width: 100%;
    padding: 8px;
    overflow: hidden;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: #222325;
}
.gif_body::-webkit-scrollbar{
    width: 4px;
    border-radius: 8px;
}

.gif_body::-webkit-scrollbar-thumb{
    border-radius: 8px;
    width: 4px;
    box-shadow: 4px 0 0 #5e5e5e inset;
}
.gif_body img{
    width: 120px;
    height: 120px ;
    border-radius: 4px;
}
.gif_body_item{
    width: 120px;
    height: 120px;
    background-color: #42464d;
    border-radius: 4px;
    margin: 4px;
    display: flex;
    align-items: center;
}
.gif_body_isp{
    background-color:rgb(48, 48, 48);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 2px 2px black;
    text-align: center;
    color: white;
    
}
.gif_body_isp h6{
    font-size: 14px;
    font-weight: bold;
}
</style>