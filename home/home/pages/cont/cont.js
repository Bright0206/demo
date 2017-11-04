
var windowWidth = '';
wx.getSystemInfo({
  success: function (res) {
  windowWidth = res.windowWidth;
  }
})
var apps = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    top1_1: '2', top1_2: '40', top2: '5', top3_1: '3', top3_2:'20',
    heartrate: '65', breathrate: '18', canvasmun:'50',
    sleep1: '20', sleep2: '30', sleep3: '30', sleep4:'20',
    slp1_1: '2', slp1_2: '40', slp2_1: '2', slp2_2: '5', slp3_1: '3', slp3_2: '20',
    sleepitem:[
      { time:'10',type:'1' },  { time: '10', type: '2' },
      { time: '12', type: '2' },  { time: '20', type: '3' },
      { time: '45', type: '1' },  { time: '50', type: '4' },
      { time: '30', type: '5' }, { time: '30', type: '3' },
      { time: '30', type: '3' }, { time: '50', type: '1' }, { time: '10', type: '2' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    // 页面渲染完成 
    var md5 = require('../../utils/md5.js');
    var padd = md5.hexMD5('cp51301171nalg');
    console.log(padd)
    var i = this.data.canvasmun;
    this.canvas('canvasArc', 105, 88, 60, 10,'#0592FF')
    this.canvas('canvasArc1', 30, 27, 20, 3,'#0592FF')
    this.canvas('canvasArc2', 30, 27, 30, 3, '#00CBBC')
    this.canvas('canvasArc3', 30, 27, 30, 3, '#BCDF9D')
    this.canvas('canvasArc4', 30, 27, 20, 3, '#FB8E95')
    
    var Charts = require('../../dist/wxcharts.js');
    new Charts({
      canvasId: 'canvas2',
      type: 'line',
      categories: ['', '', '', '', '', '', '', '', '', '', '', ''],
      series: [{
        name: '心率',
        data: [60, 70, 75, 60, 65, 60, 69, 66, 77, 65, 60, 70],
        color: '#0592FF',
      }],
      animation: true,
      dataPointShape: false,
      dataLabel: false,//是否在图表中显示数据内容值
      legend: false, //是否显示图表下方各类别的标识
      xAxis: { disableGrid: true },
      yAxis: {
        title: '',
        min: 0,
        max: 150,
        gridColor: '#ffffff'
      },
      width: windowWidth - 30,
      height: 150
    });
    new Charts({
      canvasId: 'canvas3',
      type: 'line',
      categories: ['', '', '', '', '', '', '', '', '', '', '', ''],
      series: [{
        name: '呼吸率',
        data: [19, 16, 17, 20, 16, 20, 19, 16, 17, 20, 16, 20],
        color: '#0592FF',
      }],
      animation: true,
      dataPointShape: false,
      dataLabel: false,//是否在图表中显示数据内容值
      legend: false, //是否显示图表下方各类别的标识
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '',
        min: 0,
        max: 40,
        interval: 10,
        gridColor: '#ffffff'
      },
      width: windowWidth,
      height: 150
    });
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
  canvas:function(name,w,r,i,b,color){
    const ctx = wx.createCanvasContext(name)
    // Draw coordinates
    ctx.arc(w, w, r, 0, 2 * Math.PI)
    ctx.setLineWidth(b);
    ctx.setStrokeStyle('#f8f8f8')
    ctx.setLineCap('round')
    ctx.stroke()
    ctx.beginPath()

    // Draw arc
    ctx.beginPath()
    ctx.setLineWidth(b);
    ctx.setStrokeStyle(color);
    ctx.setLineCap('round')
    ctx.arc(w, w, r, -Math.PI * 1 / 2, -0.5 * Math.PI + i * 0.02 * Math.PI)
    ctx.stroke()
    ctx.draw()
  },
})
