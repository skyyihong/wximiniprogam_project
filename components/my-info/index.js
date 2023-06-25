// components/my-info/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: "isolated" //apply-shared shared
  },
  properties: {
    info: {
      type: Object,
      value: {
        name: "helloworld",
        age: 28
      }
    }
  },
  externalClasses: ["sonclass"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapToPage() {
      this.triggerEvent("mydefinedTap", "传参内容")
    }
  }
})