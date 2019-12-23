Page({
  data:{
    userInfo:{}
  },
  startApp: function (event) {
    wx.switchTab({
      url: '/pages/posts/posts',
    })
  },
  onLoad:function(){
    const _this = this
    wx.getUserInfo({
      withCredentials:false,
      lang:"zh_CN",
      success:function(res){
        // console.log(res)
        _this.setData({
          userInfo:res.userInfo
        })
      }
    })
  }
})