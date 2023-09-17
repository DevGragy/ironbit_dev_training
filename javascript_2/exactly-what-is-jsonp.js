function requestJSONP(url) {
    // create script with passed in URL
    var script = document.createElement('script');
    script.src = url;

    // after the script is loaded (and executed), remove it
    script.onload = function () {
        this.remove();
    };

    // insert script tag into the DOM (append to <head>)
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, null);
}

function processWeather(data) {
    // do something with weather data

    // for example, print out the temperature
    var channel = data.query.results.channel;
    document.querySelector('.weather').innerHTML =
        'The temperature in ' +
        channel.location.city + ', ' +
        channel.location.country + ' is ' +
        channel.item.condition.temp + '&deg; ' +
        channel.units.temperature;
}

// get the weather data for Aldeburgh, GB via JSONP
var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid=%2210543%22&format=json&callback=processWeather';

requestJSONP(url);