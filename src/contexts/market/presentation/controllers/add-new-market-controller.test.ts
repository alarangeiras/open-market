import { createMock } from 'ts-auto-mock';
import { Validation } from '../../data/ports/validation-port';
import { AddNewMarket } from '../../domain/usecases';
import { Http } from '../protocols/http-controller';
import { AddNewMarketController } from './add-new-market-controller';

describe(__filename, () => {
  test('should handle request', async () => {
    const useCaseMock = createMock<AddNewMarket.UseCase>();
    const validationPortMock = createMock<Validation.Port>();
    const controller: Http.Controller = new AddNewMarketController(
      useCaseMock,
      validationPortMock
    );

    const request: Http.Request<AddNewMarket.Request> = {
      body: {
        name: 'marketMockName',
        neighborhood: 'marketMockNeighbor',
        district: 'marketMockDistrict',
        region: 'marketMockRegion',
      },
    };
    try {
      const response = await controller.handle(request);
      expect(response.status).toBe(Http.StatusCode.Created);
    } catch (error) {
      fail();
    }
  });
});
