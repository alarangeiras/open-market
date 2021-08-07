import { AddNewMarketController } from "../../presentation/controllers/add-new-market";
import { Http } from "../../presentation/protocols/http-controller";
import { makeAddNewMarket } from "../adapters/usecases/make-add-new-maket";

export function makeAddNewMarketController(): Http.Controller {
  return new AddNewMarketController(makeAddNewMarket())
} 