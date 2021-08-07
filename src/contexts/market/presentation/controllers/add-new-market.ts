import { AddNewMarket, AddNewMarketRequest } from '../../domain/usecases'
import { Http } from '../protocols/http-controller'
import { created } from '../helpers/http'
import { Validate } from '../../data/decorators/validation'

export class AddNewMarketController implements Http.Controller {
  constructor(private readonly _useCase: AddNewMarket) {}

  @Validate('')
  async handle(
    request: Http.Request<AddNewMarketRequest>
  ): Promise<Http.Response<void>> {
    await this._useCase.addNewMarket(request.body as AddNewMarketRequest)
    return created()
  }
}
