import { createMock } from 'ts-auto-mock';
import { AppError } from '../../domain/errors/app-error';
import { RemoveMarket } from '../../domain/usecases';
import { Http } from '../protocols/http-controller';
import { RemoveMarketController } from './remove-market-controller';

describe(__filename, () => {
  test('remove market using request id', async () => {
    const useCase = createMock<RemoveMarket.UseCase>();
    const controller: Http.Controller = new RemoveMarketController(useCase);
    const id = '1';
    const response = await controller.handle({
      params: {
        id,
      },
    });
    expect(response.status).toBe(200);
  });
  test('remove market should throw invalid id', async () => {
    const useCase = createMock<RemoveMarket.UseCase>();
    const controller: Http.Controller = new RemoveMarketController(useCase);
    const id = 'test';
    try {
      await controller.handle({
        params: {
          id,
        },
      });
    } catch (error) {
      expect(error.name).toBe(AppError.name);
      return;
    }

    throw new Error('invalid case');
  });
});
