//index.js
//获取应用实例
Page({
  data:{},
  getPosition: function (){
    wx.getLocation({
      success:function (res){
        console.log(res);
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.navigateTo({
          url:'../repair/repair?latitude='+latitude+'&longitude='+longitude
          //url:'../city/city?page=repair'
        })
      },
      fail:function (){
        wx.navigateTo({
          url:'../city/city?page=repair'
        })
      }
    })
  },
  onLoad: function (){
    this.getPosition();
  }
})