import { Market } from '../../domain/model/market';
import { AddNewMarket, UpdateMarket } from '../../domain/usecases';
import { MarketRepository } from '../ports/market-repository';

export class MarketService implements AddNewMarket.UseCase, UpdateMarket.UseCase {
  
  constructor(private readonly _marketRepository: MarketRepository) {}
  
  async updateMarket(market: UpdateMarket.Request, id: number): Promise<void> {
    await this._marketRepository.update(market, id);
  }

  async addNewMarket(market: AddNewMarket.Request): Promise<void> {
    await this._marketRepository.add(market);
  }
}
