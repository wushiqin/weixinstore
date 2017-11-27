//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')
var scope = require('../../utils/scope.js')
var formatLocation = util.formatLocation
var getScope = scope.getScope
Page({
  data: {
    motto: '欢迎来到小程序',
    userInfo: {},
    location:{},
    userinfoview: true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    "banner_list": [
      {
        "banner": [
          {
            "pic_url": "../../image/tu1.png",
          },
          {
            "pic_url": "../../image/tu2.png",
          },
          {
            "pic_url": "../../image/tu1.png",
          },
          {
            "pic_url": "../../image/tu2.png",
          },
          {
            "pic_url": "../../image/tu1.png",
          }
        ]
      },
      {
        "banner": [
          {
            "pic_url": "../../image/tua1.png",
          },
          {
            "pic_url": "../../image/tua2.png",
          },
          {
            "pic_url": "../../image/tua4.png",
          },
          {
            "pic_url": "../../image/tua3.png",

          }
        ]
      }
    ],
    hotgoods: [
      {
        "name": "90分轻薄羽绒服",
        "summary": "防钻绒工艺,保暖更锁温,备好深秋暖意",
        "ext_tag": "http://static.home.mi.com/app/shop/img?id=shop_9d57f6e89d1f560b7bce31e0b85a7285.png&w=420&h=240&crop=a_0_120_1080_480&t=png",
        "pic_url": "http://static.home.mi.com/app/shop/img?id=shop_48ebe9e693ade1766877e0f8adf425f7.png&w=420&h=240&crop=a_90_0_240_240"
      },
      {
        "name": "红米Note 3",
        "summary": "金属机身,指纹解锁,4000mAh大电池",
        "ext_tag": "http://static.home.mi.com/app/shop/img?id=shop_d65477ca8db6626da323554e132d7de9.png&w=420&h=240&crop=a_0_120_1080_480&t=png",
        "pic_url": "http://static.home.mi.com/app/shop/img?id=shop_c2cf209c66a22818c7f5c269f6bbff12.jpeg&w=420&h=240&crop=a_90_0_240_240",
        "url": "http://home.mi.com/shop/detail?gid=95"
      },
      {
        "name": "小米手机5",
        "summary": "骁龙820处理器,4轴防抖相机",
        "ext_tag": "http://static.home.mi.com/app/shop/img?id=shop_34699befd5c2de3a028eb987fea574e9.png&w=420&h=240&crop=a_0_120_1080_480&t=png",
        "pic_url": "http://static.home.mi.com/app/shop/img?id=shop_8dec2f08e5dd9d08b440f77a36e39e16.png&w=420&h=240&crop=a_90_0_240_240"
      },
      {
        "name": "小米Max",
        "pic_url": "http://static.home.mi.com/app/shop/img?id=shop_35a026ff12d476496f91d121911af0ce.jpg&crop=a_90_0_240_240",
        "summary": "6.44寸大屏黄金尺寸,买赠智能显示保护套",
        "ext_tag": "http://static.home.mi.com/app/shop/img?id=shop_86f01fa8cea034deb1dce44c0385baab.png&w=420&h=240&crop=a_0_120_1080_480&t=png"
      },
      {
        "name": "最生活毛巾",
        "summary": "精选阿瓦提长绒棉,瑞典抗菌科技,3条/包",
        "ext_tag": "http://static.home.mi.com/app/shop/img?id=shop_26beb8c609406d060c57b7cdc9d2627f.png&w=420&h=240&crop=a_0_120_1080_480&t=png",
        "pic_url": "http://static.home.mi.com/app/shop/img?id=shop_1e29af11fa83139dd305d61cb83c94ac.jpeg&w=420&h=240&crop=a_90_0_240_240"
      },
      {
        "name": "小米空气净化器 2",
        "summary": "全新空气增压系统,净化性能高达 310m³/h",
        "pic_url": "http://static.home.mi.com/app/shop/img?id=shop_0b23f4b364ee73bc86b280cc7397638c.jpg&w=420&h=240&crop=a_90_0_240_240"
      }
    ]
  },
  onPullDownRefresh: function () {
    console.log("1111")
    wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000);
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../home/home'
    })
  },
  bindLocation:function(){
    this.data.location = { "latitude": "39.90403", "longitude": "116.407526" }
    wx.navigateTo({
      url: '../location/location?location=' + JSON.stringify(this.data.location)
    })
  },
  telephone: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: "010-4234565",
      success: function () {
        console.log("成功拨打电话")
      }
    })
  },
  getLocation: function () {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        var longitude = res.longitude
        var latitude = res.latitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: '外文大厦',
          address: '北京市海淀区外文大厦',
        })
        
      },
      fail: function (res) {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权,将无法正常获取位置信息,点击确定重新获取授权。',
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  if (res.authSetting["scope.userLocation"]) {////如果用户重新同意了授权登录
                    wx.getLocation({
                      type: 'gcj02',
                      success: function (res) {
                        console.log(res + "1111")
                        var longitude = res.longitude
                        var latitude = res.latitude
                        wx.openLocation({
                          latitude: latitude,
                          longitude: longitude,
                          name: '外文大厦',
                          address: '北京市海淀区外文大厦',
                        })
                      }
                    })
                  }
                }, fail: function (res) {
                }
              })
            }
          }
        })
      }
    })
  },
  scaning: function () {
    var that = this
    wx.scanCode({
      success: (res) => {
        that.setData({
          scanresult: res.result
        })
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
    setTimeout(function () {
      that.setData({
        userinfoview: false
      })
    }, 3000)
  },
  onShow() {
    let list = ["scope.userInfo", "scope.userLocation", "scope.address", "scope.record"];
    //  记录请求结果
    let num = 0;
    //  问题1：怎么改成循环方式？
    scope.getScope(list[0]).then(function (res) {
      num += res;
      scope.getScope(list[1]).then(function (res) {
        num += res;
        scope.getScope(list[2]).then(function (res) {
          num += res;
          scope.getScope(list[3]).then(function (res) {
            num += res;
            //  调起设置界面
            if (num) {
              wx.openSetting({
                success(res) {
                  //  允许获取用户信息
                  if (res.authSetting["scope.userInfo"])
                    userService.login()
                }
              })
            } else {
              userService.login()
            }
          })
        })
      })
    })
  }
})
