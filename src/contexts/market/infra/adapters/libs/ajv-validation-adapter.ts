import Ajv from 'ajv';
import { LoggerPort } from '../../../data/ports/logger-port';
import { Validation } from '../../../data/ports/validation-port';
import { ValidationError } from '../../../domain/errors/validation-error';

export class AjvValidationAdapter implements Validation.Port {
  constructor(private _ajv: Ajv, private _logger: LoggerPort) {}

  async validate<T>(
    schema: Validation.Schema<T>,
    validationObject: Object
  ): Promise<void> {
    const validateFunction = this._ajv.compile(schema);
    if (!validateFunction(validationObject) && validateFunction.errors) {
      const errors = validateFunction.errors.map((error) => error.message);
      this._logger.info(`validation fail ${errors}`);
      throw new ValidationError(errors);
    }
  }
}
