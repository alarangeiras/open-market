import { Http } from '../../presentation/protocols/http-controller';
import { AppError } from './app-error';

export class ValidationError extends AppError {
  private _validationErrors: string[];

  constructor(_validationErrors: string[]) {
    super(Http.StatusCode.BadRequest, 'Error when validate object');
    this._validationErrors = _validationErrors;
  }

  get message(): string {
    return `${this.message}: ${this._validationErrors}`;
  }
}
