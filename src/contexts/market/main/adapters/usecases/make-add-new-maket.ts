import { MarketService } from '../../../data/services/market-service';
import { AddNewMarket } from '../../../domain/usecases';
import { makeMarketMySQLRepository } from '../repositories/make-market-mysql-repository';

export const makeAddNewMarket = (): AddNewMarket.UseCase => {
  return new MarketService(makeMarketMySQLRepository());
};
