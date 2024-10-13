import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {AppBar,Toolbar,
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    Grid,
    Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import InputAdornment,CalendarTodayIcon from '@mui/material';

const AppointmentBooking = () => {
    const [doctors, setDoctors] = useState([]);
    const [doctorName, setDoctorName] = useState("");
    const [patientname, setPatientName] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [message, setMessage] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        // Fetch the list of doctors from the server
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:3000/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };
        fetchDoctors();
    }, []);

    const handleAppointment = async (e) => {
        e.preventDefault();
        setMessage("");

        // Filter doctors based on name
        const filtered = doctors.filter(doctor => 
            doctor.name.toLowerCase() === doctorName.toLowerCase()
        );

        if (filtered.length > 0) {
            const doctor = filtered[0];

            // Check if the selected date is a holiday for the doctor
            if (doctor.holiday_dates.includes(appointmentDate)) {
                setMessage("Try to make an appointment on another date.");
                return;
            }

            // Confirm the appointment
            setMessage(`Appointment fixed with ${doctor.name} on ${appointmentDate}`);

            // Prepare appointment data
            const appointmentData = {
                patient_name: patientname,
                appointed_doctor: doctor.name,
                date: appointmentDate,
                time: new Date().toLocaleString(), // Current date and time when appointment is fixed
            };

            // Post the appointment data to db.json
            try {
                await axios.post('http://localhost:3000/appointmentfixed', appointmentData);
                console.log("Appointment successfully registered:", appointmentData);
            } catch (error) {
                console.error("Error registering appointment:", error);
            }
        } else {
            setMessage("No matching doctors found.");
        }
    };

    const handleDoctorNameChange = (e) => {
        const value = e.target.value;
        setDoctorName(value);

        // Filter doctor names based on input
        if (value) {
            const filtered = doctors.filter(doctor => 
                doctor.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredDoctors(filtered);
        } else {
            setFilteredDoctors([]);
        }
    };

    return (
        <Container style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>

<AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
             Hospital
          </Typography>
          <Button color="inherit" onClick={() => navigate('/signup')}>Sign Out</Button>
          </Toolbar>
          </AppBar>
            <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
                Book an Appointment
            </Typography>
            <form onSubmit={handleAppointment}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <TextField
                            label="Doctor's Name"
                            variant="outlined"
                            fullWidth
                            value={doctorName}
                            onChange={handleDoctorNameChange}
                            required
                            InputLabelProps={{
                                style: { color: 'white' },
                            }}
                            InputProps={{
                                style: { color: 'white' },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField  
                            required
                            label="Patient Name"
                            variant="outlined"
                            fullWidth
                            value={patientname}
                            onChange={(e) => setPatientName(e.target.value)}
                            InputLabelProps={{
                                style: { color: 'white' },
                            }}
                            InputProps={{
                                style: { color: 'white' },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField  style={{boxShadow: '0px 3px 40px rgba(112, 113, 112, 2.22)',borderRadius:'19px'}}
                            required
                            label="Appointment Date"
                            type="date"
                            // variant="outlined"
                            // fullWidth
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                                style: { color: 'white' },
                            }}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                    Book Appointment
                </Button>
            </form>
            {message && <Typography variant="body1" style={{ marginTop: '16px', color: 'white' }}>{message}</Typography>}

            {/* Display filtered doctors in cards */}
            {filteredDoctors.length > 0 && (
                <>
                    <Typography variant="h5" gutterBottom style={{ marginTop: '32px', color: 'white' }}>
                        Available Doctors
                    </Typography>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {filteredDoctors.map((doctor, index) => (
                            <Card 
                                key={index} 
                                style={{ 
                                    minWidth: 250, 
                                    backgroundColor: '#222', 
                                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', 
                                    transition: 'box-shadow 0.3s ease-in-out',
                                }} 
                                onClick={() => setDoctorName(doctor.name)}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 1)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)'}
                            >
                                <CardContent>
                                    <Typography variant="h6" style={{ color: 'white' }}>{doctor.name}</Typography>
                                    <Typography color="white">{doctor.speciality}</Typography>
                                    <Typography color="white">Phone: {doctor.phone}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </>
            )}
            <Divider ></Divider>


        </Container>
        
    );
};

export default AppointmentBooking;
