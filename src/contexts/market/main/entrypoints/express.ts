import cors from 'cors';
import express from 'express';
import pinoMiddleware from 'express-pino-logger';
import { join } from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { makePinoLoggerAdapter } from '../adapters/lib/make-pino-logger-adapter';
import { makeMarketRouter } from '../routes/make-market-routes';

const swaggerDocument = YAML.load(join(__dirname, 'swagger.yaml'));
const logger = makePinoLoggerAdapter();

const app = express();
const port = process.env.PORT || 3000;

app.use(pinoMiddleware());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', makeMarketRouter());

app.listen(port, () => logger.info(`the server is running on port ${port}`));
