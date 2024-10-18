// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     AppBar, Toolbar, TextField, Button,
//     Typography, Card as MuiCard, CardContent, Grid, Stack,
//     Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
// } from '@mui/material';
// import background from './background.jpg';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';

// const SignInContainer = styled(Stack)(({ theme }) => ({
//     minHeight: '100vh',
//     padding: theme.spacing(2),
//     justifyContent: 'center',
//     backgroundImage: `url(${background})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     textAlign: 'center'
// }));

// const Card = styled(MuiCard)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     alignSelf: 'center',
//     width: '100%',
//     padding: theme.spacing(4),
//     gap: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: '400px',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     backdropFilter: 'blur(30px)',
//     boxShadow: '0px 10px 30px rgba(0, 0, 0, 2.22)',
//     borderRadius: theme.shape.borderRadius,
// }));

// const AppointmentBooking = () => {
//     const [doctors, setDoctors] = useState([]);
//     const [appointments, setAppointments] = useState([]);
//     const [doctorName, setDoctorName] = useState("");
//     const [patientName, setPatientName] = useState("");
//     const [appointmentDate, setAppointmentDate] = useState("");
//     const [message, setMessage] = useState("");
//     const [filteredDoctors, setFilteredDoctors] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/doctors');
//                 setDoctors(response.data);
//             } catch (error) {
//                 console.error("Error fetching doctors:", error);
//             }
//         };

//         const fetchAppointments = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/appointmentfixed');
//                 setAppointments(response.data);
//             } catch (error) {
//                 console.error("Error fetching appointments:", error);
//             }
//         };

//         fetchDoctors();
//         fetchAppointments();
//     }, []);

//     const handleAppointment = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         const filtered = doctors.filter(doctor =>
//             doctor.name.toLowerCase() === doctorName.toLowerCase()
//         );

//         if (filtered.length > 0) {
//             const doctor = filtered[0];

//             if (doctor.holiday_dates.includes(appointmentDate)) {
//                 setMessage("Try to make an appointment on another date.");
//                 return;
//             }

//             alert(`Appointment fixed with ${doctor.name} on ${appointmentDate}`);

//             const appointmentData = {
//                 patient_name: patientName,
//                 appointed_doctor: doctor.name,
//                 date: appointmentDate,
//                 time: new Date().toLocaleString(),
//             };

//             try {
//                 await axios.post('http://localhost:3000/appointmentfixed', appointmentData);
//                 setAppointments([...appointments, appointmentData]);
//             } catch (error) {
//                 console.error("Error registering appointment:", error);
//             }
//         } else {
//             setMessage("No matching doctors found.");
//         }
//     };

//     const handleDoctorNameChange = (e) => {
//         const value = e.target.value;
//         setDoctorName(value);

//         if (value) {
//             const filtered = doctors.filter(doctor =>
//                 doctor.name.toLowerCase().includes(value.toLowerCase())
//             );
//             setFilteredDoctors(filtered);
//         } else {
//             setFilteredDoctors([]);
//         }
//     };

//     // New function to handle selecting a doctor
//     const handleDoctorSelect = (doctor) => {
//         setDoctorName(doctor.name); // Set selected doctor's name
//         setFilteredDoctors([]); // Clear suggestions
//     };

//     // Function to handle deleting an appointment
//     const handleDeleteAppointment = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3000/appointmentfixed/${id}`);
//             // Update the appointments state after deletion
//             setAppointments(prevAppointments => prevAppointments.filter(app => app.id === id));
//             setMessage("Appointment successfully deleted.");
//         } catch (error) {
//             console.error("Error deleting appointment:", error);
//             setMessage("Failed to delete the appointment.");
//         }
//     };

//     return (
//         <SignInContainer direction="column" justifyContent="center">
//             <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
//                 <Toolbar>
//                     <Typography variant="h6" sx={{ flexGrow: 2 }}>
//                         Aura Hospital
//                     </Typography>
//                     <Button color="inherit" onClick={() => navigate('/signup')}>Sign</Button>
//                 </Toolbar>
//             </AppBar>
//             <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
//                 Book an Appointment
//             </Typography>

