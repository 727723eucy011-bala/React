// src/components/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Stack, Paper } from '@mui/material';
import { AccountCircle } from '@mui/icons-material'; 
import { Lock } from '@mui/icons-material'; 

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem('user'));

    if (existingUser && existingUser.username === username) {
      setError('User already exists. Please choose a different username.');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ username, password, email }));

    alert(`User ${username} created successfully! Please log in.`);
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#e3f2fd' }}>
      <Paper elevation={10} style={{ padding: '40px', textAlign: 'center', width: '100%', backgroundColor: '#ffffff', borderRadius: '15px' }}>
        <Typography variant="h4" gutterBottom style={{ color: '#00796b' }}>
          Sign Up
        </Typography>
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
            type="email"
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            required
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
          <TextField
            variant="outlined"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError('');
            }}
            required
            style={{ width: '80%', borderRadius: '10px' }}
          />
          {error && (
            <Typography color="error">{error}</Typography>
          )}
          <Button variant="contained" color="primary" onClick={handleSignup} style={{ width: '80%', backgroundColor: '#00796b', borderRadius: '10px' }}>
            Sign Up
          </Button>
          <Typography variant="body2" style={{ color: '#00796b' }}>
            Already have an account?{' '}
            <span onClick={() => navigate('/')} className="link" style={{ cursor: 'pointer', color: '#004d40', textDecoration: 'underline' }}>
              Login
            </span>
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Signup;
