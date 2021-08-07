import { Market } from '../model/market'

export type SearchMarketsRequest = Partial<Omit<Market, 'id'>>

export interface SearchMarkets {
  searchMarkets(market: SearchMarketsRequest): Promise<void>
}
