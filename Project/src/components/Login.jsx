// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Stack, Paper } from '@mui/material'; // Import Material-UI components
import { AccountCircle } from '@mui/icons-material';
import { Lock } from '@mui/icons-material'; 
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter your username and password.');
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
      navigate('/mainpage'); // Redirect to mainpage
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#e0f7fa' }}>
      <Paper elevation={10} style={{ padding: '40px', textAlign: 'center', width: '100%', borderRadius: '15px', backgroundColor: '#ffffff' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#00796b' }}>
          Login
        </Typography>
        <br />
        <Stack spacing={3} alignItems="center">
          <TextField
            variant="outlined"
            label="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            required
            InputProps={{
              startAdornment: <AccountCircle style={{ color: '#00796b' }} />, // Icon in the input field
            }}
            style={{ width: '80%', borderRadius: '10px' }}
          />
          <TextField
            variant="outlined"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            required
            InputProps={{
              startAdornment: <Lock style={{ color: '#00796b' }} />, // Lock icon in the input field
            }}
            style={{ width: '80%', borderRadius: '10px' }}
          />
          {error && (
            <Typography color="error">{error}</Typography>
          )}
          <Button variant="contained" color="primary" onClick={handleLogin} style={{ width: '80%', borderRadius: '10px', backgroundColor: '#00796b' }}>
            Login
          </Button>
          <Typography variant="body2" style={{ color: '#00796b' }}>
            Don't have an account?{' '}
            <span onClick={() => navigate('/signup')} className="link" style={{ cursor: 'pointer', color: '#004d40', textDecoration: 'underline' }}>
              Sign Up
            </span>
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Login;
