import { Pool } from 'mysql2/promise';
import { MarketRepository } from '../../../data/ports/market-repository';
import { AddNewMarket, UpdateMarket } from '../../../domain/usecases';

export class MarketMySQLRepository implements MarketRepository {
  constructor(private _connection: Pool) {}

  async update(market: UpdateMarket.Request, id: number): Promise<void> {
    await this._connection.execute(
      'UPDATE market set name = ?, neighbor = ?, district = ?, region = ? where id = ?',
      [market.name, market.neighbor, market.district, market.region, id]
    );
  }

  async add(market: AddNewMarket.Request): Promise<void> {
    await this._connection.execute(
      'INSERT INTO market (name, neighbor, district, region) values (?,?,?,?)',
      [market.name, market.neighbor, market.district, market.region]
    );
  }
}
