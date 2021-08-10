import { MarketRepository } from '../../../data/ports/market-repository';
import { MarketMySQLRepository } from '../../../infra/adapters/repositories/market-mysql-repository';
import { getConnectionPool } from '../../libraries/mysql';
import { makePinoLoggerAdapter } from '../lib/make-pino-logger-adapter';

export const makeMarketMySQLRepository = (): MarketRepository => {
  return new MarketMySQLRepository(
    getConnectionPool(),
    makePinoLoggerAdapter()
  );
};
