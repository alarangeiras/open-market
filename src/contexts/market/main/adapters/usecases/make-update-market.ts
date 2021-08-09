import { MarketService } from "../../../data/services/market-service"
import { UpdateMarket } from "../../../domain/usecases";
import { makeMarketMySQLRepository } from "../repositories/make-market-mysql-repository";

export const makeUpdateMarketUseCase = ():UpdateMarket.UseCase => {
  return new MarketService(makeMarketMySQLRepository());
}