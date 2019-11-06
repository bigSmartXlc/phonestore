<template>
    <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) of lunbolist" :key="i">
        <img :src="item.picurl" />
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:["lunbolist"]
}
</script>
<style>
  .mint-swipe {
  height: 200px;
}
.mint-swipe img {
  width: 414px;
}
</style>