//             <Card>
//                 <CardContent>
//                     <form onSubmit={handleAppointment}>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     label="Doctor's Name"
//                                     variant="outlined"
//                                     value={doctorName}
//                                     onChange={handleDoctorNameChange}
//                                     required
//                                     InputLabelProps={{
//                                         style: { color: 'white' },
//                                     }}
//                                     InputProps={{
//                                         style: { color: 'white' },
//                                     }}
//                                 />
//                                 {filteredDoctors.length > 0 && (
//                                     <TableContainer component={Paper} style={{ marginTop: '8px', backgroundColor: '#222' }}>
//                                         <Table>
//                                             <TableHead>
//                                                 <TableRow>
//                                                     <TableCell style={{ color: 'white' }}>Doctor Name</TableCell>
//                                                     <TableCell style={{ color: 'white' }}>Speciality</TableCell>
//                                                     <TableCell style={{ color: 'white' }}>Phone</TableCell>
//                                                 </TableRow>
//                                             </TableHead>
//                                             <TableBody>
//                                                 {filteredDoctors.map((doctor) => (
//                                                     <TableRow key={doctor.id} hover onClick={() => handleDoctorSelect(doctor)}>
//                                                         <TableCell style={{ color: 'white' }}>{doctor.name}</TableCell>
//                                                         <TableCell style={{ color: 'white' }}>{doctor.speciality}</TableCell>
//                                                         <TableCell style={{ color: 'white' }}>{doctor.phone}</TableCell>
//                                                     </TableRow>
//                                                 ))}
//                                             </TableBody>
//                                         </Table>
//                                     </TableContainer>
//                                 )}
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     label="Patient Name"
//                                     variant="outlined"
//                                     value={patientName}
//                                     onChange={(e) => setPatientName(e.target.value)}
//                                     InputLabelProps={{
//                                         style: { color: 'white' },
//                                     }}
//                                     InputProps={{
//                                         style: { color: 'white' },
//                                     }}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     required
//                                     label="Appointment Date"
//                                     type="date"
//                                     value={appointmentDate}
//                                     onChange={(e) => setAppointmentDate(e.target.value)}
//                                     InputLabelProps={{
//                                         shrink: true,
//                                         style: { color: 'white' },
//                                     }}
//                                     InputProps={{
//                                         style: { color: 'white' },
//                                     }}
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
//                             Book Appointment
//                         </Button>
//                     </form>

//                     {message && (
//                         <Typography variant="body1" style={{ marginTop: '16px', color: 'white' }}>
//                             {message}
//                         </Typography>
//                     )}
//                 </CardContent>
//             </Card>

//             {/* Review appointments section */}
//             <Typography variant="h4" gutterBottom style={{ color: 'white', marginTop:'32px' }}>
//                 Review Appointments
//             </Typography>
//             <Grid container spacing={2}>
//                 {appointments.length > 0 ? (
//                     appointments.map((appointment) => (
//                         <Grid item xs={12} md={4} key={appointment.id}>
//                             <Card style={{ backgroundColor: '#333', color: 'white', padding: '16px' }}>
//                                 <CardContent>
//                                     <Typography variant="h6">Patient: {appointment.patient_name}</Typography>
//                                     <Typography>Doctor: {appointment.appointed_doctor}</Typography>
//                                     <Typography>Date: {appointment.date}</Typography>
//                                     <Typography>Time: {appointment.time}</Typography>
//                                     {/* Delete button for each appointment */}
//                                     <Button
//                                         variant="contained"
//                                         color="secondary"
//                                         style={{ marginTop: '16px' }}
//                                         onClick={() => handleDeleteAppointment(appointment.id)}
//                                     >
//                                         Delete
//                                     </Button>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))
//                 ) : (
//                     <Typography variant="body1" style={{ color: 'white', padding:'25px' }}>
//                         No appointments found.
//                     </Typography>
//                 )}
//             </Grid>

