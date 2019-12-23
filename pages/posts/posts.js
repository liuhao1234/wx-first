// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "posts_list": []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var posts_list = [{
      user_avatar: "/images/avatar/1.png",
      date: "2019-12-12",
      user_name: "大宝贝儿",
      post_img: "/images/post/cat.png",
      text: "凤凰山之旅",
      star: 1000,
      view: 1289
    }, {
      user_avatar: "/images/avatar/2.png",
      date: "2019-09-12",
      user_name: "亲爱的",
      post_img: "/images/post/crab.png",
      text: "凤凰山之旅",
      star: 1000,
      view: 1289
    }, {
      user_avatar: "/images/avatar/3.png",
      date: "2019-09-12",
      user_name: "小甜甜",
      post_img: "/images/post/sls.jpg",
      text: "凤凰山之旅",
      star: 1000,
      view: 1289
    }]

    this.setData({
      posts_list
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})