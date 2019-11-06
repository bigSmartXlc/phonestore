<template>
    <div>
     <div class="shoplist" v-for="(item,i) of shoplist" :key=i>
        <div class="mui-card">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <mt-switch v-model="$store.getters.getgoodsselected.selected" @change="selectedchanged(item.id,$store.getters.getgoodsselected.selected)"></mt-switch> 
              <img :src="item.url" alt="" class="carimg">
              <div class="info">
                  <span class="goodtitle">{{item.name}}</span>
                  <p><span class="price">￥{{item.price}}</span><shopcarnumbox :nowcount="item.count" :goodsid="item.id"></shopcarnumbox><a href="javascript:;" @click="remove(item.id,i)">删除</a></p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <div class="jiesuan">
              <div class="left">
                <p>总计：（不包含运费）</p>
                <p>已选中商品 <span class="price">{{$store.getters.addgoodsamount.count}}</span> 件<span class="price">总计{{$store.getters.addgoodsamount.amount}}元</span></p>
              </div>
              <div class="right"> <mt-button type="danger" >去结算</mt-button> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
    .mui-card-content-inner>*{
      float: left;
      align-items: center;
      margin:0 8px ;
    }
    .mui-card-content-inner img{

      position: relative;left:0;
      margin:0;padding:0;
      width:50px;height: 50px;
    }
    .price{
      font-size: 13px;
      font-weight: bold;
    }
    span{
      font-size: 14px;
      font-weight: bolder
    }
    .info>p{
      width:190px;
      display: flex;
      justify-content: space-between
    }
    .jiesuan{
      width: 100%;
      display: flex;
      justify-content: space-between
    }
    .goodtitle{
      width: 180px;
      overflow: hidden;/*溢出隐藏*/
      white-space: nowrap;/*文字不换行*/
      text-overflow: ellipsis;/*溢出用省略号代替*/
}
</style>
<script>
import shopcarnumbox from '../shop/shopcar_numbox'
export default {
    data(){
        return{
          shoplist:this.$store.state.car
        }
    },
    methods: {
      remove(id,index){
        this.shoplist.splice(index,1);
        this.$store.commit("removegoods",id)
      },
      selectedchanged(id,selected){
        this.$store.commit("updategoodselected",{id,selected})
      }
    },
    components:{
        shopcarnumbox
    }
}
</script>
