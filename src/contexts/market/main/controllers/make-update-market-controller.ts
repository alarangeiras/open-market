import { UpdateMarketControlller } from '../../presentation/controllers/update-market-controller';
import { makeMarketMySQLRepository } from '../adapters/repositories/make-market-mysql-repository';
import { makeUpdateMarketUseCase } from '../adapters/usecases/make-update-market';

export const makeUpdateMarketController = () => {
  return new UpdateMarketControlller(makeUpdateMarketUseCase());
};
