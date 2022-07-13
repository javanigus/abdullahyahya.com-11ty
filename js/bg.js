(function () {
  var backgrounds = [
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg1.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg2.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg3.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg4.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg5.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg6.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg7.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg8.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg9.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg10.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg11.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg12.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg13.jpg", "position": "left top"},
    //{"image":"https://d3zntdne6n1qh.cloudfront.net/bg14.png", "position": "left top"},
    //{"image":"https://d3zntdne6n1qh.cloudfront.net/bg15.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg16.jpg", "position": "left top"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg17.jpg", "position": "left center"},
    {"image":"https://d3zntdne6n1qh.cloudfront.net/bg18.jpg", "position": "left top"}
  ];
  
  var queryString = window.location.search;
  // var urlParams = new URLSearchParams(queryString);
  // var bg = urlParams.get('bg')
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
	}

  var body = document.getElementsByTagName('body')[0];
  
  document.addEventListener('DOMContentLoaded', function(){
    var index = getRandomInt(backgrounds.length);
    body.style.backgroundImage = 'url(' + backgrounds[index].image + ')';
    body.style.backgroundPosition = backgrounds[index].position;
  });
}());