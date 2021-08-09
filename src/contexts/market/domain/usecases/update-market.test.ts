import { createMock } from 'ts-auto-mock';
import { MarketRepository } from '../../data/ports/market-repository';
import { MarketService } from '../../data/services/market-service';
import { UpdateMarket } from './update-market';

describe(__filename, () => {
  test('update a market with id', async () => {
    const marketRepository = createMock<MarketRepository>();
    const updateSpy = jest.fn();
    marketRepository.update = updateSpy;

    const useCase: UpdateMarket.UseCase = new MarketService(marketRepository);
    const market: UpdateMarket.Request = {
      name: 'teste',
      district: 'teste',
    };
    const id = 1;
    try {
      await useCase.updateMarket(market, 1);
      expect(updateSpy).toBeCalled();
    } catch (error) {
      fail();
    }
  });
});
