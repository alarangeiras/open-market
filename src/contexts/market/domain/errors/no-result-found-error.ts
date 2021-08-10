import { Http } from '../../presentation/protocols/http-controller';
import { AppError } from './app-error';

export class NoResultFoundError extends AppError {
  constructor() {
    super(Http.StatusCode.PreconditionFailed, 'No result found');
  }
}
