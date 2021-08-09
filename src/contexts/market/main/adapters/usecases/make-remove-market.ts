import { MarketService } from '../../../data/services/market-service';
import { RemoveMarket } from '../../../domain/usecases';
import { makeMarketMySQLRepository } from '../repositories/make-market-mysql-repository';

export const makeRemoveMarketUseCase = (): RemoveMarket.UseCase => {
  return new MarketService(makeMarketMySQLRepository());
};
