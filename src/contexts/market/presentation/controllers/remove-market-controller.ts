import { IdNotValidError } from '../../domain/errors/id-not-valid-error';
import { RemoveMarket } from '../../domain/usecases';
import { ok } from '../helpers/http';
import { Http } from '../protocols/http-controller';

export class RemoveMarketController implements Http.Controller {
  constructor(private _useCase: RemoveMarket.UseCase) {}

  async handle(request: Http.Request<any>): Promise<Http.Response<void>> {
    const id: number = parseInt(request.params['id']);
    if (!id) {
      throw new IdNotValidError();
    }
    await this._useCase.removeMarket(id);
    return ok();
  }
}
