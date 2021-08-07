import { Http } from '../../presentation/protocols/http-controller';

export class AppError extends Error {
  private _status: Http.StatusCode;

  constructor(statusCode: Http.StatusCode, message: string) {
    super(message);
    this.name = AppError.name;
    this._status = statusCode;
  }

  get status(): number {
    return this._status;
  }
}
