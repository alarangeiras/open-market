import { MarketService } from '../../../data/services/market-service';
import { SearchMarkets } from '../../../domain/usecases';
import { makeMarketMySQLRepository } from '../repositories/make-market-mysql-repository';

export const makeSearchMarkets = (): SearchMarkets.UseCase => {
  return new MarketService(makeMarketMySQLRepository());
};
