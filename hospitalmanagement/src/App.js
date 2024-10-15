import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/LoginPage';
import  AppointmentBooking from './components/Appointment';
import MainPage from './components/Homepage';


const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            </Routes>
    </Router>
        
    );
};

export default App;
