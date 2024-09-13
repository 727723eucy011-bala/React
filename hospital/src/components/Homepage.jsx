import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Styles for the card and blur effect
const cardStyle = {
  width: '200px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '#00796b',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)', // Dark intense shadow
  borderRadius: '8px',
  position: 'relative',
  zIndex: 1, // Ensure cards are above the background
};

function Homepage() {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isBlurred, setIsBlurred] = useState(false); // State for blur effect

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
    setIsBlurred(true); // Enable blur effect
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
    setIsBlurred(false); // Disable blur effect
  };

  return (
    <Box 
      sx={{ 
        padding: '20px', 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'linear-gradient(to bottom, #00796b, #004d40)', // Gradient background
        height: '100vh', 
        color: 'white',
        filter: isBlurred ? 'blur(5px)' : 'none', // Apply blur effect
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Welcome to Our Hospital
      </Typography>

      <Button variant="contained" onClick={handleNavigateToMainPage} sx={{ mb: 3, backgroundColor: 'white', color: '#00796b' }}>
        Go to Main Page
      </Button>

      {/* Cards for Services */}
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={2}>
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

      {/* Dialog for Service Details */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedService?.name}</DialogTitle>
        <DialogContent>
          <Typography>{selectedService?.details}</Typography>
          <Typography>Contact: {selectedService?.phone}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Homepage;
