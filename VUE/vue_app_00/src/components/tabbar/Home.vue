<template>
  <div class="shouye">
    <!-- 轮播图 -->
      <swiper :lunbolist="lunbolist"></swiper>
    <!-- <h3>首页</h3> -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9 ul">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <img src="../../img/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/picture">
            <img src="../../img/menu2.png" alt />
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/shop">
            <img src="../../img/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/vlog">
            <img src="../../img/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="'/home/video/'+video">
            <img src="../../img/menu5.png" alt />
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/connect">
            <img src="../../img/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
export default {
  data() {
    return {
      lunbolist: [],
      video:1
    };
  },
  created() {
    this.getlunbotu();
  },
  components:{
    swiper
  },
  methods: {
    getlunbotu() {
      this.axios.get("http://127.0.0.1:3000/hot").then(result => {
        console.log(result.data);
        this.lunbolist = result.data;
      });
    }
  }
};
</script>
<style scoped>
.mui-content img {
  width: 60px;
}
.ul {
  background-color: #fff;
}
</style>
