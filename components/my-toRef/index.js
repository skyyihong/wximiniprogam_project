// components/my-toRef/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toreffoo() {
      console.log("toreffoo");
    }
  },
  lifetimes: {
    created() {
      console.log("created");
    }
  },
  attached() {
    console.log("attached");
  },
  detached() {
    console.log("detached");
  }
})