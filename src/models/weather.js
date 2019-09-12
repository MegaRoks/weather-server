class Weather {
    constructor(dataAboutWeather) {
        this.cityName = dataAboutWeather.name;
        this.windSpeed = dataAboutWeather.wind.speed;
        this.windDirection = dataAboutWeather.wind.deg;
        this.pressure = dataAboutWeather.main.pressure;
        this.humidity = dataAboutWeather.main.humidity;
        this.all = dataAboutWeather.clouds.all;
        this.main = dataAboutWeather.weather[0].main;
        this.description = dataAboutWeather.weather[0].description;
        this.icon = dataAboutWeather.weather[0].icon;
        this.temp = dataAboutWeather.main.temp;
    }

    getData() {
        const buyerFields = {
            cityName: this.cityName,
            weather: {
                main: this.main,
                temp: this.temp,
                description: this.description,
                icon: this.icon,
            },
            wind: {
                windSpeed: this.windSpeed,
                windDirection: this.windDirection,
            },
            pressure: this.pressure,
            humidity: this.humidity,
            clouds: this.clouds,
        };
        return buyerFields;
    }
}

export default Weather;
