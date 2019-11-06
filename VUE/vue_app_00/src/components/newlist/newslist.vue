<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,i) of newslist" :key=i>
					<router-link :to="'newsinfo/'+item.newsid">
						<img class="mui-media-object mui-pull-left" :src="item.newspic">
						<div class="mui-media-body">
							{{item.newstitle}}
							<p class='mui-ellipsis sub'><span>{{item.newstime}} </span><span>浏览次数：{{item.clicktimes}}</span> </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newslist:[]
        }
    },
    created(){
        this.getnewslist()
    },
    methods: {
        getnewslist(){
            this.axios.get("http://127.0.0.1:3000/newslist").then(result=>{
                console.log(result)
                this.newslist=result.data
            })
        }
       
    },
}
</script>
<style>
    .sub{
        color:#26A2ff;
        font-size: 13px;
        display: flex;
        justify-content: space-between
    }
</style>
