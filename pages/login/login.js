// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["中国", "美国", "巴西", "日本"],
    index: 0,
    modalHidden2: true,
    notice_str:'111',
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }, 
  //弹出提示框  
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  }, 
  formSubmit:function(e){
    var that = this;
    var formData = e.detail.value;
    if (!formData.username){
      this.setData({
        modalHidden2: false,
        notice_str: '请输入用户名'
      })
      return false;
    }
    if (!formData.password) {
      this.setData({
        modalHidden2: false,
        notice_str: '请输入密码'
      })
      return false;
    }
    console.log(e)
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