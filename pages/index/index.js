// index.js


// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: "", // 如需尝试获取用户信息可改为false
    btnList: [{
        context: "page函数，常见内置组件",
        path: '/pages/3regist_page/index'
      },
      {
        context: "for循环命令的使用",
        path: '/pages/4for_command/index'
      },
      {
        context: "wxs的使用",
        path: '/pages/5wxs_demo/index'
      },
      {
        context: "event事件的使用",
        path: '/pages/6learn_event/index'
      },
      {
        context: "组件学习",
        path: '/pages/7learn_components/index'
      },
      {
        context: "API学习",
        path: '/pages/8learn_components_api/index?name=hongyan&age=18'
      },
      {
        context: "页面跳转API",
        path: '/pages/9learn_navigation_api/index'
      },
      {
        context: "微信登录login",
        path: '/pages/10learn_login/index'
      },
      {
        context: "第三方组件vant使用",
        path: '/pages/11learn_vant_component/index'
      },
      {
        context: "第三方库hy-event-store使用",
        path: '/pages/12learn_hy_event_store/index'
      }
    ]
  },
  // 事件处理函数
  btnClick(event) {
    wx.navigateTo({
      url: event.target.dataset.path,
    })
  },
  onLoad() {}

})