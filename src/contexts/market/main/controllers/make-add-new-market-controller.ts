import { AddNewMarketController } from '../../presentation/controllers/add-new-market-controller';
import { Http } from '../../presentation/protocols/http-controller';
import { makePinoLoggerAdapter } from '../adapters/lib/make-pino-logger-adapter';
import { makeValidationAdapter } from '../adapters/lib/make-validation-adapter';
import { makeAddNewMarket } from '../adapters/usecases/make-add-new-maket';

export function makeAddNewMarketController(): Http.Controller {
  return new AddNewMarketController(
    makeAddNewMarket(),
    makeValidationAdapter(makePinoLoggerAdapter())
  );
}
