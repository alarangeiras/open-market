import express from 'express';
import cors from 'cors';
import pinoMiddleware from 'express-pino-logger';
import { makeMarketRouter } from '../routes/make-market-routes';
import { makePinoLoggerAdapter } from '../adapters/lib/make-pino-logger-adapter';

const logger = makePinoLoggerAdapter();

const app = express();
const port = process.env.PORT || 3000;

app.use(pinoMiddleware());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', makeMarketRouter());

app.listen(port, () => logger.info(`the server is running on port ${port}`));
