import {
  AddNewMarket,
  SearchMarkets,
  UpdateMarket,
} from '../../domain/usecases';

export interface MarketRepository {
  search(market: SearchMarkets.Request): Promise<SearchMarkets.Response[]>;
  add(market: AddNewMarket.Request): Promise<void>;
  update(market: UpdateMarket.Request, id: number): Promise<void>;
  remove(id: number): Promise<void>;
}
