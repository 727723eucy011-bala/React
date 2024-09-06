
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate

  const handleLogin = () => {
    // Check if username and password are not empty
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter your username and password.');
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    // Validate the entered username and password
    if (user && user.username === username && user.password === password) {
      navigate('/mainpage'); // Redirect to mainpage
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
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
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(''); // Clear error on input change
        }}
        required // Mark as required
      />
      {error && <div className="error">{error}</div>}
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <span onClick={() => navigate('/signup')} className="link">Sign Up</span>
      </p>
    </div>
  );
}

export default Login;
