<template>
  <div>
      <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(item,i) of lunbolist" :key="i">
                <img :src="item" />
              </mt-swipe-item>
            </mt-swipe>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div
        class="mui-card-header mui-card-media"
      >
					<p class="goodsname">{{goodsinfo.goodsname}}</p>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p><span class="price">销售价: <span>{{goodsinfo.price}}</span>元</span><span>市场价:<span class="oldprice">{{goodsinfo.oldprice}}</span>元</span></p>
          <p> <span> 购买数量: </span><numbox @getcount="getselectCount"></numbox></p>
          <p>
            <mt-button type="primary">立即购买</mt-button>
            <mt-button type="danger" @click="addtocar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">产品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
        <p>商品货号：{{goodsinfo.orderid}}</p>
        <p>库存情况：{{goodsinfo.number}}</p>
        <p>上架时间：{{goodsinfo.time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
      </div>
      <div class="mui-card-footer">
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
    <transition
    @before-enter="beforeEnter" 
    @enter="enter"
    @after-enter="afterEnter"
    >
      <div class="boll" v-if="dis"></div>
    </transition>
  </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../shop/goodsinfo_numberbox.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            goodsinfo:{},
            lunbolist:[],
            dis:false,
            selectcount:1
        }
    },
    created() {
        this.getgoodsinfo();
    },
    methods: {
        getgoodsinfo(){
            this.axios.get("http://127.0.0.1:3000/goodsinfo",{params:{id:this.id}}).then(result=>{
                this.goodsinfo=result.data[0];
                this.lunbolist=result.data[0].picurl.split("|")
                console.log(this.goodsinfo.goodsname)
            })
        },
        addtocar(){
          this.dis=!this.dis;
          var goodinfo={id:this.id,url:this.lunbolist[0],name:this.goodsinfo.goodsname,count:this.selectcount,price:this.goodsinfo.price,selected:false}
          this.$store.commit("addcar",goodinfo);
        },
        beforeEnter(el){
          el.style.transform="translate(0,0)"
        },
        enter(el,done){
          el.offsetWidth;
          el.style.transform="translate(160px,203px)";
          el.style.transition="all 1s ease";
          done();
        },
        afterEnter(el){
          this.dis=!this.dis;
          console.log(3,this.dis)
        },
        getselectCount(count){
          this.selectcount=count;
          console.log(this.selectcount)
        }
    },
    components:{
        swiper,
        numbox
    }
};
</script>
<style>
   .mui-card-content-inner>p:first-child,.mui-card-content-inner>p:last-child{
     display: flex;
     justify-content: space-between
   }
   .mui-card-content-inner img{
     width:200px;
     position: relative;
     left:50%;
     margin-left:-100px;
   }
  .boll{
    width: 15px;height: 15px;
    border-radius: 50%;
    background-color:red;
    position: absolute;
    left:79px;top:418px;
    z-index: 99;
  }
   .goodsname{
     font-size: 16px;
     font-weight: bold;
     color: #000;
   }
</style>
