import { JSONSchemaType } from "ajv";

export namespace Validation {
  export type Schema<T = any> = JSONSchemaType<T>

  export interface Port {
    validate(schema: Schema, validationObject: Object): Promise<any>
  }
}