//         </SignInContainer>
//     );
// };

// export default AppointmentBooking;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     AppBar, Toolbar, TextField, Button,
//     Typography, Card as MuiCard, CardContent, Grid, Stack,
//     Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
// } from '@mui/material';
// import background from './background.jpg';
// import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/material/styles';

// const SignInContainer = styled(Stack)(({ theme }) => ({
//     minHeight: '100vh',
//     padding: theme.spacing(2),
//     justifyContent: 'center',
//     backgroundImage: `url(${background})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     textAlign: 'center'
// }));

// const Card = styled(MuiCard)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     alignSelf: 'center',
//     width: '100%',
//     padding: theme.spacing(4),
//     gap: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: '400px',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     backdropFilter: 'blur(30px)',
//     boxShadow: '0px 10px 30px rgba(0, 0, 0, 2.22)',
//     borderRadius: theme.shape.borderRadius,
// }));

// const AppointmentBooking = () => {
//     const [doctors, setDoctors] = useState([]);
//     const [appointments, setAppointments] = useState([]);
//     const [doctorName, setDoctorName] = useState("");
//     const [patientName, setPatientName] = useState("");
//     const [appointmentDate, setAppointmentDate] = useState("");
//     const [message, setMessage] = useState("");
//     const [filteredDoctors, setFilteredDoctors] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchDoctors = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/doctors');
//                 setDoctors(response.data);
//             } catch (error) {
//                 console.error("Error fetching doctors:", error);
//             }
//         };

//         const fetchAppointments = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/appointmentfixed');
//                 setAppointments(response.data);
//             } catch (error) {
//                 console.error("Error fetching appointments:", error);
//             }
//         };

//         fetchDoctors();
//         fetchAppointments();
//     }, []);

//     const handleAppointment = async (e) => {
//         e.preventDefault();
//         setMessage("");

//         // Check if the appointment date is in the past
//         const selectedDate = new Date(appointmentDate);
//         const currentDate = new Date();

//         if (selectedDate < currentDate) {
//             setMessage("Selected date cannot be in the past.");
//             return;
//         }

//         const filtered = doctors.filter(doctor =>
//             doctor.name.toLowerCase() === doctorName.toLowerCase()
//         );

//         if (filtered.length > 0) {
//             const doctor = filtered[0];

//             if (doctor.holiday_dates.includes(appointmentDate)) {
//                 setMessage("Try to make an appointment on another date.");
//                 return;
//             }

//             alert(`Appointment fixed with ${doctor.name} on ${appointmentDate}`);

//             const appointmentData = {
//                 patient_name: patientName,
//                 appointed_doctor: doctor.name,
//                 date: appointmentDate,
//                 time: new Date().toLocaleString(),
//             };

//             try {
//                 await axios.post('http://localhost:3000/appointmentfixed', appointmentData);
//                 setAppointments([...appointments, appointmentData]);
//             } catch (error) {
//                 console.error("Error registering appointment:", error);
//             }
//         } else {
//             setMessage("No matching doctors found.");
//         }
//     };

//     const handleDoctorNameChange = (e) => {
//         const value = e.target.value;
//         setDoctorName(value);

//         if (value) {
//             const filtered = doctors.filter(doctor =>
//                 doctor.name.toLowerCase().includes(value.toLowerCase())
//             );
//             setFilteredDoctors(filtered);
//         } else {
//             setFilteredDoctors([]);
//         }
//     };

//     // New function to handle selecting a doctor
//     const handleDoctorSelect = (doctor) => {
//         setDoctorName(doctor.name); // Set selected doctor's name
//         setFilteredDoctors([]); // Clear suggestions
//     };

//    // Function to handle deleting an appointment
//    const handleDeleteAppointment = async (id) => {
//        try {
//            await axios.delete(`http://localhost:3000/appointmentfixed/${id}`);
//            // Update the appointments state after deletion
//            setAppointments(prevAppointments => prevAppointments.filter(app => app.id !== id));
//            setMessage("Appointment successfully deleted.");
//        } catch (error) {
//            console.error("Error deleting appointment:", error);
//            setMessage("Failed to delete the appointment.");
//        }
//    };

