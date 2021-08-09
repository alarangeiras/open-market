import { MarketMySQLRepository } from './market-mysql-repository';
import { Pool } from 'mysql2/promise';
import { createMock } from 'ts-auto-mock';
import { MarketRepository } from '../../../data/ports/market-repository';
import { AddNewMarket, UpdateMarket } from '../../../domain/usecases';
import assert from 'assert';

describe(__filename, () => {
  let pool: Pool;
  let marketRepository: MarketRepository;
  beforeEach(() => {
    pool = createMock<Pool>();
    const executeSpy = jest.fn();
    pool.execute = executeSpy;
  });

  test('add new market', async () => {
    marketRepository = new MarketMySQLRepository(pool);
    const request: AddNewMarket.Request = {};
    try {
      await marketRepository.add(request);
    } catch (error) {
      assert.fail('should not throw any error');
    }
  });

  test('update a market', async () => {
    marketRepository = new MarketMySQLRepository(pool);
    const request: UpdateMarket.Request = {};
    const id = 1;
    try {
      await marketRepository.update(request, id);
    } catch (error) {
      assert.fail('should not throw any error');
    }
  });

  test('delete a market', async () => {
    marketRepository = new MarketMySQLRepository(pool);
    const id = 1;
    try {
      await marketRepository.remove(id);
    } catch (error) {
      assert.fail('should not throw any error');
    }
  });
});
