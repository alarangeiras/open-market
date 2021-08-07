import { Market } from '../model/market';
import { addNewMarketRequestSchema } from '../validation/add-new-market';
export namespace AddNewMarket {
  export type Request = Partial<Omit<Market, 'id'>>;
  export interface UseCase {
    addNewMarket(market: Request): Promise<void>;
  }

  export const Schema = addNewMarketRequestSchema;
}
