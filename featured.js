$(document).ready(function () {
    $(".sidenav").sidenav();

    var queryURL = "https://icanhazdadjoke.com/search?term=bar&limit=30"
$.ajax({
    url: queryURL,
    dataType: 'json',
    method: "GET"
  }).then(function(response) {
      console.log(response);
      i = Math.floor(Math.random() * 11); 
          $("#joke").append("<p>"+response.results[i].joke+"</p>") 
  })
  
});

