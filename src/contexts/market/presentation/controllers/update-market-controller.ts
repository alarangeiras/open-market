import { Validation } from '../../data/ports/validation-port';
import { IdNotValidError } from '../../domain/errors/id-not-valid-error';
import { UpdateMarket } from '../../domain/usecases';
import { ok } from '../helpers/http';
import { Http } from '../protocols/http-controller';

export class UpdateMarketControlller implements Http.Controller {
  constructor(
    private _useCase: UpdateMarket.UseCase,
    private readonly _validator: Validation.Port
  ) {}

  async handle(
    request: Http.Request<UpdateMarket.Request>
  ): Promise<Http.Response<string>> {
    await this._validator.validate(UpdateMarket.Schema, request.body);
    const id: number = parseInt(request.params['id']);
    if (!id) {
      throw new IdNotValidError();
    }
    await this._useCase.updateMarket(request.body, id);
    return ok('Market Updated');
  }
}
