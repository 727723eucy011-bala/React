import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';

const GreetingForm = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user1' && password === 'user1') {
      setMessage('Login Successful!');
      alert('User logged in successfully!');
    } else {
      setMessage('Invalid username or password');
      alert('Invalid username or password');
    }
  };

  return (
    <Container>
      {!showLogin ? (
        <Button style={{padding:'20px',margin:'300px',justifyContent:'center'}}
        variant="contained" onClick={() => setShowLogin(true)}>
          LOGIN
        </Button>
      ) : (
        <form onSubmit={handleLogin}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          {msg && (
            <Typography variant="body2"  marginTop={2}>
              {msg}
            </Typography>
          )}
        </form>
      )}
    </Container>
  );
};

export default GreetingForm;