//    return (
//        <SignInContainer direction="column" justifyContent="center">
//            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
//                <Toolbar>
//                    <Typography variant="h6" sx={{ flexGrow: 2 }}>
//                        Aura Hospital
//                    </Typography>
//                    <Button color="inherit" onClick={() => navigate('/signup')}>Sign</Button>
//                </Toolbar>
//            </AppBar>
//            <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
//                Book an Appointment
//            </Typography>

//            <Card>
//                <CardContent>
//                    <form onSubmit={handleAppointment}>
//                        <Grid container spacing={2}>
//                            <Grid item xs={12}>
//                                <TextField
//                                    label="Doctor's Name"
//                                    variant="outlined"
//                                    value={doctorName}
//                                    onChange={handleDoctorNameChange}
//                                    required
//                                    InputLabelProps={{
//                                        style: { color: 'white' },
//                                    }}
//                                    InputProps={{
//                                        style: { color: 'white' },
//                                    }}
//                                />
//                                {filteredDoctors.length > 0 && (
//                                    <TableContainer component={Paper} style={{ marginTop: '8px', backgroundColor: '#222' }}>
//                                        <Table>
//                                            <TableHead>
//                                                <TableRow>
//                                                    <TableCell style={{ color: 'white' }}>Doctor Name</TableCell>
//                                                    <TableCell style={{ color: 'white' }}>Speciality</TableCell>
//                                                    <TableCell style={{ color: 'white' }}>Phone</TableCell>
//                                                </TableRow>
//                                            </TableHead>
//                                            <TableBody>
//                                                {filteredDoctors.map((doctor) => (
//                                                    <TableRow key={doctor.id} hover onClick={() => handleDoctorSelect(doctor)}>
//                                                        <TableCell style={{ color: 'white' }}>{doctor.name}</TableCell>
//                                                        <TableCell style={{ color: 'white' }}>{doctor.speciality}</TableCell>
//                                                        <TableCell style={{ color: 'white' }}>{doctor.phone}</TableCell>
//                                                    </TableRow>
//                                                ))}
//                                            </TableBody>
//                                        </Table>
//                                    </TableContainer>
//                                )}
//                            </Grid>
//                            <Grid item xs={12}>
//                                <TextField
//                                    required
//                                    label="Patient Name"
//                                    variant="outlined"
//                                    value={patientName}
//                                    onChange={(e) => setPatientName(e.target.value)}
//                                    InputLabelProps={{
//                                        style: { color: 'white' },
//                                    }}
//                                    InputProps={{
//                                        style: { color: 'white' },
//                                    }}
//                                />
//                            </Grid>
//                            <Grid item xs={12}>
//                                <TextField
//                                    required
//                                    label="Appointment Date"
//                                    type="date"
//                                    value={appointmentDate}
//                                    onChange={(e) => setAppointmentDate(e.target.value)}
//                                    InputLabelProps={{
//                                        shrink: true,
//                                        style: { color: 'white' },
//                                    }}
//                                    InputProps={{
//                                        style: { color: 'white' },
//                                    }}
//                                />
//                            </Grid>
//                        </Grid>
//                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
//                            Book Appointment
//                        </Button>
//                    </form>

//                    {message && (
//                        <Typography variant="body1" style={{ marginTop: '16px', color: 'white' }}>
//                            {message}
//                        </Typography>
//                    )}
//                </CardContent>
//            </Card>

