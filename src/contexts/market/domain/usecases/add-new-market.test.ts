import { MarketService } from '../../data/services/market-service';
import { AddNewMarket } from './add-new-market';
import { createMock } from 'ts-auto-mock';
import { MarketRepository } from '../../data/ports/market-repository';

describe(__filename, () => {
  test('should persist open market', async () => {
    const marketRepositoryMock = createMock<MarketRepository>();
    const addNewMarketSpy = jest.fn().mockReturnValue(Promise.resolve());
    marketRepositoryMock.add = addNewMarketSpy;

    const useCase: AddNewMarket.UseCase = new MarketService(
      marketRepositoryMock
    );

    const marketMock: AddNewMarket.Request = {
      name: 'marketMockName',
      neighborhood: 'marketMockNeighbor',
      district: 'marketMockDistrict',
      region: 'marketMockRegion',
    };

    try {
      await useCase.addNewMarket(marketMock);
      expect(addNewMarketSpy).toBeCalled();
    } catch (error) {
      fail();
    }
  });
});
