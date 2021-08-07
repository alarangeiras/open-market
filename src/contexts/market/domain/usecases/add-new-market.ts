import { Market } from '../model/market'

export type AddNewMarketRequest = Partial<Omit<Market, 'id'>>

export interface AddNewMarket {
  addNewMarket(market: AddNewMarketRequest): Promise<void>
}
