export default Behavior({
  properties: {
    name: {
      type: String,
      vaule: "hello world"
    }
  },
  data: {
    testData: 1,
  },
  methods: {
    addCount() {
      this.setData({
        testData: this.data.testData + 1
      })
    }
  }

})