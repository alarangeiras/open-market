import { Pool } from 'mysql2/promise'
import { MarketRepository } from '../../../data/ports/market-repository'
import { Market } from '../../../domain/model/market'

export class MarketMySQLRepository implements MarketRepository {
  constructor(private _connection: Pool) {}

  async add(market: Market): Promise<void> {
    await this._connection.execute(
      'INSERT INTO market (name, neighbor, district, region) values (?,?,?,?)',
      [market.name, market.neighbor, market.district, market.region]
    )
  }
}
