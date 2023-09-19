import {Button, Typography} from '@mui/material';

interface SignupConfirmationProps {
  onReset: () => void;
  username: string;
}
export const SignupConfirmation = ({username, onReset}: SignupConfirmationProps) => {
  return (<div>
    <Typography component="h1" variant="h5" marginBottom={5}>
      Thanks for signing up: {username}
    </Typography>
    <Button fullWidth variant="contained" onClick={onReset}>Reset</Button>
  </div>)
}
