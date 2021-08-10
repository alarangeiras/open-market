import { Market } from '../model/market';
import { updateMarketRequestSchema } from '../validation/update-market';
export namespace UpdateMarket {
  export type Request = Partial<Omit<Market, 'id'>>;
  export interface UseCase {
    updateMarket(market: Request, id: number): Promise<void>;
  }

  export const Schema = updateMarketRequestSchema;
}
