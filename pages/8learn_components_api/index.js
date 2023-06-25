// pages/8learn_components_api/index.js
import {
  myfuncrequest,
  skyyiRequest
} from "../../utils/request"


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setStorage() {
    wx.setStorage({
      key: "mystorage",
      data: {
        name: "hognyan",
        friend: {
          name: "abc",
          hobby: "running"
        }
      },
      encrypt: true //2.21.3版本才支持
    }).then(res => {
      console.log(res);
    })
  },
  getStorage() {
    wx.getStorage({
      key: "mystorage"
    }).then(res => {
      console.log(res.data);
    })
  },

  getSystemInfo() {
    const res = wx.getSystemInfoSync()
    console.log(res);

  },

  onShareAppMessage(from, target) {
    console.log(from, target);
    return {
      title: '我自定义的titile',
      path: '/pages/9learn_navigation_api/index?name=hongyan',
      imageUrl: "/assets/nhlt.jpg",
    }
  },
  async getLocation() {

    const res = await wx.getLocation()
    console.log(res)
  },
  async funRequest() {
    console.log("--------------");
    try {
      const res = await myfuncrequest({
        url: "https://skyyi.top"
      })
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },

  async classRequest() {
    try {
      const res = await skyyiRequest.get({
        url: "/"
      })
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },

  getPhoneNumber(e) {
    console.log(e.detail.code)
  },
  tapToast() {
    wx.showToast({
      title: '确定中',
      duration: 10000,
      icon: "loading",
      mask: true,
      success(res) {
        setTimeout(() => {
          wx.hideToast() //可以自定义关闭
        }, 1000)
      },
      fail(err) {},
      complete() {}
    })
  },
  tapModal() {
    wx.showModal({
      title: '内容',
      content: '请确认是否正确',
      complete: (res) => {
        if (res.cancel) {
          console.log("按下取消键")
        }

        if (res.confirm) {
          console.log("按下确定键")
        }
      }
    })
  },
  tapLoading() {
    wx.showLoading({
      title: 'Loading',
      duration: 1000,
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err);
      },
      complete(res) {
        console.log(res);
      }
    })
  },
  tapAction() {
    wx.showActionSheet({
      alertText: 'hello',
      itemList: ["car", "plane", "bike", "ship"],
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err);
      }
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