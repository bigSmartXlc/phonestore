// 引入路由模块
import VueRouter from 'vue-router'

// 导入对应的路由组件
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/member.vue'
import Shopcar from './components/tabbar/shopcar.vue'
import Search from './components/tabbar/search.vue'
import Newslist from './components/newlist/newslist.vue'
import Newsinfo from './components/newlist/newsinfo.vue'
import Picture from './components/picture/pic.vue'
import Picinfo from './components/picture/picinfo.vue'
import Shop from './components/shop/shop.vue'
import Goodsinfo from './components/shop/goodinfo.vue'
import Vlog from './components/vlog/vlog.vue'
import Video from './components/video/video.vue'
import Connect from './components/connect/connect.vue'
var router = new VueRouter({
  routes:[
    {path:'/',redirect:"/home"},
    {path:'/home',component:Home},
    {path:'/member',component:Member},
    {path:'/shopcar',component:Shopcar},
    {path:'/search',component:Search},
    {path:'/home/newslist',component:Newslist},
    {path:'/home/newsinfo/:id',component:Newsinfo},
    {path:'/home/picture',component:Picture},
    {path:'/home/picinfo/:id',component:Picinfo},
    {path:'/home/shop',component:Shop},
    {path:'/home/goodsinfo/:id',component:Goodsinfo},
    {path:'/home/vlog',component:Vlog},
    {path:'/home/video/:id',component:Video},
    {path:'/home/connect',component:Connect}
  ],
  linkActiveClass:"mui-active"
})
export default router
