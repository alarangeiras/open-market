import { Market } from '../model/market'

export type UpdateMarketRequest = Partial<Omit<Market, 'id'>>

export interface UpdateMarket {
  updateMarket(market: UpdateMarketRequest): Promise<void>
}
