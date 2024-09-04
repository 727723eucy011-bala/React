import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import './Homepage.css'; // You can add custom CSS styles here

function Homepage() {
  const hospitalServices = [
    'Emergency Care',
    'Surgery',
    'Pediatrics',
    'Cardiology',
    // Add more services as needed
  ];

  const coursesProvided = [
    'Nursing',
    'Medical Lab Technology',
    'Radiology',
    // Add more courses as needed
  ];

  const topBranches = [
    'New York',
    'Los Angeles',
    'Chicago',
    // Add more branches as needed
  ];

  const awardsAndRewards = [
    { award: 'Best Hospital 2023', reward: 'Healthcare Excellence Award' },
    { award: 'Top Cardiology Centre', reward: 'Gold Standard in Heart Care' },
    // Add more awards and rewards as needed
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Our Hospital
      </Typography>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h5">Our Services</Typography>
        {hospitalServices.map((service, index) => (
          <Card key={index} sx={{ marginTop: '10px' }}>
            <CardContent>
              <Typography>{service}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h5">Courses Provided</Typography>
        {coursesProvided.map((course, index) => (
          <Card key={index} sx={{ marginTop: '10px' }}>
            <CardContent>
              <Typography>{course}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h5">Top Branches</Typography>
        {topBranches.map((branch, index) => (
          <Card key={index} sx={{ marginTop: '10px' }}>
            <CardContent>
              <Typography>{branch}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h5">Awards and Rewards</Typography>
        {awardsAndRewards.map((item, index) => (
          <Card key={index} sx={{ marginTop: '10px' }}>
            <CardContent>
              <Typography variant="h6">{item.award}</Typography>
              <Typography variant="body2">{item.reward}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Homepage;
