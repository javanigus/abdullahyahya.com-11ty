(function() {
  var form = document.getElementById('google-search');
  var input = document.getElementById('google-search-field');

  form.onsubmit = function(event) {
    if (!event) {
      event = window.event;
    } 
    event.returnValue = false;
    var searchQuery = input.value;
    window.location.href = 'https://www.google.com/search?q=' + searchQuery;
  }
})();