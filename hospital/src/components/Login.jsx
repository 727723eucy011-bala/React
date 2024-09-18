import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Stack, Paper } from '@mui/material'; // Import Material-UI components
import { AccountCircle, Lock } from '@mui/icons-material';

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
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(to right, #141e30, #243b55)', // Dark gradient background
    }}>
      <Paper 
        elevation={10} 
        style={{ 
          padding: '40px', 
          textAlign: 'center', 
          width: '100%', 
          maxWidth: '400px', // Limit max width for better appearance
          borderRadius: '15px', 
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          boxShadow: '0 0 20px rgba(0, 121, 107, 0.5), 0 0 40px rgba(0, 121, 107, 0.5)', 
          position: 'relative', 
          // zIndex: 1,
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: '#00ffcc', textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>
          Login
        </Typography><br />
        <Stack spacing={3} alignItems="center">
          <TextField
            value={username}
            placeholder='Username'
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            required
            InputProps={{
              startAdornment: <AccountCircle style={{ color: 'black' }} />, // Icon in the input field
            }}
            style={{ width: '80%', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
          />
          <TextField
            placeholder='Password'
            type="password"
            // hidden
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            required
            InputProps={{
              startAdornment: <Lock style={{ color: 'black' }} />, // Lock icon in the input field
            }}
            style={{ width: '80%', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
            // Custom styling for the label
            InputLabelProps={{
              style: { color: '#00ffcc' }, // Change the label color
            }}
          />
          {error && (
            <Typography color="error">{error}</Typography>
          )}
          <Button 
            variant="contained" 
            color="" 
            onClick={handleLogin} 
            style={{ 
              width: '80%', 
              backgroundColor: '#00ffcc', 
              borderRadius: '10px', 
              boxShadow: '0 0 20px rgba(0, 255, 204, 0.7)', // Glowing effect
            }}
          >
            Login
          </Button>
          <Typography variant="body2" style={{ color: '#00ffcc' }}>
            Don't have an account?{' '}
            <span onClick={() => navigate('/signup')} className="link" style={{ cursor: 'pointer', color: '#ffffff', textDecoration: 'underline' }}>
              Sign Up
            </span>
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
}

export default Login;
