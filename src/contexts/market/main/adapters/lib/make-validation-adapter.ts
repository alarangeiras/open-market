import Ajv from 'ajv';
import { Validation } from '../../../data/ports/validation-port';
import { AjvValidationAdapter } from '../../../infra/adapters/libs/ajv-validation-adapter';

export const makeValidationAdapter = (): Validation.Port => {
  return new AjvValidationAdapter(new Ajv());
};
