import { MarketMySQLRepository } from './market-mysql-repository';
import { Pool } from 'mysql2/promise';
import { createMock } from 'ts-auto-mock';
import { MarketRepository } from '../../../data/ports/market-repository';
import { AddNewMarket, UpdateMarket } from '../../../domain/usecases';
import assert from 'assert';
import { LoggerPort } from '../../../data/ports/logger-port';

describe(__filename, () => {
  let pool: Pool;
  let marketRepository: MarketRepository;
  let logger: LoggerPort;
  beforeEach(() => {
    pool = createMock<Pool>();
    const executeSpy = jest.fn();
    pool.execute = executeSpy;
    logger = createMock<LoggerPort>();
  });

  test('add new market', async () => {
    marketRepository = new MarketMySQLRepository(pool, logger);
    const request: AddNewMarket.Request = {};
    try {
      await marketRepository.add(request);
    } catch (error) {
      assert.fail('should not throw any error');
    }
  });

  test('update a market', async () => {
    marketRepository = new MarketMySQLRepository(pool, logger);
    const request: UpdateMarket.Request = {};
    const id = 1;
    try {
      await marketRepository.update(request, id);
    } catch (error) {
      assert.fail('should not throw any error');
    }
  });

  test('delete a market', async () => {
    marketRepository = new MarketMySQLRepository(pool, logger);
    const id = 1;
    try {
      await marketRepository.remove(id);
    } catch (error) {
      assert.fail('should not throw any error');
    }
  });
});
