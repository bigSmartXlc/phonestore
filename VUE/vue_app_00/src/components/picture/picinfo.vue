<template>
    <div>
        <div class="pic_container">
            <h4>图片详情</h4> 
            <img :src="infomation.picurl" alt="">
            <p>{{infomation.content}}</p>
        </div>
        <content-box></content-box>
    </div>
</template>
<script>
import Content from '../subcomponents/content'
export default {
    data(){
        return{
            id:this.$route.params.id,
            infomation:{}
        }
    },
    methods: {
        getpicinfo(){
            console.log(this.id)
            this.axios.get("http://127.0.0.1:3000/picinfo",{params:{id:this.id}}).then(result=>{
                this.infomation=result.data[0];
            })
        }
    },
    created() {
        this.getpicinfo();
    },
    components:{
        'content-box':Content
    }
}
</script>
<style>
    .pic_container{
        padding: 0 8px;
    }
    .pic_container>img{
        width: 200px;
        margin-left: 45px;
    }
    .pic_container>p{
        font-size: 13px;
        color:black
    }
</style>
