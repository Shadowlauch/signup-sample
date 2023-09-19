import {FormValidationConfig, useFormValidation} from '../form/validation/useFormValidation.ts';
import {SignupConfirmation} from './confirmation/SignupConfirmation.tsx';
import {SignupForm} from './form/SignupForm.tsx';

const formConfig: FormValidationConfig = {
  fields: [
    {
      id: 'username',
      validators: [
        {type: 'notEmpty'},
        {
          type: 'minLength', value: 4
        },
        {
          type: 'maxLength', value: 16
        }
      ]
    },
    {
      id: 'password',
      validators: [
        {type: 'notEmpty'},
        {
          type: 'minLength', value: 4
        },
        {
          type: 'maxLength', value: 16
        }
      ]
    },
    {
      id: 'passwordConfirmation',
      validators: [
        {type: 'notEmpty'},
        {
          type: 'equalTo',
          value: 'password'
        }
      ]
    }
  ]
};

export const Signup = () => {
  const [formState, formDispatch] = useFormValidation(formConfig);

  const handleReset = () => formDispatch({type: 'RESET'});
  const handleSubmit = () => formDispatch({type: 'VALIDATE'});
  const handleFieldValueChange = (id: string, value: string) => formDispatch({type: 'CHANGE_VALUE', id, value});


  const username = formState.fields.find(f => f.id === 'username')?.value ?? 'TBD';
  return formState.valid ?
    <SignupConfirmation onReset={handleReset} username={username}/> :
    <SignupForm fields={formState.fields} onFieldValueChange={handleFieldValueChange} onSubmit={handleSubmit}/>;
};
