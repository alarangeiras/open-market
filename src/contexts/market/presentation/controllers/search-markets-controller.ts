import { Validation } from '../../data/ports/validation-port';
import { SearchMarkets } from '../../domain/usecases';
import { ok } from '../helpers/http';
import { Http } from '../protocols/http-controller';

export class SearchMarketsController implements Http.Controller {
  constructor(
    private _useCase: SearchMarkets.UseCase,
    private readonly _validator: Validation.Port
  ) {}

  async handle(
    request: Http.Request<void>
  ): Promise<Http.Response<SearchMarkets.Response[]>> {
    const requestPayload = request.query as SearchMarkets.Request;
    await this._validator.validate(SearchMarkets.Schema, requestPayload);

    const result = await this._useCase.searchMarkets(requestPayload);
    return ok(result);
  }
}
