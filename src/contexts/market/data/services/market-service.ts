import {
  AddNewMarket,
  RemoveMarket,
  UpdateMarket,
} from '../../domain/usecases';
import { MarketRepository } from '../ports/market-repository';

export class MarketService
  implements AddNewMarket.UseCase, UpdateMarket.UseCase, RemoveMarket.UseCase
{
  constructor(private readonly _marketRepository: MarketRepository) {}

  async removeMarket(id: number): Promise<void> {
    await this._marketRepository.remove(id);
  }

  async updateMarket(market: UpdateMarket.Request, id: number): Promise<void> {
    await this._marketRepository.update(market, id);
  }

  async addNewMarket(market: AddNewMarket.Request): Promise<void> {
    await this._marketRepository.add(market);
  }
}
