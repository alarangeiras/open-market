import assert from 'assert';
import exp from 'constants';
import { Pool } from 'mysql2/promise';
import { createMock } from 'ts-auto-mock';
import { LoggerPort } from '../../../data/ports/logger-port';
import { MarketRepository } from '../../../data/ports/market-repository';
import { AppError } from '../../../domain/errors/app-error';
import { AddNewMarket, UpdateMarket } from '../../../domain/usecases';
import { MarketMySQLRepository } from './market-mysql-repository';

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

  test('add new market with error', async () => {
    pool.execute = jest.fn().mockRejectedValue(null);
    marketRepository = new MarketMySQLRepository(pool, logger);
    const request: AddNewMarket.Request = {};
    try {
      await marketRepository.add(request);
    } catch (error) {
      expect(error.name).toBe(AppError.name);
      return;
    }
    assert.fail('should throw a error');
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

  test('update a market with error', async () => {
    pool.execute = jest.fn().mockRejectedValue(null);
    marketRepository = new MarketMySQLRepository(pool, logger);
    const request: UpdateMarket.Request = {};
    const id = 1;
    try {
      await marketRepository.update(request, id);
    } catch (error) {
      expect(error.name).toBe(AppError.name);
      return;
    }
    assert.fail('should not throw any error');
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

  test('delete a market with error', async () => {
    pool.execute = jest.fn().mockRejectedValue(null);
    marketRepository = new MarketMySQLRepository(pool, logger);
    const id = 1;
    try {
      await marketRepository.remove(id);
    } catch (error) {
      expect(error.name).toBe(AppError.name);
      return;
    }
    assert.fail('should not throw any error');
  });

  test('search markets', async () => {
    pool.query = jest
      .fn()
      .mockResolvedValue([[['value1', 'value2', 'value3', 'value4']], {}]);

    marketRepository = new MarketMySQLRepository(pool, logger);
    try {
      const result = await marketRepository.search({});
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).not.toBeNull();
    } catch (error) {
      assert.fail('should not throw any error');
    }
  });

  test('search markets with error', async () => {
    pool.query = jest.fn().mockRejectedValue(new Error());

    marketRepository = new MarketMySQLRepository(pool, logger);
    try {
      await marketRepository.search({});
    } catch (error) {
      expect(error.name).toBe(AppError.name);
      return;
    }
    assert.fail('should not throw any error');
  });

  test('add to list', async () => {
    marketRepository = new MarketMySQLRepository(pool, logger);
    let whereClause = '';
    const valuesList: string[] = [];
    try {
      whereClause = (<MarketMySQLRepository>marketRepository).addToList(
        'test',
        'test value',
        valuesList,
        whereClause
      );
      expect(whereClause.trim().toLowerCase().startsWith('where')).toBeTruthy();
      expect(valuesList.length).toBe(1);
      whereClause = (<MarketMySQLRepository>marketRepository).addToList(
        'test1',
        'test value1',
        valuesList,
        whereClause
      );
      expect(whereClause.trim().toLowerCase().split('=').length).toBe(3);
      expect(valuesList.length).toBe(2);
    } catch (error) {
      assert.fail(error);
    }
  });
});
