import { AddNewMarket, AddNewMarketRequest } from '../../domain/usecases'
import { MarketRepository } from '../ports/market-repository';

export class MarketService implements AddNewMarket {

  constructor(private readonly _marketRepository: MarketRepository) {}

  async addNewMarket(market: AddNewMarketRequest): Promise<void> {}
}
