
var checkbox = function(){
 if ('geolocation' in navigator) {
     setInterval(getWeather, 100000);
     getWeather();
  }
  else
  {
    alert('msg');
    $('.error >p').text('Sorry u dont allow to get Weather');
  }
}


    var getWeather = function() {
    navigator.geolocation.getCurrentPosition(function (position) {
      loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
  } 
 
function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function (weather) {
      city = weather.city;
      temp = weather.temp + '&deg;';
      wcode = '<img class="weathericon" src="images/' + weather.code + '.svg">';
      wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
      humidity = weather.humidity + '%';
      $(".location").text(city);
      $(".temperature").html(temp);
      $(".climate_bg").html(wcode);
      $(".windspeed").html(wind);
      $(".humidity").text(humidity);
    },
	 error: function(error) {
   $(".error").html('<p>' + error + '</p>');
    }
  });
}

$(document).ready(function (checkbox) {
 
});




