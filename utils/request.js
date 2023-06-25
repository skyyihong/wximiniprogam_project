function myfuncrequest(options) {
  return new Promise((reslove, reject) => {
    wx.request({
      success(res) {
        reslove(res)
      },
      fail: reject,
      ...options
    }, )
  })

}

class myClassRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  get(options) {
    const {
      url
    } = options
    const fullurl = this.baseUrl + url
    return new Promise((reslove, reject) => {
      wx.request({
        method: 'get',
        success(res) {
          reslove(res)
        },
        fail: reject,
        ...options,
        url: fullurl
      })

    })

  }

  post(options) {
    const {
      url
    } = options
    const fullurl = this.baseUrl + url
    return new Promise((reslove, reject) => {
      wx.request({
        method: 'post',
        success(res) {
          reslove(res)
        },
        fail(err) {
          reject(err)
        },
        ...options,
        url: fullurl
      })

    })
  }
}

const skyyiRequest = new myClassRequest("https://skyyi.top")


export {
  myfuncrequest,
  skyyiRequest
}