//            {/* Review appointments section */}
//            <Typography variant="h4" gutterBottom style={{ color: 'white', marginTop:'32px' }}>
//                Review Appointments
//            </Typography>
//            <Grid container spacing={2}>
//                {appointments.length > 0 ? (
//                    appointments.map((appointment) => (
//                        <Grid item xs={12} md={4} key={appointment.id}>
//                            <Card style={{ backgroundColor: '#333', color: 'white', padding: '16px' }}>
//                                <CardContent>
//                                    <Typography variant="h6">Patient: {appointment.patient_name}</Typography>
//                                    <Typography>Doctor: {appointment.appointed_doctor}</Typography>
//                                    <Typography>Date: {appointment.date}</Typography>
//                                    <Typography>Time: {appointment.time}</Typography>
//                                    {/* Delete button for each appointment */}
//                                    <Button
//                                        variant="contained"
//                                        color="secondary"
//                                        style={{ marginTop: '16px' }}
//                                        onClick={() => handleDeleteAppointment(appointment.id)}
//                                    >
//                                        Delete
//                                    </Button>
//                                </CardContent>
//                            </Card>
//                        </Grid>
//                    ))
//                ) : (
//                    <Typography variant="body1" style={{ color: 'white', padding:'25px' }}>
//                        No appointments found.
//                    </Typography>
//                )}
//            </Grid>

//        </SignInContainer>
//    );
// };

// export default AppointmentBooking;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    AppBar, Toolbar, TextField, Button,
    Typography, Card as MuiCard, CardContent, Grid, Stack,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import background from './background.jpg';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const SignInContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    padding: theme.spacing(2),
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center'
}));

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(30px)',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 2.22)',
    borderRadius: theme.shape.borderRadius,
}));

