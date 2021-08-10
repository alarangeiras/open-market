import { Market } from '../model/market';
import { searchMarketsRequestSchema } from '../validation/search-markets';

export namespace SearchMarkets {
  export type Request = Partial<Omit<Market, 'id'>>;
  export type Response = Partial<Omit<Market, 'id'>>;
  export interface UseCase {
    searchMarkets(market: Request): Promise<Response[]>;
  }

  export const Schema = searchMarketsRequestSchema;
}
