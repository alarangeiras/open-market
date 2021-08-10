import { Http } from '../../presentation/protocols/http-controller';
import { AppError } from './app-error';

export class DatabaseError extends AppError {
  constructor() {
    super(Http.StatusCode.InternalServerError, 'Database Error');
  }
}
