import {FormField} from '../../form/FormField.tsx';
import {FormValidationReducerState} from '../../form/validation/reducer/formValidationReducer.ts';
import {Box, Button, Typography} from '@mui/material';


export interface SignupFormProps {
  onSubmit: () => void;
  onFieldValueChange: (id: string, value: string) => void;
  fields: FormValidationReducerState["fields"];
}

export const SignupForm = ({fields, onFieldValueChange, onSubmit}: SignupFormProps) => {
  return (
    <Box
      mx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      component="form"
      onSubmit={(e) => {
        onSubmit();
        e.preventDefault();
      }}
      noValidate
      autoComplete="off"
    >
      <Typography component="h1" variant="h5" marginBottom={5}>
        Sign Up
      </Typography>


      <FormField id={'username'} label={'Username'} type={'text'} onFieldValueChange={onFieldValueChange} fields={fields} />
      <FormField id={'password'} label={'Password'} type={'password'} onFieldValueChange={onFieldValueChange} fields={fields} />
      <FormField id={'passwordConfirmation'} label={'Password Confirmation'} type={'password'} onFieldValueChange={onFieldValueChange} fields={fields} />

      <Button fullWidth variant="contained" type={'submit'}>Submit</Button>
    </Box>);
};
