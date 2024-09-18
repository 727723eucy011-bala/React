import React from 'react';
import Product from './components/exampler';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import { ThemeProvider } from './components/ThemeContext'; 
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    // <Product />
    <Router>
      <ThemeProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/Homepage" element={<Homepage />} />
      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
