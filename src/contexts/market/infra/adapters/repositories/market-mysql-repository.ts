import { Pool, RowDataPacket } from 'mysql2/promise';
import { LoggerPort } from '../../../data/ports/logger-port';
import { MarketRepository } from '../../../data/ports/market-repository';
import { DatabaseError } from '../../../domain/errors/database-error';
import {
  AddNewMarket,
  SearchMarkets,
  UpdateMarket,
} from '../../../domain/usecases';

export class MarketMySQLRepository implements MarketRepository {
  private baseQuery = 'SELECT name, neighborhood, district, region from market';

  constructor(private _connection: Pool, private _logger: LoggerPort) {}

  async search(
    market: SearchMarkets.Request
  ): Promise<SearchMarkets.Response[]> {
    const values: string[] = [];
    let whereClause = '';
    whereClause = this.addToList('name', market.name, values, whereClause);
    whereClause = this.addToList(
      'neighborhood',
      market.neighborhood,
      values,
      whereClause
    );
    whereClause = this.addToList(
      'district',
      market.district,
      values,
      whereClause
    );
    whereClause = this.addToList('region', market.region, values, whereClause);

    try {
      const [results, _]: [RowDataPacket[], any] = await this._connection.query(
        {
          sql: `${this.baseQuery}${whereClause}`,
          rowsAsArray: true,
        },
        values
      );
      return results.map((result) => {
        return {
          name: result[0],
          neighborhood: result[1],
          district: result[2],
          region: result[3],
        };
      }) as SearchMarkets.Response[];
    } catch (error) {
      this._logger.error(error);
      throw new DatabaseError();
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this._connection.execute('DELETE FROM market where id = ?', [id]);
    } catch (error) {
      this._logger.error(error);
      throw new DatabaseError();
    }
  }

  async update(market: UpdateMarket.Request, id: number): Promise<void> {
    try {
      await this._connection.execute(
        'UPDATE market set name = ?, neighborhood = ?, district = ?, region = ? where id = ?',
        [market.name, market.neighborhood, market.district, market.region, id]
      );
    } catch (error) {
      this._logger.error(error);
      throw new DatabaseError();
    }
  }

  async add(market: AddNewMarket.Request): Promise<void> {
    try {
      await this._connection.execute(
        'INSERT INTO market (name, neighborhood, district, region) values (?,?,?,?)',
        [market.name, market.neighborhood, market.district, market.region]
      );
    } catch (error) {
      this._logger.error(error);
      throw new DatabaseError();
    }
  }

  addToList(
    fieldName: string,
    value: string | null,
    list: string[],
    whereClause: string
  ): string {
    if (value) {
      list.push(value);
      const condition = `${fieldName} = ?`;
      if (whereClause.length === 0) {
        whereClause += ` WHERE ${condition}`;
      } else {
        whereClause += ` AND ${condition}`;
      }
    }
    return whereClause;
  }
}
