import Ajv from "ajv";
import { Validation } from "../../../data/ports/validation-port";

export class AjvValidationAdapter implements Validation.Port {
  
  constructor(private _ajv: Ajv) {}

  async validate(schema: Validation.Schema, validationObject: Object): Promise<void> {
    const valid = this._ajv.validate(schema, validationObject)
    if (!valid) {
      // throw new ValidationError
    }
  }

}