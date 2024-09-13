import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Paper,
  Stack,
  FormControl,
  InputLabel,
  Select,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import { ExitToApp, MoreVert } from '@mui/icons-material';
import { motion } from 'framer-motion'; // Import framer-motion for animations

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

  const handleNavigateToHome = () => {
    navigate('/Homepage'); // Navigate to the Homepage
  };

  const departments = [
    { id: 1, name: 'Neurology' },
    { id: 2, name: 'Cardiology' },
    { id: 3, name: 'Pediatrics' },
    { id: 4, name: 'Orthopedics' },
  ];

  const doctors = {
    Neurology: ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee'],
    Cardiology: ['Dr. Brown', 'Dr. Davis', 'Dr. Wilson'],
    Pediatrics: ['Dr. Taylor', 'Dr. Anderson', 'Dr. Thomas'],
    Orthopedics: ['Dr. Jackson', 'Dr. White', 'Dr. Harris'],
  };

  return (
    <div className="main-page" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(to right, #141e30, #243b55)', height: '50%' }}>
      <AppBar position="static" style={{  backgroundColor: '#1f2a44', color: '#fff', }}>
        <Toolbar>
          <Typography variant="h5" noWrap component="div" style={{ flexGrow: 1 }}>
            Thimingalam Hospital
          </Typography>
          <Button color="inherit" onClick={handleNavigateToHome}>
            Home
          </Button>
          <IconButton onClick={handleMenuOpen} style={{ marginLeft: 'auto' }}>
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
            <MenuItem onClick={handleSignOut}>
              <ExitToApp /> Sign Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <main style={{ padding: '40px' }}>
        <Stack spacing={4}>
          <Paper elevation={3} style={{ backgroundColor: '#1f2a44', color: '#fff', boxShadow: '0 4px 20px rgba(123, 123, 1230, 3)', padding:'40px' }}>
            <Typography variant="h4" gutterBottom>
              Welcome to Acme Hospital
            </Typography>
            <Typography variant="body1">
              Providing exceptional healthcare for over 50 years.
            </Typography>
          </Paper>

          {showFindDoctor && (
            <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#00796b', color: '#fff' }}>
              <Typography variant="h5" gutterBottom>
                Find a Doctor
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="department-label" style={{ color: '#fff' }}>
                  Select Department
                </InputLabel>
                <Select
                  labelId="department-label"
                  value={selectedDepartment}
                  onChange={(e) => {
                    setSelectedDepartment(e.target.value);
                    setSelectedDoctor('');
                  }}
                  style={{ color: '#fff' }}
                >
                  <MenuItem value="" style={{ color: '#fff' }}>
                    Select Department
                  </MenuItem>
                  {departments.map(department => (
                    <MenuItem key={department.id} value={department.name} style={{ color: '#fff' }}>
                      {department.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="doctor-label" style={{ color: '#fff' }}>
                  Select Doctor
                </InputLabel>
                <Select
                  labelId="doctor-label"
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  disabled={!selectedDepartment}
                  style={{ color: '#fff' }}
                >
                  <MenuItem value="" style={{ color: '#fff' }}>
                    Select Doctor
                  </MenuItem>
                  {selectedDepartment && doctors[selectedDepartment]?.map((doctor, index) => (
                    <MenuItem key={index} value={doctor} style={{ color: '#fff' }}>
                      {doctor}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
          )}

          <Grid container spacing={4} justifyContent="center">
            {/* Animated Card Example */}
            <Grid item xs={12} sm={4} md={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card elevation={6} style={{ backgroundColor: '#1f2a44', color: '#fff', boxShadow: '0 4px 20px rgba(1221, 12, 12, 12)', height: '200px', width: '200px' }}>
                  <CardContent>
                    <Typography variant="h5">Patient Management</Typography>
                    <Typography variant="body2">
                      Easily manage patient records and appointments.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="inherit">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card elevation={6} style={{ backgroundColor: '#1f2a44', color: '#fff', boxShadow: '0 4px 20px rgba(1221, 12, 12, 12)', height: '200px', width: '200px' }}>
                  <CardContent>
                    <Typography variant="h5">Health Statistics</Typography>
                    <Typography variant="body2">
                      View and analyze health statistics in real-time.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="inherit">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card elevation={6} style={{ backgroundColor: '#1f2a44', color: '#fff',boxShadow: '0 4px 20px rgba(1221, 12, 12, 3)', height: '200px', width: '200px' }}>
                  <CardContent>
                    <Typography variant="h5">Appointment Scheduling</Typography>
                    <Typography variant="body2">
                      Schedule and manage patient appointments effortlessly.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="inherit">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#1f2a44', color: '#fff' }}>
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

      <footer style={{ backgroundColor: '#141e30', color: '#fff', padding: '10px', marginTop: '5%' }}>
        <Typography variant="body2" align="center">
          &copy; 2024 Acme Hospital. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default MainPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   IconButton,
//   AppBar,
//   Toolbar,
//   Typography,
//   Menu,
//   MenuItem,
//   Paper,
//   Stack,
//   FormControl,
//   InputLabel,
//   Select,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Grid,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';
// import { ExitToApp, MoreVert } from '@mui/icons-material';
// import { motion } from 'framer-motion'; // Import framer-motion for animations
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   typography: {
//     fontFamily: ['Tiro Tamil', 'cursive'].join(','),
//   },
// });

// function MainPage() {
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [showFindDoctor, setShowFindDoctor] = useState(false);
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState('');
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const handleSignOut = () => {
//     localStorage.removeItem('user');
//     navigate('/');
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleFindDoctorClick = () => {
//     setShowFindDoctor(!showFindDoctor);
//   };

//   const handleNavigateToHome = () => {
//     navigate('/Homepage'); // Navigate to the Homepage
//   };

//   const handleCardClick = (service) => {
//     setSelectedService(service);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedService(null);
//   };

//   const departments = [
//     { id: 1, name: 'Neurology' },
//     { id: 2, name: 'Cardiology' },
//     { id: 3, name: 'Pediatrics' },
//     { id: 4, name: 'Orthopedics' },
//   ];

//   const doctors = {
//     Neurology: ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee'],
//     Cardiology: ['Dr. Brown', 'Dr. Davis', 'Dr. Wilson'],
//     Pediatrics: ['Dr. Taylor', 'Dr. Anderson', 'Dr. Thomas'],
//     Orthopedics: ['Dr. Jackson', 'Dr. White', 'Dr. Harris'],
//   };

//   const hospitalServices = [
//     { name: 'Patient Management', details: 'Easily manage patient records and appointments.', phone: '123-456-7890' },
//     { name: 'Health Statistics', details: 'View and analyze health statistics in real-time.', phone: '234-567-8901' },
//     { name: 'Appointment Scheduling', details: 'Schedule and manage patient appointments effortlessly.', phone: '345-678-9012' },
//   ];

//   return (
//     <ThemeProvider theme={theme}>
//       <div className="main-page" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(to right, #141e30, #243b55)', height: '100vh' }}>
//         <AppBar position="static" style={{ backgroundColor: '#00796b' }}>
//           <Toolbar>
//             <Typography variant="h5" noWrap component="div" style={{ flexGrow: 1 }}>
//               WhaleRise Hospital
//             </Typography>
//             <Button color="inherit" onClick={handleNavigateToHome}>
//               Home
//             </Button>
//             <IconButton onClick={handleMenuOpen} style={{ marginLeft: 'auto' }}>
//               <MoreVert />
//             </IconButton>

//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//             >
//               <MenuItem onClick={handleFindDoctorClick}>Find a Doctor</MenuItem>
//               <MenuItem onClick={handleSignOut}>
//                 <ExitToApp /> Sign Out
//               </MenuItem>
//             </Menu>
//           </Toolbar>
//         </AppBar>

//         <main style={{ padding: '40px' }}>
//           <Stack spacing={4}>
//             <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#00796b', color: '#fff' }}>
//               <Typography variant="h4" gutterBottom>
//                 Welcome to WhaleRise Hospital
//               </Typography>
//               <Typography variant="body1">
//                 Providing exceptional healthcare for over 50 years.
//               </Typography>
//             </Paper>

//             {showFindDoctor && (
//               <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#00796b', color: '#fff' }}>
//                 <Typography variant="h5" gutterBottom>
//                   Find a Doctor
//                 </Typography>
//                 <FormControl fullWidth>
//                   <InputLabel id="department-label" style={{ color: '#fff' }}>
//                     Select Department
//                   </InputLabel>
//                   <Select
//                     labelId="department-label"
//                     value={selectedDepartment}
//                     onChange={(e) => {
//                       setSelectedDepartment(e.target.value);
//                       setSelectedDoctor('');
//                     }}
//                     style={{ color: '#fff' }}
//                   >
//                     <MenuItem value="" style={{ color: '#fff' }}>
//                       Select Department
//                     </MenuItem>
//                     {departments.map(department => (
//                       <MenuItem key={department.id} value={department.name} style={{ color: '#fff' }}>
//                         {department.name}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>

//                 <FormControl fullWidth>
//                   <InputLabel id="doctor-label" style={{ color: '#fff' }}>
//                     Select Doctor
//                   </InputLabel>
//                   <Select
//                     labelId="doctor-label"
//                     value={selectedDoctor}
//                     onChange={(e) => setSelectedDoctor(e.target.value)}
//                     disabled={!selectedDepartment}
//                     style={{ color: '#fff' }}
//                   >
//                     <MenuItem value="" style={{ color: '#fff' }}>
//                       Select Doctor
//                     </MenuItem>
//                     {selectedDepartment && doctors[selectedDepartment]?.map((doctor, index) => (
//                       <MenuItem key={index} value={doctor} style={{ color: '#fff' }}>
//                         {doctor}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Paper>
//             )}

//             <Grid container spacing={4} justifyContent="center">
//               {/* Animated Card Example */}
//               {hospitalServices.map((service, index) => (
//                 <Grid item xs={12} sm={4} md={3} key={index}>
//                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                     <Card elevation={6} style={{ backgroundColor: '#1f2a44', color: '#fff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                       <CardContent>
//                         <Typography variant="h5">{service.name}</Typography>
//                         <Typography variant="body2">{service.details}</Typography>
//                       </CardContent>
//                       <CardActions>
//                         <Button size="small" color="inherit" onClick={() => handleCardClick(service)}>Learn More</Button>
//                       </CardActions>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>

//             <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#1f2a44', color: '#fff' }}>
//               <Typography variant="h5" gutterBottom>
//                 About Our Hospital
//               </Typography>
//               <Typography variant="body1">
//                 Thimingalam Hospital is a leading healthcare provider in the city, offering a wide range of medical services and treatments. Our team of highly skilled doctors and nurses work tirelessly to ensure the well-being of our patients.
//               </Typography>
//               <br />
//               <Typography variant="body1">
//                 With state-of-the-art facilities and cutting-edge technology, we strive to deliver the best possible care to our community. Our commitment to excellence is evident in our patient satisfaction ratings and the trust placed in us by our peers.
//               </Typography>
//             </Paper>
//           </Stack>
//         </main>

//         <footer style={{ backgroundColor: '#141e30', color: '#fff', padding: '10px', marginTop: '5%' }}>
//           <Typography variant="body2" align="center">
//             &copy; 2024 Thimingalam Hospital. All rights reserved.
//           </Typography>
//         </footer>

//         {/* Dialog for Service Details */}
//         <Dialog open={openDialog} onClose={handleCloseDialog}>
//           <DialogTitle>{selectedService?.name}</DialogTitle>
//           <DialogContent>
//             <Typography>{selectedService?.details}</Typography>
//             <Typography>Contact: {selectedService?.phone}</Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default MainPage;
