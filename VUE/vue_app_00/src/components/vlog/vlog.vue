<template>
    <div>
        <h3>留言反馈</h3>
        <content-box></content-box>
    </div>
</template>
<script>
import Content from '../subcomponents/content'
export default {
    data(){
        return{}
    },
    components:{
        'content-box':Content
    }
}
</script>