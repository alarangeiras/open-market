import { Validation } from '../ports/validation-port'

export function Validate(schema: Validation.Schema<any>, index: number = 0) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: any[]) {
      const validationValue = args[index]
      await originalMethod.apply(target, args)
    }

    return descriptor
  }
}
