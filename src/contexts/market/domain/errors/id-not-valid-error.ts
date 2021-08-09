import { Http } from "../../presentation/protocols/http-controller";
import { AppError } from "./app-error";

export class IdNotValidError extends AppError {

  constructor() {
    super(Http.StatusCode.PreconditionFailed, 'Id not Valid');
  }
}