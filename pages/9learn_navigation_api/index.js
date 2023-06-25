// pages/9learn_navigation_api/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname: "hongyan"
  },
  navigateTo() {
    wx.navigateTo({
      url: "/pages/10learn_login/index?name=hongyan&ag=18",
      events: {
        detailToPage: function (data) {
          console.log("detailToPage:", data);
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    if (options && options == {}) console.log(options)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */

})