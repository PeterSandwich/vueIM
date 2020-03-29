<template>
<div>
    <div class="test_container">
        <video ref="localVideo" autoplay playsinline></video>
        <button @click="open_video()">open video</button>
        <button @click="video_info()">video_info</button>
    </div>
</div>
</template>
<script>

export default {
    name: 'test',
    methods:{
        open_video(){
                const mediaStreamContrains = {
                video:{
                    frameRate: {min:30},
                    width: {min: 640, ideal: 1280},
                    height: {min:360, ideal: 720},
                    aspectRate: 16/9
                }
            }

            navigator.mediaDevices.getUserMedia(mediaStreamContrains).then(
                (mediaStream) => {this.$refs.localVideo.srcObject = mediaStream}
            ).catch(
                (error)=>{console.log('navigator.getUserMedia error:', error)}
            )
        },
        video_info(){
            navigator.mediaDevices.enumerateDevices().then(function(deviceInfos){
                deviceInfos.forEach(function(deviceInfo){
                    console.log(deviceInfo.kind+":"+deviceInfo.label+":"+deviceInfo.deviceId)
                })
            }).catch(
                (err)=>{
                console.log(err.name+":"+err.message)
            })
        }
    }
    
}
</script>
<style>
.test_container{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

</style>