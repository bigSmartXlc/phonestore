// pages/xz/mymovie.js
const sql =wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    file:""
  },
  
  
  
  
  
  myupload: function () {
    // 功能一: 选择一张图片
    // console.log(123);
    wx.chooseImage({
      count:1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: res=>{
        var file=res.tempFilePaths[0];
        this.setData({
          file:file
        })
      },
    })
  },
  mysubmit: function () {
    wx.showLoading({
      title: '上传中....',
    })
    // 功能二: 上传图片并且将图片保存云数据库
    // 获取上传图片
    var f=this.data.file;
    // 截取文件后缀名称
    var suffix=/\.\w+$/.exec(f)[0];
    // 创建新的文件名
    var newFile=new Date().getTime()+suffix;
    // 获取用户评论内容
    var c=this.data.content;
    // 上传文件操作
    wx.cloud.uploadFile({
      cloudPath:newFile,
      filePath:f,
      success:res=>{
        console.log(res.fileID);
        var fid=res.fileID;
        sql.collection("mymovie").add({
          data:{
            fileID:fid,
            content:c
          },
        }).then(res=>{
          wx.hideLoading();
          wx.showToast({
            title: '发表成功！',
          })
        }).catch(err=>{
          wx.showToast({
            title: '发表失败',
          })
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
 
 
 
 
 
  onContentChange: function (e) {
    //功能:获取用户输入留言内容
    console.log(e);
    this.setData({
      content: e.detail
    });
  },
 
 
 
 
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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