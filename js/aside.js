(function() {
  var aside = document.getElementsByClassName('aside')[0];
  var widnowWidth = window.width()
  var windowHeight = window.scrollHeight()

  window.onresize = function() {
    widnowWidth = window.width();
    windowHeight = window.scrollHeight();
  }

  window.onscroll = function() {
    if(widnowWidth < 960 || aside.offsetHeight === windowHeight) {
      aside.className = 'aside';
      return
    }
    
    var targetPosition = {
      top: window.pageYOffset + aside.getBoundingClientRect().top,
      bottom: window.pageYOffset + aside.getBoundingClientRect().bottom
    };

    var windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    if(Math.round(targetPosition.bottom) <= Math.round(windowPosition.bottom)) {
      if(targetPosition.top < 0) {
        aside.className = 'aside'
        return
      }
      aside.className = 'aside aside--fixed'
    }
  }
})();