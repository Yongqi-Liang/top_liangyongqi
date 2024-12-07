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
fetch('http://ip-api.com/json/')
  .then(response => response.json())
  .then(data => {
    const locationInfo = `${data.country} ${data.regionName} ${data.city} ${data.query}`;
    document.getElementById('location-info').textContent = locationInfo;
  })
  .catch(error => console.error('请求错误:', error));
