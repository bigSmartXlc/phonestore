<template>
    <div>
        <h3>视频专区</h3>
        <video src="../../img/x.mp4" controls></video>
    <content-box></content-box>
    </div>
</template>

<style>
    video{
        width:375px;
    }
</style>
<script>
import Content from '../subcomponents/content'
export default {
    data(){
        return{
            video:1
        }
    },
    components:{
        'content-box':Content
    }
}
</script>
