import { NoResultFoundError } from '../../domain/errors/no-result-found-error';
import {
  AddNewMarket,
  RemoveMarket,
  SearchMarkets,
  UpdateMarket,
} from '../../domain/usecases';
import { MarketRepository } from '../ports/market-repository';

export class MarketService
  implements
    AddNewMarket.UseCase,
    UpdateMarket.UseCase,
    RemoveMarket.UseCase,
    SearchMarkets.UseCase
{
  constructor(private readonly _marketRepository: MarketRepository) {}

  async searchMarkets(
    market: SearchMarkets.Request
  ): Promise<SearchMarkets.Response[]> {
    const result = await this._marketRepository.search(market);

    if (result.length == 0) {
      throw new NoResultFoundError();
    }

    return result;
  }

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
