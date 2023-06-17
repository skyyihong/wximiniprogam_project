// pages/1.基础内容学习/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      "电影1",
      "电影2", "电影3", "电影4"
    ],
    count: 30

  },
  addClick(event) {
    console.log(event);
    this.setData({
      count: this.data.count + 1
    })
  },
  minuteClick() {

    this.setData({
      count: this.data.count - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    console.log("onPullDownRefresh")
    setTimeout(() => {
      console.log("stop");
      wx.stopPullDownRefresh()
    }, 500)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.setData({
      count: this.data.count + 30
    })
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})