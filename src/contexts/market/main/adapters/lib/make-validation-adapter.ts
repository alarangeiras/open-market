import Ajv from 'ajv';
import { LoggerPort } from '../../../data/ports/logger-port';
import { Validation } from '../../../data/ports/validation-port';
import { AjvValidationAdapter } from '../../../infra/adapters/libs/ajv-validation-adapter';
import { makePinoLoggerAdapter } from './make-pino-logger-adapter';

export const makeValidationAdapter = (): Validation.Port => {
  return new AjvValidationAdapter(new Ajv(), makePinoLoggerAdapter());
};
