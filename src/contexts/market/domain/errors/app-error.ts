import { Http } from '../../presentation/protocols/http-controller';

export class AppError extends Error {
  status: Http.StatusCode;
  message: string;

  constructor(statusCode: Http.StatusCode, message: string) {
    super(message);
    this.message = message;
    this.name = AppError.name;
    this.status = statusCode;
  }
}
