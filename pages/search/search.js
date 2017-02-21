//search.js
var app = getApp();
Page({
  data: {
    inputValue:''
  },
  goBack:app.goBack,
  bindKeyInput: function (e){
    this.setData({
      inputValue:e.detail.value
    })
  },
  searchFn: function (){
    wx.redirectTo({
      url: '../repair/repair?keyword='+this.data.inputValue
    })
  }
})
