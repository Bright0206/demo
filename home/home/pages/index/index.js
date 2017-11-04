//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    id:'1',
    img1: '/image/down.png', img2: '/image/close.png',
    img3:'/image/date.png',
    bed:'',
    names:'',
    date:'2017-10-12',
    tips:'请选择医院',
    tips1:'床位号信息输入不匹配，请重新输入！',
    tips2: '患者姓名信息输入不匹配，请重新输入！',
    tips3: '患者该天无健康检测报告！',
    index:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let that = this;
    var md5 = require('../../utils/md5.js');
    var Api = require('../../utils/util.js');
    var time = Api.formatTime();
    var str = '';
    for(var i=0; i<time.length;i++){
      str += time[i];
    }
    var timedata = 'cp' + str.slice(2, 10) +'nalg';
    var padd = 'GLAN'+md5.hexMD5(timedata);
    wx.request({
      url: 'http://tb.pcapi.onethird.com.cn/pc/clientInfo/list',
      data: {
        clientCode: "",
        userCode:""
      },
      method: "POST", 
      header: {
        'content-type': 'application/json',// 默认值
        'userToken': padd
      },
      success: function (res) {
        let {data:datas} = res;
        if (datas.returnCode == 0){
          var list = datas.messsageBody; 
          that.setData({
            arrays:list,
          })
        }
      }
    })
  },
  //选择医院
  bindPickerChange: function (e) {
    let that = this;
    // console.log('picker发送选择改变，携带值为', e)
    that.setData({
      index: e.detail.value,
      clientId: that.data.arrays[e.detail.value].clientId
    })
    console.log(that.data.clientId)
  },



  bedChange: function (e) {
    this.data.bed = e.detail.value
  },
  nameChange: function (e) {
    this.data.names = e.detail.value
  },
  //选择日期
  bindDateChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  //情况输入框
  close:function(){
    console.log(123);
  },
  close1: function () {
    console.log(1234);
  },
  primary:function(){
    var clientId = this.data.clientId,  
      bed= this.data.bed,
      names=this.data.names,
      time = this.data.date;
      if (clientId ==undefined) {
        wx.showModal({
          content: "请输入机构", confirmText: "确定", cancelText: "取消"
        })
      }
    if(bed == ''){
      wx.showModal({
        content: "请输入床位",  confirmText: "确定",  cancelText: "取消"
      })
    }
    if (names == '') {
      wx.showModal({
        content: "请输入姓名",  confirmText: "确定", cancelText: "取消"
      })
    }
    if (time == '') {
      wx.showModal({
        content: "请选择时间", confirmText: "确定", cancelText: "取消"
      })
    }
   /* wx.navigateTo({
      url: "/pages/cont/cont?data"
    })*/
  },
  dates:function(str){
  //获取当前时间
  var time = new Date()
  var year = time.getFullYear();
    var months = time.getMonth() + 1;
    var month = months < 10 ? "0" + months : months;
    var date = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    var day = time.getDay();
    var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    var now_time = year + '-' + month + '-' + date + hour + minutes;
    console.log(now_time)
  return now_time;
  }
})
