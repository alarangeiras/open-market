import { createMock } from 'ts-auto-mock';
import { MarketRepository } from '../../data/ports/market-repository';
import { MarketService } from '../../data/services/market-service';
import { RemoveMarket } from './remove-market';

describe(__filename, () => {
  test('remove market', async () => {
    const marketRepository = createMock<MarketRepository>();
    const removeSpy = jest.fn();
    marketRepository.remove = removeSpy;
    const useCase: RemoveMarket.UseCase = new MarketService(marketRepository);
    const id = 1;
    await useCase.removeMarket(1);
    expect(removeSpy).toBeCalled();
  });
});
