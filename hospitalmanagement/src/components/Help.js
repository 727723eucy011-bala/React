import React from 'react';
import { Paper, Typography } from '@mui/material';

const Help = () => {
    return (
        <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', backgroundColor: 'transparent', color: 'white' }}>
            <Typography variant="h4" gutterBottom>
                Help & Support
            </Typography>
            <Typography variant="body1">
                If you have any questions or need assistance, please reach out to our helpline.
                Our team is available 24/7 to assist you with any inquiries.
            </Typography>
            <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
                Helpline Number:
            </Typography>
            <Typography variant="body1">
                Call us at (91) 654-3210 for immediate assistance.
            </Typography>
        </Paper>
    );
};

export default Help;
