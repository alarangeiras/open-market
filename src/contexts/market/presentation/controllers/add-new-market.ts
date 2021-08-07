import { AddNewMarket, AddNewMarketRequest } from '../../domain/usecases'
import { Http } from '../protocols/http-controller'
import { created } from '../helpers/http'

export class AddNewMarketController implements Http.Controller {
  constructor(private readonly _useCase: AddNewMarket) {}

  async handle(
    request: Http.Request<AddNewMarketRequest>
  ): Promise<Http.Response<void>> {
    await this._useCase.addNewMarket(request.body as AddNewMarketRequest)
    return created()
  }
}
