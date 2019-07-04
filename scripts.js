$(document).ready(function () {

    var apiCall = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=Imperial&appid=a5ae9c03c86ab5460eb6629be470eaee';

    $.getJSON(apiCall, weatherCallback);

    function weatherCallback(weatherData) {

        name = weatherData.main.temp;
    }
    $("#tempRow").html("It is currently " + name + " degrees fahrenheit");
    
});