const AppointmentBooking = () => {
    const [doctors, setDoctors] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [doctorName, setDoctorName] = useState("");
    const [patientName, setPatientName] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [message, setMessage] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const navigate = useNavigate();

    // Array of user IDs (for demonstration purposes)
    const userIds = [1, 2, 3]; // Example user IDs that have permission to delete appointments

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:3000/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };

        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:3000/appointmentfixed');
                setAppointments(response.data);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchDoctors();
        fetchAppointments();
    }, []);

    const handleAppointment = async (e) => {
        e.preventDefault();
        setMessage("");

        // Check if the appointment date is in the past
        const selectedDate = new Date(appointmentDate);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            setMessage("Selected date cannot be in the past.");
            return;
        }

        const filtered = doctors.filter(doctor =>
            doctor.name.toLowerCase() === doctorName.toLowerCase()
        );

        if (filtered.length > 0) {
            const doctor = filtered[0];

            if (doctor.holiday_dates.includes(appointmentDate)) {
                setMessage("Try to make an appointment on another date.");
                return;
            }

            alert(`Appointment fixed with ${doctor.name} on ${appointmentDate}`);

            const appointmentData = {
                patient_name: patientName,
                appointed_doctor: doctor.name,
                date: appointmentDate,
                time: new Date().toLocaleString(),
            };

            try {
                await axios.post('http://localhost:3000/appointmentfixed', appointmentData);
                setAppointments([...appointments, appointmentData]);
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

        if (value) {
            const filtered = doctors.filter(doctor =>
                doctor.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredDoctors(filtered);
        } else {
            setFilteredDoctors([]);
        }
    };

   // New function to handle selecting a doctor
   const handleDoctorSelect = (doctor) => {
       setDoctorName(doctor.name); // Set selected doctor's name
       setFilteredDoctors([]); // Clear suggestions
   };

   // Function to handle deleting an appointment
   const handleDeleteAppointment = async (id) => {
       // Check if the user ID is in the allowed list
       if (!userIds.includes(id)) {
           setMessage("You do not have permission to delete this appointment.");
           return;
       }

       try {
           await axios.delete(`http://localhost:3000/appointmentfixed/${id}`);
           // Update the appointments state after deletion
           setAppointments(prevAppointments => prevAppointments.filter(app => app.id !== id));
           setMessage("Appointment successfully deleted.");
       } catch (error) {
           console.error("Error deleting appointment:", error);
           setMessage("Failed to delete the appointment.");
       }
   };

   return (
       <SignInContainer direction="column" justifyContent="center">
           <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
               <Toolbar>
                   <Typography variant="h6" sx={{ flexGrow: 2 }}>
                       Aura Hospital
                   </Typography>
                   <Button color="inherit" onClick={() => navigate('/signup')}>Sign</Button>
               </Toolbar>
           </AppBar>
           <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
               Book an Appointment
           </Typography>

           <Card>
               <CardContent>
                   <form onSubmit={handleAppointment}>
                       <Grid container spacing={2}>
                           <Grid item xs={12}>
                               <TextField
                                   label="Doctor's Name"
                                   variant="outlined"
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
                               {filteredDoctors.length > 0 && (
                                   <TableContainer component={Paper} style={{ marginTop: '8px', backgroundColor: '#222' }}>
                                       <Table>
                                           <TableHead>
                                               <TableRow>
                                                   <TableCell style={{ color: 'white' }}>Doctor Name</TableCell>
                                                   <TableCell style={{ color: 'white' }}>Speciality</TableCell>
                                                   <TableCell style={{ color: 'white' }}>Phone</TableCell>
                                               </TableRow>
                                           </TableHead>
                                           <TableBody>
                                               {filteredDoctors.map((doctor) => (
                                                   <TableRow key={doctor.id} hover onClick={() => handleDoctorSelect(doctor)}>
                                                       <TableCell style={{ color: 'white' }}>{doctor.name}</TableCell>
                                                       <TableCell style={{ color: 'white' }}>{doctor.speciality}</TableCell>
                                                       <TableCell style={{ color: 'white' }}>{doctor.phone}</TableCell>
                                                   </TableRow>
                                               ))}
                                           </TableBody>
                                       </Table>
                                   </TableContainer>
                               )}
                           </Grid>
                           <Grid item xs={12}>
                               <TextField
                                   required
                                   label="Patient Name"
                                   variant="outlined"
                                   value={patientName}
                                   onChange={(e) => setPatientName(e.target.value)}
                                   InputLabelProps={{
                                       style: { color: 'white' },
                                   }}
                                   InputProps={{
                                       style: { color: 'white' },
                                   }}
                               />
                           </Grid>
                           <Grid item xs={12}>
                               <TextField
                                   required
                                   label="Appointment Date"
                                   type="date"
                                   value={appointmentDate}
                                   onChange={(e) => setAppointmentDate(e.target.value)}
                                   InputLabelProps={{
                                       shrink: true,
                                       style: { color: 'white' },
                                   }}
                                   InputProps={{
                                       style: { color: 'white' },
                                   }}
                               />
                           </Grid>
                       </Grid>
                       <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                           Book Appointment
                       </Button>
                   </form>

                   {message && (
                       <Typography variant="body1" style={{ marginTop: '16px', color: 'white' }}>
                           {message}
                       </Typography>
                   )}
               </CardContent>
           </Card>

           {/* Review appointments section */}
           <Typography variant="h4" gutterBottom style={{ color: 'white', marginTop:'32px' }}>
               Review Appointments
           </Typography>
           <Grid container spacing={2}>
               {appointments.length > 0 ? (
                   appointments.map((appointment) => (
                       <Grid item xs={12} md={4} key={appointment.id}>
                           <Card style={{ backgroundColor: '#333', color: 'white', padding: '16px' }}>
                               <CardContent>
                                   <Typography variant="h6">Patient: {appointment.patient_name}</Typography>
                                   <Typography>Doctor: {appointment.appointed_doctor}</Typography>
                                   <Typography>Date: {appointment.date}</Typography>
                                   <Typography>Time: {appointment.time}</Typography>
                                   {/* Delete button for each appointment */}
                                   <Button
                                       variant="contained"
                                       color="secondary"
                                       style={{ marginTop: '16px' }}
                                       onClick={() => handleDeleteAppointment(appointment.id)}
                                   >
                                       Delete
                                   </Button>
                               </CardContent>
                           </Card>
                       </Grid>
                   ))
               ) : (
                   <Typography variant="body1" style={{ color: 'white', padding:'25px' }}>
                       No appointments found.
                   </Typography>
               )}
           </Grid>

       </SignInContainer>
   );
};

export default AppointmentBooking;
