import { UpdateMarketControlller } from '../../presentation/controllers/update-market-controller';
import { makePinoLoggerAdapter } from '../adapters/lib/make-pino-logger-adapter';
import { makeValidationAdapter } from '../adapters/lib/make-validation-adapter';
import { makeUpdateMarketUseCase } from '../adapters/usecases/make-update-market';

export const makeUpdateMarketController = () => {
  return new UpdateMarketControlller(
    makeUpdateMarketUseCase(),
    makeValidationAdapter()
  );
};
