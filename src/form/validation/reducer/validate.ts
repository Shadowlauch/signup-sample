import {FormFieldState} from './formValidationReducer.ts';
import {ValidatorType} from '../useFormValidation.ts';

export const validate = (field: FormFieldState, validator: ValidatorType, fields: FormFieldState[]): boolean => {
  if (validator.type === "minLength") {
    return field.value.length >= validator.value;
  } else if (validator.type === "maxLength") {
    return field.value.length <= validator.value;
  } else if (validator.type === "notEmpty") {
    return field.value.length > 0;
  } else if (validator.type === "equalTo") {
    const ref = fields.find(f => f.id === validator.value);

    if (!ref) throw new Error(`Reference field with id "${validator.value}" could not be found`);

    return ref.value === field.value;
  }

  return false;
}
