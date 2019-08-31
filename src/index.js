// 1: NPM dependencies and imports.
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import apiRoutes from './routes/routes';
import cors from 'cors';

// 2: Initializations.
const router = express();
const port = process.env.PORT;

// 3: Parse as urlencoded and json.
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// 4: Hook up the HTTP logger.
router.use(logger('dev'));

// 5: Home route.
router.get('/', (req, res) => {
    return res.status(200).json({
        message: `This is my API for weather`,
    });
});

// 6: Bundle API routes.
router.use('/api', apiRoutes);

// 7: Start the server.
router.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default router;
