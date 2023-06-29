// pages/10learn_login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    nickname: ""
  },
  getNickname() {
    wx.getUserProfile({
      desc: 'desc',
      success(res) {
        console.log(res);
      }
    })
  },

  getCode() {

    wx.login({
      success: (res) => {
        console.log(res.code)
        this.setData({
          code: res.code
        })
      },
    })


  },
  backNaviator() {
    wx.navigateBack({
      delta: 1
    })
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit("pageToDetial", {
      data: "详情页的数据"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options) console.log(options);

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
  onUnload(event) {
    const pages = getCurrentPages()
    pages[pages.length - 2].setData({
      myname: "hello world"
    })

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
  onShareAppMessage() {

  }
})