// pages/xz/comment.js
// 初始化数据库，env当前环境id
const sql=wx.cloud.database({env:""});
Page({




  /**
   * 页面的初始数据
   */
  data: {
   list:[],
    value:"",
    score:5,
    images:[],
    fileids:[],
    movieid:""
  },
  



  // 选择图片
  selectimage:function(){
    wx.chooseImage({
      count:9,
      sizeType:["original","compressed"],
      sourceType:["album","camera"],
      success: (res)=> {
        console.log(res.tempFilePaths)
        var files=res.tempFilePaths;
        this.setData({
          images:files
        })
      },
    })
  },



//上传到云存储
submit:function(){
  wx.showLoading({
    title: '正在上传中...',
  })
  var promiseArr=[];
  for(var i=0;i<this.data.images.length;i++){
    promiseArr.push(
      // 创建promise对象，负责上传一张图片任务
      new Promise((reslove,reject)=>{ 
        // 获取当前图片
        var item=this.data.images[i];
        // 拆分文件后缀名
        var suffix=/\.\w+$/.exec(item)[0];
        // 创造新文件名：时间+随机数+后缀名
        var newFile=new Date().getTime()+Math.floor(Math.random()*9999)+suffix;
        // 将上传的图片的fileID保存到数组
        wx.cloud.uploadFile({
          cloudPath:newFile,
          filePath:item,
          success:res=>{
            console.log(res);
            var fid=res.fileID;
        // 上传成功拼接fileId
            var ids=this.data.fileids.concat(fid);
            this.setData({
                fileids:ids
            })
        // 将当前promise任务追加到任务列表中
            reslove();
          },
          fail:err=>{
        // 上传失败输出错误消息
            console.log(err)
          }
        })
    }))
  }

  // 在云数据库中添加集合comment
  // 此集合用于保存所有评论内容和我呢见id
  // 等待数组中所有promise任务执行结束
  Promise.all(promiseArr).then(res=>{
  // 回调函数中
  // 初始化最顶端的数据库


  // 将评论内容 分数 电影id 上传图片所有id
  // 添加集合中
  sql.collection("comment").add({
    data:{
      content:this.data.value,//评论内容
      score:this.data.score,//打分
      movieid:this.data.movieid,//电影ID
      fileID:this.data.fileids//图片的fileID
    }
  })
  .then(res=>{
  // 隐藏加载提示框
    wx.hideLoading();
  // 显示提示框“发送成功”
  wx.showToast({
    title: '发表成功',
  })
  })
  // 添加集合失败
  .catch(err=>{
  // 隐藏加载提示框
  wx.hideLoading()
  // 显示提示框“评论失败”
  wx.showToast({
    title: '评论失败',
  })
  })
  })
} ,

// 评论内容
onContentChange:function(e){
  console.log(e.detail);
  this.setData({
    value:e.detail
  })
},


// 打分
onScoreChange:function(e){
  this.setData({
    score:e.detail
  })
},

// 云函数请求数据
loadmore:function(){
  wx.showLoading({
    title: '正在加载....',
  })
  wx.cloud.callFunction(
    { name: "getdata", data: { id:this.data.movieid } }
  ).then(res => {
    var obj = JSON.parse(res.result);
    console.log(obj);
    this.setData({
      list: obj
    });
    wx.hideLoading();
  })
    .catch(err => {
      console.log(err);
    })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options.id);
    this.setData({
      movieid:options.id
    })
    this.loadmore();
  },  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})