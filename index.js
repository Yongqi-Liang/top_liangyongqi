// index.js
$(document).ready(function () {
  var num = 0;
  var total = $("#tu li").length;

  function changeBackground() {
      $("#tu li").eq(num).addClass("show").siblings().removeClass("show");
      num = (num + 1) % total;
  }

  setInterval(changeBackground, 10000);
  changeBackground();
});


// IP 地址查询
document.addEventListener("DOMContentLoaded", function() {
  fetch('https://api.jisuapi.com/ip/location?appkey=c812e10685414c68')
    .then(response => response.json())
    .then(data => {
      if (data.status === 0) {
        const result = data.result;
        const locationInfo = `${result.country} ${result.area} ${result.type} ${result.ip}`;
        document.getElementById('location-info').textContent = locationInfo;
      } else {
        console.error('API 请求失败:', data.msg);
      }
    })
    .catch(error => console.error('请求错误:', error));
});