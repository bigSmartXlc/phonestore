import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 导入vue-resource
import axios from 'axios';
Vue.prototype.axios = axios;
//1:完整引入mint-ui
import MintUI from 'mint-ui'
//3:将mint-ui注册vue
Vue.use(MintUI);
// import VueResource from 'vue-resource'
// 导入组件
import App from './App.vue'
// 导入样式
import './lib/mui/css/mui.min.css'
import 'mint-ui/lib/style.css'
import './lib/mui/css/icons-extra.css'
// 导入mintUI组件
import { Header, Tabbar, TabItem, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// 安装路由
import router from './router.js'
import VueX from 'vuex'
Vue.use(VueX);
Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.use(VueRouter);
// 阻止生成生产提示
Vue.config.productionTip = false;
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new VueX.Store({
  state: {
    car: []
  },
  mutations: {
    // 加入购物车
    addcar(state, count) {
      var have = false;
      state.car.some(item => {
        if (item.id == count.id) {
          item.count += count.count;
          have = true;
          return
        }
      });
      if (have == false) {
        state.car.push(count);
      }
      console.log(state.car)
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    // 购物车中添加商品数量
    addcount(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.count = parseInt(info.count);
          return
        }
      })
      localStorage.setItem("car", JSON.stringify(state.car))
    },
    // 删除购物车的商品
    removegoods(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
          return
        }
      })
      localStorage.setItem("car", JSON.stringify(state.car))
    },
    // 切换商品的勾选状态
    updategoodselected(state,info){
      state.car.some(item=>{
        if(item.id==info.id){
          item.selected=info.selected;
        }
      })
      localStorage.setItem("car", JSON.stringify(state.car)) 
    }
    },
 
  getters: {
    shopnumber(state) {
      var sum = 0;
      state.car.forEach(item => {
        sum += item.count;
      });
      return sum
    },
    getgoodsselected(state){
      var obj={}
      state.car.forEach(item=>{
        obj[item.id]=item.selected
      })
      return obj;
    },
    addgoodsamount(state){
      var obj={count:0,amount:0}
        state.car.forEach(item=>{
          if(item.selected==true){
            obj.count+=item.count;
            obj.amount+=item.count*item.price
          }
        })
        return obj
  }
}
})
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
