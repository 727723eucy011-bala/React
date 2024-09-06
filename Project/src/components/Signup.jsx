// src/components/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [email, setEmail] = useState(''); // New state for email
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate

  const handleSignup = () => {
    // Check if username, password, confirm password, and email are not empty
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      setError('Please fill in all fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem('user'));

    // Check if the username already exists
    if (existingUser && existingUser.username === username) {
      setError('User already exists. Please choose a different username.');
      return;
    }

    // Store the new user in localStorage
    localStorage.setItem('user', JSON.stringify({ username, password, email }));

    // Display confirmation message
    alert(`User ${username} created successfully! Please log in.`);

    // Redirect to login page
    navigate('/'); // Redirect to Login page
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError(''); // Clear error on input change
        }}
        required // Mark as required
      />
      <input
        type="email" // Email input type
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError(''); // Clear error on input change
        }}
        required // Mark as required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(''); // Clear error on input change
        }}
        required // Mark as required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setError(''); // Clear error on input change
        }}
        required // Mark as required
      />
      {error && <div className="error">{error}</div>}
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <span onClick={() => navigate('/')} className="link">Login</span>
      </p>
    </div>
  );
}

export default Signup;
