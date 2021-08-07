import { Market } from '../../domain/model/market';

export interface MarketRepository {
  add(market: Market): Promise<void>;
}
