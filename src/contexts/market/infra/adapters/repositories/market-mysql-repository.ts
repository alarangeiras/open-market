import { MarketRepository } from '../../../data/ports/market-repository'
import { Market } from '../../../domain/model/market'

import { Connection } from 'mysql2/promise'

export class MarketMySQLRepository implements MarketRepository {

  constructor(private _connection: Connection) {}

  async add(market: Market): Promise<void> {
    this._connection.execute()
  }
}
