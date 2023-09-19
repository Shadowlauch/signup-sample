import './App.css';
import {Signup} from './signup/Signup.tsx';
import {Container} from '@mui/material';

function App() {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Signup/>
      </Container>
    </>
  );
}

export default App;
