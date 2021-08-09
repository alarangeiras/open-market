import { Router } from 'express';
import { makeExpressHandlerAdapter } from '../adapters/lib/make-express-handler-adapter';
import { makePinoLoggerAdapter } from '../adapters/lib/make-pino-logger-adapter';
import { makeAddNewMarketController, makeUpdateMarketController } from '../controllers';

const logger = makePinoLoggerAdapter();

export function makeMarketRouter(): Router {
  const router = Router();
  router.post(
    '/markets',
    makeExpressHandlerAdapter(makeAddNewMarketController(), logger)
  );
  router.put(
    '/markets/:id',
    makeExpressHandlerAdapter(makeUpdateMarketController(), logger)
  );
  return router;
}
