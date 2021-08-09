import Ajv from 'ajv';
import assert from 'assert';
import { createMock } from 'ts-auto-mock';
import { LoggerPort } from '../../../data/ports/logger-port';
import { Validation } from '../../../data/ports/validation-port';
import { AppError } from '../../../domain/errors/app-error';
import { AjvValidationAdapter } from './ajv-validation-adapter';

describe(__filename, () => {
  test('execute validate method with success', async () => {
    const validationFunctionSpy = jest.fn().mockReturnValue(true);
    const compileSpy = jest.fn().mockReturnValue(validationFunctionSpy);
    const ajv = createMock<Ajv>();
    ajv.compile = compileSpy;

    const logger = createMock<LoggerPort>();

    const validation: Validation.Port = new AjvValidationAdapter(ajv, logger);

    const schema: any = {};
    await validation.validate(schema, {});
    expect(compileSpy).toBeCalled();
    expect(validationFunctionSpy).toBeCalled();
  });
  test('execute validate method with validation errros', async () => {
    const validationFunctionSpy: any = jest.fn().mockReturnValue(false);
    validationFunctionSpy.errors = ['error'];
    const compileSpy = jest.fn().mockReturnValue(validationFunctionSpy);
    const ajv = createMock<Ajv>();
    ajv.compile = compileSpy;

    const logger = createMock<LoggerPort>();

    const validation: Validation.Port = new AjvValidationAdapter(ajv, logger);

    const schema: any = {};
    try {
      await validation.validate(schema, {});
    } catch (error) {
      expect(error.name).toBe(AppError.name);
      return;
    }
    assert.fail('should not execute without exception');
  });
});
