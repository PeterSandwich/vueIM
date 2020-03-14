<template>
    <div class="master_can">
        <div class="sideBar">
            <div class="sideBar_search">
                <div>寻找或开始新的对话</div>
            </div>
        </div>
        <div class="chatAera"></div>
    </div>
</template>

<script>
export default {
    name: 'master'
    
}
</script>

<style>
.master_can{
    height: 100%;
    display: grid;
    grid-template-columns: 240px auto;
}

.sideBar{
    background-color: #2f3136;
}
.chatAera{
    background-color:#36393f;
}
.sideBar_search{
    height: 48px;
    box-shadow: rgb(29, 29, 29) 0 1px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #36393f;
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
</style>