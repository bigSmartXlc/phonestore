// // 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }
// 向豆瓣网发送请求获取最新电影列表
// 引入ajax第三方模块
var rp=require("request-promise")
// 创建main函数
exports.main=async(event,context)=>{
// 创建变量url存储请求地址
  var url =`http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${event.start}&count=${event.count}`;
  // rp函数发送请求并且将豆瓣返回电影列表待调用
return rp(url)
.then(res=>{
  return res
})
.catch(err=>{
  console.log(err);
})
}