import { Market } from '../model/market';

export namespace UpdateMarket {
  export type Request = Partial<Omit<Market, 'id'>>;
  export interface UseCase {
    updateMarket(market: Request, id: number): Promise<void>;
  }
}
