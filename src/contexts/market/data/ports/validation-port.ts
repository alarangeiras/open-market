import { JSONSchemaType } from 'ajv';

export namespace Validation {
  export type Schema<T = any> = JSONSchemaType<T>;

  export interface Port {
    validate<T = any>(
      schema: Schema<T>,
      validationObject: Object
    ): Promise<any>;
  }
}
