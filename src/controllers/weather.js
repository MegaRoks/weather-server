import express from 'express';
import request from 'request';

import Weather from '../models/weather';

const router = express.Router();

function getLocalityForWeather(city, lat, lon) {
    return city ? `q=${city}` : `lat=${lat}&lon=${lon}`;
}

function getDataAboutWeather(url) {
    return new Promise((resolve) => {
        request(url, (err, _res, body) => {
            if (err) {
                throw new Error(err);
            }
            const info = JSON.parse(body);
            resolve(info);
        });
    });
}

// handles url http://localhost:8081/api/weather/get-current-weather
router.post('/get-current-weather', async (req, res) => {
    try {
        const key = 'fa205c857a7b86f5273616a0d6f4a1aa';
        const {
            city, lang = 'en', units = 'metric', lat, lon,
        } = req.body;
        const locality = getLocalityForWeather(city, lat, lon);
        const url = `https://api.openweathermap.org//data/2.5/weather?${locality}&units=${units}&lang=${lang}&appid=${key}`;
        const dataAboutWeather = await getDataAboutWeather(url);
        if (dataAboutWeather.cod !== 200) {
            throw new Error(dataAboutWeather.message);
        }
        const weather = new Weather(dataAboutWeather);
        const weatherNow = weather.getData();
        return res.status(200).json({
            weatherNow,
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message,
        });
    }
});

export { getLocalityForWeather, getDataAboutWeather };

export default router;
