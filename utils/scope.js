//  scope.js
import es6 from 'es6-promise.min'

//  获取用户授权
function getScope(scopeName) {
  return new es6.Promise(function (resolve, reject) {
    //  查询授权
    wx.getSetting({
      success(res) {
        if (!res.authSetting[scopeName]) {
          //  发起授权
          wx.authorize({
            scope: scopeName,
            success() {
              resolve(0)
            }, fail() {
              resolve(1)
            }
          })
        }
      }
    })
  })
}

module.exports = { getScope: getScope }