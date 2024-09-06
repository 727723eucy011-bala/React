import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography, Menu, MenuItem, Paper, Stack, FormControl, InputLabel, Select } from '@mui/material';
import { ExitToApp, MoreVert } from '@mui/icons-material';

function MainPage() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showFindDoctor, setShowFindDoctor] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleSignOut = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      <AppBar position="static" style={{ backgroundColor: '#00796b' }}>
        <Toolbar>
          <Typography variant="h5" noWrap component="div" >
            Acme Hospital
          </Typography>
          <IconButton onClick={handleMenuOpen} style={{ position:'fixed', left: '100px', top: '10px' }}  >
          {/* <IconButton onClick={handleMenuOpen}> */}
            <MoreVert />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleFindDoctorClick}>Find a Doctor</MenuItem>
            {/* <MenuItem>Consulting (Link to Consulting page)</MenuItem> */}
            {/* <MenuItem>Departments</MenuItem> */}
            <MenuItem onClick={handleSignOut}>
              <ExitToApp /> Sign Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <main>
        <Stack spacing={3} style={{ padding: '20px' }}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
            <Typography variant="h4" gutterBottom>
              Welcome to Acme Hospital
            </Typography>
            <Typography variant="body1">
              Providing exceptional healthcare for over 50 years.
            </Typography>
          </Paper>

          {showFindDoctor && (
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Find a Doctor
              </Typography>
              <FormControl fullWidth>
                {/* <br /> */}
                <InputLabel id="department-label">Select Department</InputLabel>
                <Select
                  labelId="department-label"
                  value={selectedDepartment}
                  onChange={(e) => {
                    setSelectedDepartment(e.target.value);
                    setSelectedDoctor('');
                  }}
                >
                  <MenuItem value="">Select Department</MenuItem>
                  {departments.map(department => (
                    <MenuItem key={department.id} value={department.name}>{department.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="doctor-label">Select Doctor</InputLabel>
                <Select
                  labelId="doctor-label"
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  disabled={!selectedDepartment}
                >
                  <MenuItem value="">Select Doctor</MenuItem>
                  {selectedDepartment && doctors[selectedDepartment]?.map((doctor, index) => (
                    <MenuItem key={index} value={doctor}>{doctor}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          )}

          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              About Our Hospital
            </Typography>
            <Typography variant="body1">
              Acme Hospital is a leading healthcare provider in the city, offering a wide range of medical services and treatments. Our team of highly skilled doctors and nurses work tirelessly to ensure the well-being of our patients.
            </Typography>
            <br />
            <Typography variant="body1">
              With state-of-the-art facilities and cutting-edge technology, we strive to deliver the best possible care to our community. Our commitment to excellence is evident in our patient satisfaction ratings and the trust placed in us by our peers.
            </Typography>
          </Paper>
        </Stack>
      </main>

      <footer style={{ backgroundColor: '#00796b', color: '#fff', padding: '10px'}}>
        <Typography variant="body2">
          &copy; 2024 Acme Hospital. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default MainPage;
