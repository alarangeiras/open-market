import { AddNewMarket, UpdateMarket } from '../../domain/usecases';

export interface MarketRepository {
  add(market: AddNewMarket.Request): Promise<void>;
  update(market: UpdateMarket.Request, id: number): Promise<void>
}
