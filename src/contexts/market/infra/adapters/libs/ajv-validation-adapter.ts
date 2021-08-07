import Ajv, { ValidateFunction } from 'ajv';
import { Validation } from '../../../data/ports/validation-port';
import { ValidationError } from '../../../domain/errors/validation-error';

export class AjvValidationAdapter implements Validation.Port {
  constructor(private _ajv: Ajv) {}

  async validate<T>(
    schema: Validation.Schema<T>,
    validationObject: Object
  ): Promise<void> {
    const validateFunction = this._ajv.compile(schema) as ValidateFunction;
    if (validateFunction(validationObject)) {
      const errors = validateFunction.errors.map((error) => error.message);
      throw new ValidationError(errors);
    }
  }
}
