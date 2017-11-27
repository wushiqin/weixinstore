// pages/localstorage/localstorage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: ""
  },
  //获取用户输入框的值
  searchNameInput: function (e) {
    var that = this;
    that.setData({
      inputValue: e.detail.value
    })
  },
  //将用户输入的内容存入本地缓存,并且将搜索数据放到首页
  setSearchStorage: function () {
    var that = this
    if (this.data.inputValue != '') {
      //调用API向本地缓存存入数据
      var searchData = wx.getStorageSync('searchData') || []
      searchData.push(this.data.inputValue)
      wx.setStorageSync('searchData', searchData)
      //读取用户搜索商品
      var name = this.data.inputValue
      wx.request({
        url: 'www.shop.com/home/product/search',
        data: { name: name },
        method: 'GET',
        success: function (res) {
          that.setData({
            goodsList: res.data.info,
          })
        },
      })
    }
  },
//查看历史搜索
  seeHistory: function () {
    var searchData = wx.getStorageSync('searchData') || []
    this.setData({
      searchData: searchData
    })
  },
  //删除搜索历史
  deleteHistory: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '是否删除历史搜索',
      success: function (res) {
        if (res.confirm) {
          wx.setStorageSync('searchData', []);
          wx.switchTab({
            url: '/pages/index/index',
            success: function (e) {//解决微信小程序switchTab后tab不刷新
              var page = getCurrentPages().pop();
              if (page == undefined || page == null) return;
              page.onShow();
            } 
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})