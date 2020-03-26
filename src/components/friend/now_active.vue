<template>
    <div class="na_container">
        <div class="na_header"><strong>当前活动</strong></div>
        <div class="na_list">
            <div class="na_list_default">
                <h3><strong>目前无人活动......</strong></h3>
                <p>当有人开始活动时(比如玩游戏或语音聊天)，我们会在这里显示！</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'now_active'
}
</script>

<style>
.na_container{
    display: flex;
    flex-direction: column;
}
.na_header{
    height: 20px;
    /* background-color: violet;/ */
    color: #b9bbbe;
    font-size: 12px;
    margin-top: 16px;
    padding-left: 10px;
}

.na_list_default{
    background-color: #36393f;
    margin: 5px 16px 0px 16px;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.na_list_default h3{
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
}
.na_list_default p{
    font-size: 14px;
        line-height: 18px;
    color: #b9bbbe;
    margin: unset;
}
</style>