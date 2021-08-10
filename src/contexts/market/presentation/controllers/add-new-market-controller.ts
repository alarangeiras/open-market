import { Validation } from '../../data/ports/validation-port';
import { AddNewMarket } from '../../domain/usecases';
import { created } from '../helpers/http';
import { Http } from '../protocols/http-controller';

export class AddNewMarketController implements Http.Controller {
  constructor(
    private readonly _useCase: AddNewMarket.UseCase,
    private readonly _validator: Validation.Port
  ) {}

  async handle(
    request: Http.Request<AddNewMarket.Request>
  ): Promise<Http.Response<string>> {
    await this._validator.validate(AddNewMarket.Schema, request.body);
    await this._useCase.addNewMarket(request.body as AddNewMarket.Request);
    return created('Market Created');
  }
}
