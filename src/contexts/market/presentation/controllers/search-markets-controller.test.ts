import assert from 'assert';
import { createMock } from 'ts-auto-mock';
import { Validation } from '../../data/ports/validation-port';
import { SearchMarkets } from '../../domain/usecases';
import { Http } from '../protocols/http-controller';
import { SearchMarketsController } from './search-markets-controller';

describe(__filename, () => {
  test('handle request', async () => {
    const usecase = createMock<SearchMarkets.UseCase>();
    const valdiator = createMock<Validation.Port>();
    const controller: Http.Controller = new SearchMarketsController(
      usecase,
      valdiator
    );
    const request = {};
    try {
      const result = await controller.handle(request);
      expect(result).not.toBeNull();
    } catch (error) {
      assert.fail();
    }
  });
});
