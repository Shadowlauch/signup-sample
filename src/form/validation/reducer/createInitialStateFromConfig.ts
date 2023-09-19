import {FormValidationConfig} from '../useFormValidation.ts';
import {FormValidationReducerState} from './formValidationReducer.ts';

export const createInitialStateFromConfig = (config: FormValidationConfig): FormValidationReducerState => {
  return {
    dirty: false,
    valid: false,
    fields: config.fields.map((field) => {
      return {
        dirty: false,
        valid: (new Array(field.validators.length)).fill(null),
        value: "",
        ...field
      }
    })
  }
};
