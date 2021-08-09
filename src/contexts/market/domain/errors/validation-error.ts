import { Http } from '../../presentation/protocols/http-controller';
import { AppError } from './app-error';

export class ValidationError extends AppError {
  errors: string[];

  constructor(_validationErrors: string[]) {
    super(Http.StatusCode.BadRequest, 'Error when validate message');
    this.errors = _validationErrors;
  }
}
