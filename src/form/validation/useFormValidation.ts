import {useReducer} from 'react';
import {createFormValidationReducer} from './reducer/formValidationReducer.ts';
import useRefWithInitialValueFactory from '@restart/hooks/useRefWithInitialValueFactory';
import {createInitialStateFromConfig} from './reducer/createInitialStateFromConfig.ts';

export type ValidatorType =
 | {type: "minLength", value: number}
 | {type: "maxLength", value: number}
 | {type: "notEmpty"}
 | {type: "equalTo", value: string};

export interface FormValidationConfig {
  fields: FormFieldConfig[];
}

export interface FormFieldConfig {
  validators: ValidatorType[];
  id: string;
}

export const useFormValidation = (config: FormValidationConfig) => {
  const initialValueRef = useRefWithInitialValueFactory(() => createInitialStateFromConfig(config));
  const initialValue = initialValueRef.current;
  return useReducer(createFormValidationReducer(initialValue), initialValue);
};
