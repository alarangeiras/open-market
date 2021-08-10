import { SearchMarketsController } from '../../presentation/controllers/search-markets-controller';
import { Http } from '../../presentation/protocols/http-controller';
import { makePinoLoggerAdapter } from '../adapters/lib/make-pino-logger-adapter';
import { makeValidationAdapter } from '../adapters/lib/make-validation-adapter';
import { makeSearchMarkets } from '../adapters/usecases/make-search-markets';

export const makeSearchMarketsController = (): Http.Controller => {
  return new SearchMarketsController(
    makeSearchMarkets(),
    makeValidationAdapter()
  );
};
