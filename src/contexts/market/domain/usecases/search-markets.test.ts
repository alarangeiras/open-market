import { SearchMarkets } from '.';
import { MarketService } from '../../data/services/market-service';
import { MarketRepository } from '../../data/ports/market-repository';
import { createMock } from 'ts-auto-mock';
import assert from 'assert';
import { NoResultFoundError } from '../errors/no-result-found-error';
import { AppError } from '../errors/app-error';
describe(__filename, () => {
  let marketRepository: MarketRepository;

  beforeEach(() => {
    marketRepository = createMock<MarketRepository>();
  });

  test('execute search with results', async () => {
    const searchSpy = jest.fn().mockResolvedValue([
      {
        name: 'nameTest',
        district: 'districtTest',
        neighborhood: 'neighborhoodTest',
        region: 'regionTest',
      } as SearchMarkets.Response,
    ]);
    marketRepository.search = searchSpy;
    const useCase: SearchMarkets.UseCase = new MarketService(marketRepository);

    const request: SearchMarkets.Request = {
      name: 'nameTest',
    };

    try {
      const result = await useCase.searchMarkets(request);
      expect(result).not.toBeNull();
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      assert.fail();
    }
  });

  test('execute search without results', async () => {
    const searchSpy = jest.fn().mockResolvedValue([]);
    marketRepository.search = searchSpy;
    const useCase: SearchMarkets.UseCase = new MarketService(marketRepository);

    const request: SearchMarkets.Request = {
      name: 'nameTest',
    };

    try {
      await useCase.searchMarkets(request);
    } catch (error) {
      expect(error.name).toBe(AppError.name);
      return;
    }
    assert.fail();
  });
});
