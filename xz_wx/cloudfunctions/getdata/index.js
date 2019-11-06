var gd = require("request-promise")
// 创建main函数
exports.main = async (event, context) => {
  // 创建变量url存储请求地址
  var url = `http://api.douban.com/v2/movie/subject/${event.id}?apikey=0df993c66c0c636e29ecbb5344252a4a	`;
  // gd函数发送请求并且将豆瓣返回电影列表待调用
  return gd(url)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err);
    })
}