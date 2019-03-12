import * as express from 'express';

import EmailRouter from './modules/email';

/*
 * Load up the App
 */
const app: express.Application = express();
app.enable('trust proxy');

/*
 * Register routing endpoints
 */
app.use('/email', EmailRouter);

module.exports = app;
