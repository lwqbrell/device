// pages/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 获取设备信息
    wx.getSystemInfo({
      success(res) {
        // 异步将数据更新到视图层
        that.setData({
          systemInfo: res
        })
      }
    })
  }
})