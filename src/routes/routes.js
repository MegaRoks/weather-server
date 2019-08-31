import express from 'express';
import apiWeather from '../controllers/weather';

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        message: `This is my first version of the weather API`,
    });
});

router.use('/weather', apiWeather);

export default router;
