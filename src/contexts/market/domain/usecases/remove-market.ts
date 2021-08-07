import { Id } from '../types/id'

export interface RemoveMarket {
  removeMarket(id: Id): Promise<void>
}
