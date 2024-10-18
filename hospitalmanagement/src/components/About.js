import React from 'react';
import { Paper, Typography } from '@mui/material';

const About = () => {
    return (
        <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', backgroundColor: 'transparent', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
                About WhaleRise Hospital
            </Typography>
            <Typography variant="body1">
                WhaleRise Hospital is committed to providing high-quality healthcare services to our community. 
                Our dedicated team of professionals ensures that every patient receives personalized care.
            </Typography>
            <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                Our Branches:
            </Typography>
            <ul>
                <li><strong>Downtown Branch:</strong> 123 Main St, Cityville - (91) 123-4567</li>
                <li><strong>Uptown Branch:</strong> 456 Elm St, Cityville - (91) 234-5678</li>
                <li><strong>Suburban Branch:</strong> 789 Oak St, Cityville - (91) 345-6789</li>
            </ul>
        </Paper>
    );
};

export default About;
