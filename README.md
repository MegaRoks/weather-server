[![Build Status](https://travis-ci.org/MegaRoks/weather-server.svg?branch=master)](https://travis-ci.org/MegaRoks/weather-server)
[![Maintainability](https://api.codeclimate.com/v1/badges/4dfd5d57a3abc0cbf0d8/maintainability)](https://codeclimate.com/github/MegaRoks/weather-server/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4dfd5d57a3abc0cbf0d8/test_coverage)](https://codeclimate.com/github/MegaRoks/weather-server/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/MegaRoks/weather-server/badge.svg?branch=master)](https://coveralls.io/github/MegaRoks/weather-server?branch=master)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FMegaRoks%2Fweather-server.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FMegaRoks%2Fweather-server?ref=badge_shield)
# weather-server
The server works with weather services https://openweathermap.org

# links

1) Link to the postman https://www.getpostman.com/collections/100498d3405c3de5de8c;

2) Link for current weather https://weather-server-master.herokuapp.com/api/weather/get-current-weather;

# The server can also accept the following parameters

`units` the default is metric;
Temperature is available in Fahrenheit, Celsius and Kelvin units.

- For temperature in Fahrenheit use `units` = `imperial`;
- For temperature in Celsius use `units` = `metric`;
- Temperature in Kelvin is used by default, no need to use units parameter in API call;

`lat`, `lon` coordinates of the location of your interest;

`city` city name;

`lang` the default is English;
You can use lang parameter to get the output in your language. We support the following languages that you can use with the corresponded lang values: 

| language            |                  |
|---------------------|------------------|
| Arabic              | ar               |
| Bulgarian           | bg               |
| Catalan             | ca               |
| Czech               | cz               |
| German              | de               |
| Greek               | el               |
| English             | en               |
| Persian (Farsi)     | fa               |
| Finnish             | fi               |
| French              | fr               |
| Galician            | gl               |
| Croatian            | hr               |
| Hungarian           | hu               |
| Italian             | it               |
| Japanese            | ja               |
| Korean              | kr               |
| Latvian             | la               |
| Lithuanian          | lt               |
| Macedonian          | mk               |
| Dutch               | fr               |
| Polish              | pl               |
| Portuguese          | pt               |
| Romanian            | ro               |
| Russian             | ru               |
| Swedish             | se               |
| Slovak              | sk               |
| Slovenian           | sl               |
| Spanish             | sl               |
| Turkish             | tr               |
| Ukrainian           | ua               |
| Vietnamese          | vi               |
| Chinese Simplified  | zh_cn            |
| Chinese Traditional | zh_tw            |

NOTE: Translation is only applied for the "description" field.
