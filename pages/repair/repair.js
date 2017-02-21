//repair.js
//获取应用实例
var app = getApp();
Page({
  data: {
    compList:[],//查询结果列表
    currentPage:1,//接口参数
    code:'',//接口参数
    compType:'',//接口参数
    orderBy:'',//接口参数
    keyword:'',//接口参数
    latitude:'',//接口参数
    longitude:'',//接口参数
    loading:false,
    complete:false,
    compStyle:true,//企业类型是否显示弹层
    inteSort:true,//智能排序是否显示弹层
    btnTitle:'企业类型',//排序按钮显示的文字
    btnTitle2:'智能排序',//排序按钮显示的文字
    choosed:false,//企业类型是否选择
    choosed2:false,//智能排序是否选择
    id:-1,//判断选择的是哪个企业排序类型
    sort:-1//判断选择的是哪个智能排序类型
  },
  goBack:app.goBack,
  onReachBottom: function(e) {
    if(!this.data.complete){
      this.getCompList();
    }
  },
  phoneCall: function (e){
    wx.makePhoneCall({
      phoneNumber:e.target.dataset.tel
    })
  },
  compStyleFn: function (){
    if(this.data.compStyle){
      this.setData({
        compStyle:false,
        inteSort:true
      })
    }else{
      this.setData({
        compStyle:true,
        inteSort:true
      })
    }
  },
  inteSortFn: function (){
    if(this.data.inteSort){
      this.setData({
        compStyle:true,
        inteSort:false
      })
    }else{
      this.setData({
        compStyle:true,
        inteSort:true
      })
    }
  },
  onLoad: function (e){
    var code = e.code || '';
    var keyword = e.keyword || '';
    var latitude = e.latitude || '';
    var longitude = e.longitude || '';
    this.setData({
      keyword:keyword,
      latitude:latitude,
      longitude:longitude,
      code:code
    })
    this.getCompList();
  },
  chooseFn: function (e){
    var that = this;
    this.data.compType = e.target.dataset.id;
    this.data.currentPage = 1; 
    this.setData({
      compStyle:true,
      compList:[],
      choosed:true,
      id:that.data.compType
    })
    if(this.data.compType == ''){
      this.setData({
        btnTitle:'全部'
      })
    }else if(this.data.compType == 1){
      this.setData({
        btnTitle:'4S店'
      })
    }else if(this.data.compType == 2){
      this.setData({
        btnTitle:'综合维修'
      })
    }else if(this.data.compType == 3){
      this.setData({
        btnTitle:'美容装饰'
      })
    }
    this.getCompList();
  },
  choose2Fn: function (e){
    var that = this;
    this.data.orderBy = e.target.dataset.id;
    this.data.currentPage = 1; 
    this.setData({
      inteSort:true,
      compList:[],
      choosed2:true,
      sort:that.data.orderBy
    })
    if(this.data.orderBy == ''){
      this.setData({
        btnTitle2:'全部'
      })
    }else if(this.data.orderBy == 'commScore'){
      this.setData({
        btnTitle2:'评分最高'
      })
    }else if(this.data.orderBy == 'distance'){
      this.setData({
        btnTitle2:'离我最近'
      })
    }else if(this.data.orderBy == 'commCount'){
      this.setData({
        btnTitle2:'评价最多'
      })
    }else if(this.data.orderBy == 'authentication'){
      this.setData({
        btnTitle2:'认证商家优先'
      })
    }else if(this.data.orderBy == 'online_order'){
      this.setData({
        btnTitle2:'支持在线预约优先'
      })
    }
    this.getCompList();
  },
  getCompList: function (){
    console.log(this.data.code)
    var that = this;
    if(this.data.keyword == ''){
      wx.request({
        url: 'http://weixin.ichejk.cn/WeChat/comp/getCompList',
        data: {
          areaCode:this.data.code,
          longitude:this.data.longitude,
          latitude:this.data.latitude,
          comp_type:this.data.compType,
          orderBy:this.data.orderBy,
          currentPage:this.data.currentPage,
          functionType:"2",
        },
        header: {
            'content-type': 'application/json'
        },
        success: function (res){
          console.log(res)
          if(res.statusCode == 200){
            var data = res.data.recordsList;
            if(data.length>0){
              for(var i=0;i<data.length;i++){
                if(data[i].comp_photo == ''){
                  data[i].comp_photo = '../../images/photo-4.0@2x.png';
                }
                if(data[i].distance < 1000){
                  data[i].distance = '<1K';
                }else if(data[i].distance < 50000){
                  data[i].distance = Math.round(data[i].distance/1000)+'K';
                }else if(data[i].distance > 50000){
                  data[i].distance = '>50K';
                }
                that.data.compList.push(data[i]);
                that.setData({
                  compList:that.data.compList
                }) 
              }
            }
            // 判断是否加载完
            if(data.length<10){
              that.setData({
                complete:true,
                loading:true
              })
            }else{ 
              that.data.currentPage++;
            } 
          }
        }
      })
    }else{
      wx.request({
        url: 'http://weixin.ichejk.cn/WeChat/comp/getCompByWord',
        data: {
          longitude:this.data.longitude,
          latitude:this.data.latitude,
          comp_type:this.data.compType,
          orderBy:this.data.orderBy,
          functionType:"2",
          keyword:this.data.keyword,
          currentPage:this.data.currentPage
        },
        header: {
            'content-type': 'application/json'
        },
        success: function (res){
          console.log(res)
          if(res.statusCode == 200){
            var data = res.data.recordsList;
            if(data.length>0){
              for(var i=0;i<data.length;i++){
                if(data[i].comp_photo == ''){
                  data[i].comp_photo = '../../images/photo-4.0@2x.png';
                }
                if(data[i].distance < 1000){
                  data[i].distance = '<1K';
                }else if(data[i].distance < 50000){
                  data[i].distance = Math.round(data[i].distance/1000)+'K';
                }else if(data[i].distance > 50000){
                  data[i].distance = '>50K';
                }
                that.data.compList.push(data[i]);
                that.setData({
                  compList:that.data.compList,
                }) 
              }
            }
            // 判断是否加载完
            if(data.length<10){
              that.setData({
                complete:true,
                loading:true
              })
            }else{ 
              that.data.currentPage++;
            } 
          }
        }
      })
    }
  }
})