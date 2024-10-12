import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    Grid,
} from '@mui/material';

const AppointmentBooking = () => {
    const [doctors, setDoctors] = useState([]);
    const [doctorName, setDoctorName] = useState("");
    const [patientname, setPatientName] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [message, setMessage] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);

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
                patient_name: patientname, // Replace with actual patient name if needed
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
        <Container>
            <Typography variant="h4" gutterBottom>
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
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField  
                            required
                            label="Patient Name"
                            // type="pname"
                            variant="outlined"
                            fullWidth
                            value={patientname}
                            onChange={(e) => setPatientName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField  
                            required
                            label="Appointment Date"
                            type="date"
                            variant="outlined"
                            fullWidth
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                    Book Appointment
                </Button>
            </form>
            {message && <Typography variant="body1" style={{ marginTop: '16px' }}>{message}</Typography>}

            {/* Display filtered doctors in cards */}
            {filteredDoctors.length > 0 && (
                <>
                    <Typography variant="h5" gutterBottom style={{ marginTop: '32px' }}>
                        Available Doctors
                    </Typography>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        {filteredDoctors.map((doctor, index) => (
                            <Card key={index} style={{ minWidth: 250 }} onClick={() => setDoctorName(doctor.name)}>
                                <CardContent>
                                    <Typography variant="h6">{doctor.name}</Typography>
                                    <Typography color="textSecondary">{doctor.speciality}</Typography>
                                    <Typography color="textSecondary">Phone: {doctor.phone}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </>
            )}
        </Container>
    );
};

export default AppointmentBooking;
