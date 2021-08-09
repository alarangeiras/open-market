import { RemoveMarketController } from "../../presentation/controllers/remove-market-controller";
import { Http } from "../../presentation/protocols/http-controller";
import { makeRemoveMarketUseCase } from "../adapters/usecases/make-remove-market";

export const makeRemoveMarketController = (): Http.Controller => {
  return new RemoveMarketController(makeRemoveMarketUseCase());
}