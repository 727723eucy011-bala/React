// src/components/MainPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  // State for managing visibility of department and doctor selection
  const [showFindDoctor, setShowFindDoctor] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleFindDoctorClick = () => {
    setShowFindDoctor(!showFindDoctor);
  };

  const departments = [
    { id: 1, name: 'Neurology' },
    { id: 2, name: 'Cardiology' },
    { id: 3, name: 'Pediatrics' },
    { id: 4, name: 'Orthopedics' }
  ];

  const doctors = {
    Neurology: ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee'],
    Cardiology: ['Dr. Brown', 'Dr. Davis', 'Dr. Wilson'],
    Pediatrics: ['Dr. Taylor', 'Dr. Anderson', 'Dr. Thomas'],
    Orthopedics: ['Dr. Jackson', 'Dr. White', 'Dr. Harris']
  };

  return (
    <div className="main-page">
      <header>
        <div className="logo">Acme Hospital</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#x22EE; {/* This represents the three dots */}
        </button>
        <nav className={`${menuOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#" onClick={handleFindDoctorClick}>Find a Doctor</a></li>
            <li><a href="#">Make an Appointment</a></li>
            <li><a href="#">Book a Master Health Checkup</a></li>
            <li><a href="#">Departments</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Acme Hospital</h1>
            <p>Providing exceptional healthcare for over 50 years.</p>
          </div>
        </section>

        {showFindDoctor && (
          <section className="find-doctor">
            <div className="find-doctor-content">
              <label htmlFor="department">Select your department:</label>
              <select
                id="department"
                value={selectedDepartment}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  setSelectedDoctor(''); // Reset doctor selection when department changes
                }}
              >
                <option value="">Select your department</option>
                {departments.map(department => (
                  <option key={department.id} value={department.name}>{department.name}</option>
                ))}
              </select>

              <label htmlFor="doctor">Select your doctor:</label>
              <select
                id="doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                disabled={!selectedDepartment} // Disable until department is selected
              >
                <option value="">Select your doctor</option>
                {selectedDepartment && doctors[selectedDepartment]?.map((doctor, index) => (
                  <option key={index} value={doctor}>{doctor}</option>
                ))}
              </select>
            </div>
          </section>
        )}

        <section className="about">
          <div className="about-content">
            <h2>About Our Hospital</h2>
            <p>
              Acme Hospital is a leading healthcare provider in the city, offering a wide range of medical services and treatments. Our team of highly skilled doctors and nurses work tirelessly to ensure the well-being of our patients.
            </p>
            <p>
              With state-of-the-art facilities and cutting-edge technology, we strive to deliver the best possible care to our community. Our commitment to excellence is evident in our patient satisfaction ratings and the trust placed in us by our peers.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Acme Hospital. All rights reserved.</p>
      </footer>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default MainPage;
