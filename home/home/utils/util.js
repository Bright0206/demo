const formatTime = date => {
  var time = new Date()
  var year = time.getFullYear();
  var months = time.getMonth() + 1;
  var month = months < 10 ? "0" + months : months;
  var date = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
  var day = time.getDay();
  var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  var now_time = [year, month, date, hour, minutes];
  return now_time;
  //return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
