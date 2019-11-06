<template>
  <div class="newsinfo-container">
    <h3 class="title">{{info.newstitle}}</h3>
    <p class="subtitle">
      <span>{{info.newstime}}</span>
      <span>点击量：{{info.clicktimes}}</span>
    </p>
    <div v-html="info.newscontent" class="content"></div>
    <content-box></content-box>
  </div>
</template>
<script>
import Content from '../subcomponents/content'
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: []
    };
  },
  components:{
      'content-box':Content
  },
  created() {

    console.log(this.id);
    this.getnewsinfo();
  },
  methods: {
    getnewsinfo() {
      this.axios
        .get("http://127.0.0.1:3000/newsinfo", { params: { id: this.id } })
        .then(result => {
          // console.log(result);
          this.info = result.data[0];
        });
    }
  }
};
</script>
<style>
    .newsinfo-container{
        padding: 0 10px;
    }
    .title{
        color: red;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        font-size: 18px;
    }
    .subtitle{
        color:#26A2ff;
        font-size: 13px;
        display: flex;
        justify-content: space-between
    }
    .content{
        font-size:14px;
        text-indent: 25px;
    }
</style>