<template>
  <div>
    <!-- 顶部拖动栏 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            v-for="(item,i) of titlelist"
            :key="i"
            @click="getpiclist(item.titleid)"
          >{{item.title}}</a>

        </div>
      </div>
    </div>
	<!-- 图片列表 -->
<ul>
	<router-link v-for="(item,i) of piclist" :key=i :to="'/home/picinfo/'+item.picid" tag="li">
    	<img v-lazy="item.picurl">
		<p>{{item.content}}</p>
  	</router-link>
</ul>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return{
			titlelist:[{title:"家居生活",titleid:1},{title:"摄影设计",titleid:2},{title:"明星美女",titleid:3},{title:"空间设计",titleid:4},{title:"游戏截图",titleid:5}],
			piclist:[]
        }
    },
    methods: {
        getpiclist(subid){
			this.piclist=[];
			this.axios.get("http://127.0.0.1:3000/piclist",{params:{subid}}).then(result=>{
				console.log(result);
				this.piclist=result.data;
			})
		}
	},
	created() {
		this.titlelist.unshift({title:"全部",titleid:0});
		this.getpiclist(0);
	},
    mounted(){
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
	}	
}
</script>
<style>
* {
  touch-action: pan-y;
}
ul{
	list-style: none;
	padding:0;
	width: 100%;
}
ul>li{
	padding:0 10px 10px 10px;
	position:relative;
}
ul>li img{
	width:100%;
}
ul>li>p{
	position: absolute;
	bottom:0px;
	width: 280px;
	margin-left: 10px;
	color:#fff;
	font-size:12px;
}
</style>
