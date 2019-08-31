import express from 'express';
import request from 'request';

import Weather from '../models/weather';

const router = express.Router();

const key = 'fa205c857a7b86f5273616a0d6f4a1aa';
const domin = 'api.openweathermap.org/';

// handles url http://localhost:8081/api/weather/get-current-weather
router.post('/get-current-weather', async (req, res) => {
    try {
        const { city, lang = 'en', units = 'metric', lat, lon } = req.body;
        const url = `https://${domin}/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${key}`;
        const dataAboutWeather = await getDataAboutWeather(url);
        if (dataAboutWeather.cod !== 200) {
            throw new Error(dataAboutWeather.message);
        };
        const weather = new Weather(dataAboutWeather);
        const weatherNow = weather.getData();
        return res.status(200).json({
            weatherNow,
        });
    } catch (err) {
        return res.status(500).json({
            err: err.message,
        });
    };
});

export default router;

async function getDataAboutWeather(url) {
    return await new Promise(resolve => {
        request(url, (err, res, body) => {
            if (err) {
                throw new Error(err);
            };
            const info = JSON.parse(body);
            resolve(info);
        });
    });
};
