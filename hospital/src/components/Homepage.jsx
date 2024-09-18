import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  AppBar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cardStyle = {
  width: '200px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '#00796b',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 1.0)', // Dark intense shadow
  borderRadius: '8px',
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#00796b' },
    background: { default: '#f5f5f5' },
  },typography: { fontFamily: ['Tiro Tamil', 'cursive'].join(',') },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F5f5f5' },
    background: { default: '#121212' },
  },typography: { fontFamily: ['Tiro Tamil', 'cursive'].join(',') },
});

// Detailed doctor data
const doctors = [
  { name: 'Dr. John Doe', specialty: 'Cardiology', phone: '555-0101' },
  { name: 'Dr. Jane Smith', specialty: 'Pediatrics', phone: '555-0102' },
  { name: 'Dr. Emily Johnson', specialty: 'Neurology', phone: '555-0103' },
  { name: 'Dr. Michael Brown', specialty: 'Surgery', phone: '555-0104' },
  { name: 'Dr. Linda Davis', specialty: 'Orthopedics', phone: '555-0105' },
  { name: 'Dr. James Wilson', specialty: 'Dermatology', phone: '555-0106' },
  { name: 'Dr. Patricia Garcia', specialty: 'Psychiatry', phone: '555-0107' },
  { name: 'Dr. Robert Martinez', specialty: 'Internal Medicine', phone: '555-0108' },
  { name: 'Dr. Jennifer Rodriguez', specialty: 'Family Medicine', phone: '555-0109' },
  { name: 'Dr. William Hernandez', specialty: 'Gastroenterology', phone: '555-0110' },
  { name: 'Dr. Elizabeth Lopez', specialty: 'Endocrinology', phone: '555-0111' },
  { name: 'Dr. Joseph Gonzalez', specialty: 'Urology', phone: '555-0112' },
  { name: 'Dr. Charles Perez', specialty: 'Ophthalmology', phone: '555-0113' },
  { name: 'Dr. Barbara Wilson', specialty: 'Rheumatology', phone: '555-0114' },
  { name: 'Dr. Thomas Lee', specialty: 'Hematology', phone: '555-0115' },
];

function Homepage() {
  // eslint-disable-next-line no-unused-vars
  const [openDialog, setOpenDialog] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedService, setSelectedService] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const handleCloseDialog = () => {
  setOpenDialog(false);
  setSelectedService(null);
  };
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const hospitalServices = [
    { name: 'Emergency Care', phone: '123-456-7890', details: '24/7 emergency services.' },
    { name: 'Surgery', phone: '234-567-8901', details: 'State-of-the-art surgical facilities.' },
    { name: 'Pediatrics', phone: '345-678-9012', details: 'Specialized care for children.' },
    { name: 'Cardiology', phone: '456-789-0123', details: 'Expert heart care and treatment.' },
  ];

  const handleNavigateToMainPage = () => {
    navigate('/mainpage'); // Navigate to the MainPage
  };

  const handleCardClick = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };


  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="main-page" style={{ position: 'relative', overflow: 'auto', height: '100vh', backgroundColor: isDarkMode ? '#5bc0de' : '#fff' }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <AppBar>
          <Toolbar>
            <Typography variant="h5" noWrap component="div" style={{ flexGrow: 1 }}>
              WhaleRise Hospital
            </Typography>
            <Button onClick={handleNavigateToMainPage} color='inherit'>
              Main Page
            </Button>
            <IconButton onClick={toggleDarkMode} color="inherit">
              {isDarkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box sx={{ padding: '75px' }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Welcome to Our Hospital
          </Typography>

          {/* Description below the heading */}
          <Typography variant="body1" textAlign="center" sx={{ mb: 2 }}>
            We provide exceptional healthcare services with a team of experienced doctors.
            Below is a list of our available doctors and their contact information.
          </Typography>

          {/* Cards for Services */}
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={4} // Adds space between cards
            sx={{ padding: '20px' }} // Optional padding around the container
          >
            {hospitalServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCardClick(service)}
              >
                <Card sx={cardStyle}>
                  <CardContent>
                    <Typography variant="h5">{service.name}</Typography>
                    <Typography variant="body2">Click for details</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          <br /><br />
          <Typography variant="h5" gutterBottom textAlign="center">
            Our Doctors
          </Typography><br /><br />

          <TableContainer component={Box} 
  sx={{ 
    maxWidth: '90%', 
    marginX: 'auto', 
    marginTop: '20px', 
    maxHeight: '440px',
    backgroundColor: 'black', 
     boxShadow: '0 15px 100px rgba(0, 0, 0, 6)',borderRadius:'12px',
    position: 'relative', // Ensure positioning context for child elements
  }}
>
  <Table stickyHeader>
    <TableHead>
      <TableRow>
        <TableCell style={{ backgroundColor: 'white',color:'black' }}>Doctor Name</TableCell>
        <TableCell style={{ backgroundColor: 'white',color:'black' }}>Specialty</TableCell>
        <TableCell style={{ backgroundColor: 'white',color:'black' }}>Contact Number</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {doctors.map((doctor, index) => (
        <motion.tr key={index} whileHover={{ scaleY: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
          <TableCell style={{ color: 'white' }}>{doctor.name}</TableCell>
          <TableCell style={{ color: 'white' }}>{doctor.specialty}</TableCell>
          <TableCell style={{ color: 'white' }}>{doctor.phone}</TableCell>
        </motion.tr>
      ))}
    </TableBody>
  </Table>
</TableContainer>


          <Dialog open={openDialog} onClose={handleCloseDialog}>
           <DialogTitle>{selectedService?.name}</DialogTitle>
           <DialogContent>
             <Typography>{selectedService?.details}</Typography>
             <Typography>Contact :{selectedService?.phone}</Typography>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleCloseDialog} color="primary">
               Close
             </Button>
           </DialogActions>
         </Dialog>
        </Box>
      </ThemeProvider>
      
      <footer style={{ backgroundColor: '#141e30', color: '#fff', padding: '10px', marginTop: '5%' }}>
          <Typography variant="body2" align="center">
            &copy; 2024 WhaleRise Hospital. All rights reserved.
          </Typography>
        </footer>
    </div>
  );
}

export default Homepage;
