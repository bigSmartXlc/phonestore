<template>
    <div id="goodslist">
        <!-- <h3>商品列表</h3> -->
        <router-link class="goodsitem" v-for="(item,i) of goodslist" :key=i tag="div" :to="'/home/goodsinfo/'+item.goodsid">
            <img :src='item.picurl.split("|")[0]' alt="">
            <p class="goodsname">{{item.goodsname}}</p>
            <div>
                <p><span class="price">￥{{item.price}}</span><span class="oldprice">￥{{item.oldprice}}</span></p>
                <p><span>热卖中</span><span>剩余0件</span></p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            goodslist:[],
            url:""
        }
    },
    created() {
        this.getgoodslist()
    },
    methods: {
        getgoodslist(){
            this.axios.get("http://127.0.0.1:3000/goodslist").then(result=>{
               this.goodslist=result.data;
            })
        }
    },
}
</script>
<style>
    #goodslist{
        padding: 0 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .goodsitem{
        width:48%;
        float: left;
        box-shadow: 0 0 7px #ccc;
    }
    .goodsitem>img{
        width:100%;
        margin-left: 5px;
    }
    .price{
        color:red;
        font-size:18px;
    }
    .oldprice{
        margin-left: 20px;
        font-size: 13px;
        text-decoration: line-through
    }
    .goodsitem .goodsname{
        padding: 0 5px;
        font-size: 13px;
        color:black;
        font-weight: bold
    }
    .goodsitem>div{
        background: #eeeeee
    }
    .goodsitem>div>p:last-child{
        display: flex;
        justify-content:space-around;
    }
</style>
