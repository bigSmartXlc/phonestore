// pages/xz/happy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  loadmore:function(){
    wx.showLoading({
      title: '正在加载...',
    })
    wx.cloud.callFunction(
      { name: "movielist", data: { start:this.data.list.length, count: 10 } }
    ).then(res => {
      // console.log(res.result);
      var obj = JSON.parse(res.result);
      var rows=obj.subjects;
      rows= this.data.list.concat(rows)
      this.setData({
        list: rows,
        // imageURL: obj.subjects[0].images.small
      });
        wx.hideLoading();
      console.log(obj)
      // console.log(obj.subjects[0].images.small);
    }).catch(err => {
      console.log(err);
    })
  },
  // 跳转详情页
  details:function(e){
    // 获取自定义属性
    var id=e.target.dataset.id;
    // 关闭并跳转
    // wx.redirectTo({
    //   url: 'comment',
    // })
    // 保留并跳转
    wx.navigateTo({
      url: 'comment?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    this.loadmore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})