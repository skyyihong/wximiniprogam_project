// app.js
App({
  onLaunch(options) {
    //onlauch是app才有的生命周期函数，指app已启动
    //onluach也是常用于发送首页的网络请求
    //getStorageSync为同步api
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // console.log(options) //传过来的参数，有包括场景sence的对应的代码

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res);
      }
    })
  },
  onShow(options) {},
  globalData: {
    userInfo: null
  }
})