import { MarketRepository } from '../../../data/ports/market-repository'
import { MarketMySQLRepository } from '../../../infra/adapters/repositories/market-mysql-repository'
import { getConnectionPool } from '../../libraries/mysql'

export const makeMarketMySQLRepository = (): MarketRepository => {
  return new MarketMySQLRepository(getConnectionPool())
}
