// pages/city/city.js
var app = getApp();
Page({
  data:{
    data:[],
    page:'',
    AList:[],
    BList:[],
    CList:[],
    DList:[],
    EList:[],
    FList:[],
    GList:[],
    HList:[],
    IList:[],
    JList:[],
    KList:[],
    LList:[],
    MList:[],
    NList:[],
    OList:[],
    PList:[],
    QList:[],
    RList:[],
    SList:[],
    TList:[],
    UList:[],
    VList:[],
    WList:[],
    XList:[],
    YList:[],
    ZList:[],
    ACity:false,
    BCity:false,
    CCity:false,
    DCity:false,
    ECity:false,
    FCity:false,
    GCity:false,
    HCity:false,
    ICity:false,
    JCity:false,
    KCity:false,
    LCity:false,
    MCity:false,
    NCity:false,
    OCity:false,
    PCity:false,
    QCity:false,
    RCity:false,
    SCity:false,
    TCity:false,
    UCity:false,
    VCity:false,
    WCity:false,
    XCity:false,
    YCity:false,
    ZCity:false
  },
  goBack:app.goBack,
  onLoad:function(e){
    this.setData({
      page:'../'+e.page+'/'+e.page
    })
    this.getCityList();
  },
  skipPage: function (e){
    wx.navigateTo({
      url:this.data.page+'?code='+e.target.dataset.code
    })
  },
  getCityList: function (){
    var that = this;
    wx.request({
      url:'http://weixin.pre.ichejk.com/WeChat/city/getCitys',
      success:function (res){
        console.log(res);
        if(res.statusCode == 200){
          var data = res.data;
          that.setData({
              data:data
            })
          if(data.A != undefined){
            that.setData({
              ACity:'A',
              AList:data.A
            })
          }
          if(data.B != undefined){
            that.setData({
              BCity:'B',
              BList:data.B
            })
          }
          if(data.C != undefined){
            that.setData({
              CCity:'C',
              CList:data.C
            })
          }
          if(data.D != undefined){
            that.setData({
              DCity:'D',
              DList:data.D
            })
          }
          if(data.E != undefined){
            that.setData({
              ECity:'E',
              EList:data.E
            })
          }
          if(data.F != undefined){
            that.setData({
              FCity:'F',
              FList:data.F
            })
          }
          if(data.G != undefined){
            that.setData({
              GCity:'G',
              GList:data.G
            })
          }
          if(data.H != undefined){
            that.setData({
              HCity:'H',
              HList:data.H
            })
          }
          if(data.I != undefined){
            that.setData({
              ICity:'I',
              IList:data.I
            })
          }
          if(data.J != undefined){
            that.setData({
              JCity:'J',
              JList:data.J
            })
          }
          if(data.K != undefined){
            that.setData({
              KCity:'K',
              KList:data.K
            })
          }
          if(data.L != undefined){
            that.setData({
              LCity:'L',
              LList:data.L
            })
          }
          if(data.M != undefined){
            that.setData({
              MCity:'M',
              MList:data.M
            })
          }
          if(data.N != undefined){
            that.setData({
              NCity:'N',
              NList:data.N
            })
          }
          if(data.O != undefined){
            that.setData({
              OCity:'O',
              OList:data.O
            })
          }
          if(data.P != undefined){
            that.setData({
              PCity:'P',
              PList:data.P
            })
          }
          if(data.Q != undefined){
            that.setData({
              QCity:'Q',
              QList:data.Q
            })
          }
          if(data.R != undefined){
            that.setData({
              RCity:'R',
              RList:data.R
            })
          }
          if(data.S != undefined){
            that.setData({
              SCity:'S',
              SList:data.S
            })
          }
          if(data.T != undefined){
            that.setData({
              TCity:'T',
              TList:data.T
            })
          }
          if(data.U != undefined){
            that.setData({
              UCity:'U',
              UList:data.U
            })
          }
          if(data.V != undefined){
            that.setData({
              VCity:'V',
              VList:data.V
            })
          }
          if(data.W != undefined){
            that.setData({
              WCity:'W',
              WList:data.W
            })
          }
          if(data.X != undefined){
            that.setData({
              XCity:'X',
              XList:data.X
            })
          }
          if(data.Y != undefined){
            that.setData({
              YCity:'Y',
              YList:data.Y
            })
          }
          if(data.Z != undefined){
            that.setData({
              ZCity:'Z',
              ZList:data.Z
            })
          }
        }
      }
    })
  }
})