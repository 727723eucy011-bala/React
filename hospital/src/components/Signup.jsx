import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Stack, Paper } from '@mui/material';
import { AccountCircle, Lock, Email } from '@mui/icons-material'; 

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
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
          boxShadow: '0 0 20px rgba(0, 121, 107, 0.5), 0 0 40px rgba(0, 121, 107, 0.5)', // Glowing effect
          position: 'relative', // Ensure it stays above the background
          zIndex: 1, // Higher z-index to stay above the background
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: '#00ffcc', textShadow: '0 0 10px rgba(0, 255, 204, 0.7)' }}>
       Signup
        </Typography><br />
        <Stack spacing={3} alignItems="center">
          <TextField
            placeholder='Username'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError('');
            }}
            required
            InputProps={{
              startAdornment: <AccountCircle style={{ color: 'black' }} />, // Icon in the input field
            }}
            style={{ width: '80%', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
            InputLabelProps={{
              style: { color: '#00ffcc' }, // Change the label color
            }}
          />
          <TextField
            variant="outlined"
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            required
            InputProps={{
              startAdornment: <Email style={{ color: 'black' }} />, // Use the Email icon here
            }}
            style={{ width: '80%', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
            InputLabelProps={{
              style: { color: '#00ffcc' },
            }}
          />
          <TextField
            variant="outlined"
            type="password"
            placeholder='Password'
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
            InputLabelProps={{
              style: { color: '#00ffcc' },
            }}
          />
          <TextField
            variant="outlined"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError('');
            }}
            required
              InputProps={{
              startAdornment: <Lock style={{ color: 'black' }} />,
            }}
            style={{ width: '80%', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
            InputLabelProps={{
              style: { color: '#00ffcc' },
            }}
          />
          {error && (
            <Typography color="error">{error}</Typography>
          )}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSignup} 
            style={{ 
              width: '80%', 
              backgroundColor: '#00ffcc', 
              borderRadius: '10px', 
              boxShadow: '0 0 20px rgba(0, 255, 204, 0.7)', // Glowing effect
            }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" style={{ color: '#00ffcc' }}>
            Already have an account?{' '}
            <span onClick={() => navigate('/')} className="link" style={{ cursor: 'pointer', color: '#ffffff', textDecoration: 'underline' }}>
              Login
            </span>
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
}

export default Signup;
