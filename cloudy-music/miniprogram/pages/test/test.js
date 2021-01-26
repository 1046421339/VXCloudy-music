// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var let const JS中的三种定义变量的类型
    //const 只读
    //let 局部变量
    const obj = {} //定义一个空对象
    const arr = [] //定义一个空数组
    const str = '' //定义一个空字符串
    const name = "jjli"
    const person = {
      name,//属性的缩写=name = name,
      age: 30,
    }
    //调用云函数
    // let _this=this
    wx.cloud.callFunction({
      name:'login'
    }).then((res)=> {   //用箭头函数解决this的问题
      this.setData({
        openid : res.result.openid
      })
      // console.log(res.result.event.userInfo);
    })
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