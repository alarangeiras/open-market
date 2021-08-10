import { createMock } from 'ts-auto-mock';
import { Validation } from '../../data/ports/validation-port';
import { UpdateMarket } from '../../domain/usecases';
import { Http } from '../protocols/http-controller';
import { UpdateMarketControlller } from './update-market-controller';

describe(__filename, () => {
  test('controller must update market with the id', async () => {
    const useCase = createMock<UpdateMarket.UseCase>();
    const validator = createMock<Validation.Port>();
    const updateSpy = jest.fn();
    useCase.updateMarket = updateSpy;
    const controller: Http.Controller = new UpdateMarketControlller(
      useCase,
      validator
    );
    const request: Http.Request<UpdateMarket.Request> = {
      params: {
        id: '1',
      },
      body: {
        name: 'teste',
        neighborhood: 'teste',
      },
    };
    try {
      await controller.handle(request);
      expect(updateSpy).toBeCalled();
    } catch (error) {
      fail();
    }
  });

  test('controller must throw error when id is not a number', async () => {
    const useCase = createMock<UpdateMarket.UseCase>();
    const validator = createMock<Validation.Port>();
    const controller: Http.Controller = new UpdateMarketControlller(
      useCase,
      validator
    );
    const request: Http.Request<UpdateMarket.Request> = {
      params: {
        id: 'teste',
      },
      body: {
        name: 'teste',
        neighborhood: 'teste',
      },
    };
    const responsePromise = controller.handle(request);
    expect(responsePromise).rejects.toThrow(Error);
  });
});
