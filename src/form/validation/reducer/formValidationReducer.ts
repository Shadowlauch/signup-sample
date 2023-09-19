import {FormFieldConfig} from '../useFormValidation.ts';
import {ActionType} from './ActionTypes.ts';
import {validate} from './validate.ts';

export interface FormValidationReducerState {
  fields: FormFieldState[];
  valid: boolean;
  dirty: boolean;
}

export interface FormFieldState extends FormFieldConfig {
  value: string;
  valid: boolean[];
  dirty: boolean;
}

export const createFormValidationReducer = (initialState: FormValidationReducerState) => {
  return (state: FormValidationReducerState, action: ActionType): FormValidationReducerState => {
    if (action.type === 'CHANGE_VALUE') {
      const newFields = [...state.fields];
      const fieldIndex = newFields.findIndex(f => f.id === action.id);

      if (fieldIndex === -1) throw new Error(`Field with id ${action.id} could not be found`);

      newFields[fieldIndex] = {...newFields[fieldIndex], value: action.value};

      return {...state, fields: newFields};
    } else if (action.type === 'VALIDATE') {
      const newFields = [...state.fields];
      let formValid = true;

      for (let i = 0; i < newFields.length; i++){
        const valid = [...newFields[i].valid];
        for (let j = 0; j < newFields[i].validators.length; j++){
          valid[j] = validate(newFields[i], newFields[i].validators[j], newFields);

          if (!valid[j]) formValid = false;
        }

        newFields[i] = {...newFields[i], valid};
      }

      return {...state, fields: newFields, valid: formValid};
    } else if (action.type === 'RESET') {
      return initialState;
    } else {
      throw new Error('Unsupported action type');
    }
  }
}
