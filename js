$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var userWeather = "https://weather.millergeek.xyz/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=3a68070e91c967b704ef1f563230ef9e";
      
      $.getJSON(userWeather, function(json) {
        $("#icon").html("<img src='http://openweathermap.org/img/w/" +  json.weather[0].icon + ".png'</img>");
        $("#weather").html(json.weather[0].main + "<br>" + json.weather[0].description);
        $("#tempC").html(Math.floor(json.main.temp - 273.15) + "<sup>o</sup><button type='button' class='btn btn-link'>C</button>");
        $("#tempF").html(Math.floor((json.main.temp * (9/5)) - 459.67) + "<sup>o</sup><button type='button' class='btn btn-link'>F</button>");
      });
      $("#tempC, #tempF").click(function() {
        $("#tempC, #tempF").toggle();
      });
    });
  }
});
