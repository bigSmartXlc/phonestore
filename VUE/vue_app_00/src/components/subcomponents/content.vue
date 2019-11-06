<template>
  <div>
    <!-- <h1>评论区</h1> -->
    <hr />
    <textarea placeholder="请输入你想要说的话，最多120字" maxlength="120" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="submitcontent">发表评论</mt-button>
    <div class="cont-list" v-for="(item,i) of contentlist" :key="i">
      <p class="con-title">
        <span>{{i+1}}楼</span>
        <span>用户：{{item.username}}</span>
        <span>发表时间：{{item.contenttime}}</span>
      </p>
      <p>{{item.content}}</p>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      floorid: "",
      username: "",
      contenttime: "",
      contentlist: []
    };
  },
  created() {
    //  console.log(this.$route.params.id)
    this.loadcontent();
  },
  methods: {
    loadcontent() {
      if(this.$route.params.id==undefined){
        this.$route.params.id=1
      }
      this.axios
        .get("http://127.0.0.1:3000/loadcontent", {
          params: { id: this.$route.params.id }
        })
        .then(result => {
          // console.log(result.data);
          this.contentlist = result.data;
        });
    },
    submitcontent() {
      if(this.$route.params.id==undefined){
        this.$route.params.id=1
      }
      if (this.content == "") {
        this.$toast({
          message: "内容不能为空", //内容
          position: "middle", //位置
          duration: 2000, //时间
          iconClass: "iconfont icon-food-cake"
        });
        return;
      }
      var contenttime = new Date().toLocaleString();
      var arr = {
        content: this.content,
        contentid: null,
        contenttime,
        newsid: this.$route.params.id,
        username: "匿名"
      };
      console.log(this.contentlist);
      (this.contentlist).unshift(arr);
      this.axios
        .get("http://127.0.0.1:3000/addcontent", {
          params: {
            time: contenttime,
            content: this.content,
            id: this.$route.params.id
          }
        })
        .then(result => {
          console.log(result);
          if (result.data == "1") {
            this.$toast({
              message: "发表成功", //内容
              position: "middle", //位置
              duration: 2000, //时间
              iconClass: "iconfont icon-food-cake"
            });
            // this.loadcontent();
            this.content = "";
          } else {
            this.$toast({
              message: "发表失败", //内容
              position: "middle", //位置
              duration: 2000, //时间
              iconClass: "iconfont icon-food-cake"
            });
          }
        });
    }
  }
};
</script>
<style>
.con-title {
  display: flex;
  justify-content: space-between;
  background-color: #ccc;
}
</style>
