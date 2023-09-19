import {FormFieldState} from './validation/reducer/formValidationReducer.ts';
import {AllHTMLAttributes} from 'react';
import {TextField} from '@mui/material';

export interface FormFieldProps {
  fields: FormFieldState[];
  onFieldValueChange: (id: string, value: string) => void;
  label: string;
  id: string;
  type: AllHTMLAttributes<HTMLInputElement>['type'];
}

export const FormField = (
  {
    id,
    fields,
    label,
    type,
    onFieldValueChange
  }: FormFieldProps
) => {
  const field = fields.find(f => f.id === id);
  if (!field) throw new Error(`The field with id "${id}" is not defined`);

  const {valid, validators, value} = field;
  const errorIndex = valid.indexOf(false);
  const errorValidator = errorIndex !== -1 ? validators[errorIndex] : null;
  return (
    <TextField
      type={type}
      sx={{m: 1, width: 800}}
      error={errorIndex !== -1}
      label={label}
      onChange={(e) =>
        onFieldValueChange(id, e.target.value)
      }
      value={value}
      helperText={
        <>
          {errorValidator?.type === 'minLength' && <>Please enter at least {errorValidator.value} characters</>}
          {errorValidator?.type === 'maxLength' && <>Please enter at most {errorValidator.value} characters</>}
          {errorValidator?.type === 'notEmpty' && <>Please enter your {label}</>}
          {errorValidator?.type === 'equalTo' && <>Passwords need to be equal</>}
        </>
      }
    />);
};
