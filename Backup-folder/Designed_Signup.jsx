import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    TextField,
    Typography,
    Card as MuiCard,
    Divider,Stack,
    Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    maxWidth: '400px',
    // maxHeight:'650px',
    backgroundColor: 'rgba(255, 255, 255, 0.30)', 
    backdropFilter: 'blur(30px)',  
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 2.22)', 
    borderRadius: theme.shape.borderRadius,
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    padding: theme.spacing(2),
    justifyContent:'center',
    backgroundImage:`url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KG5qLTk4PepnCPmC5Yxd7QHaEK%26pid%3DApi&f=1&ipt=9bcf59e20f3b33459eaac8776e46a798ddf1a42e71e54c165593de743bdd5193&ipo=images)`,
    backgroundSize: 'cover',
    backgroundPosition:'center',
}));


const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [error, setError] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const navigate = useNavigate();
    const handleSignUpRedirect = () => {
        navigate('/');
    }

    const handler = async (e) => {
        e.preventDefault();
        setError("");
        setPasswordError("");

        if (!username || !password) {
            setError("Username and password are required.");
            return;
        }

        if (password === cpassword) {
            const newUser = {
                name: username,
                password: password,
                email: email,
            };

            try {
                const response = await axios.post('http://localhost:3000/users', newUser);
                if (response.status === 201) {
                    alert("User registered successfully!");
                    navigate('/login'); // Redirect to login page after successful signup
                }
            } catch (err) {
                console.error("Error registering user:", err);
                setError("Failed to register user.");
            }
        } else {
            setPasswordError("Passwords do not match.");
        }
    };

    return (
        <SignInContainer direction="column" justifyContent="center">
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{ margin:'2%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Card variant="outlined">
                    <Avatar 
                        alt="User Avatar" 
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7gUunYcYIivgGsb5GJiTygHaHa%26pid%3DApi&f=1&ipt=722ac69815c9bb8dd692d7a0b3fa99231a49174878997e03e05cdaad46700a10&ipo=images"
                        sx={{ width: 60, height: 56, marginBottom: 2 }} 
                    />
                     <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    Welcome to Our Hospital
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#fff' }}>
                    Your health is our priority. Please log in to access your appointments and more.
                </Typography>
                <Divider  orientation="horizontal" sx={{ mx: 1 }} />
            </Box>
            <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
Signup                </Typography>
                    <Box component="form" onSubmit={handler} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            required
                            fullWidth
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            required
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            required
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            required
                            fullWidth
                            value={cpassword}
                            onChange={(e) => setCpassword(e.target.value)}
                        />
                        <Button type="submit" variant="contained" fullWidth>
                            Signup
                        </Button>
                        {error && <Typography color="error">{error}</Typography>}
                        {passworderror && <Typography color="pink">{passworderror}</Typography>}
                        <Divider sx={{ mx: 2 }} />
                    
                    <Typography align="center">
                        Already have an account? 
                        <span style={{ cursor: 'pointer', color: '#1976d2', fontWeight: 'bold' }} onClick={handleSignUpRedirect}>
                            Login
                        </span>
                    </Typography>
                    </Box>
                </Card>
            <Card sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',backdropFilter: 'blur(30px)', boxShadow: '0px 10px 30px rgba(0, 0, 0, 1.22)'  }}>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center' ,}}>
                    Welcome to Aura Hospital!<br />
                    Join us in providing the best care for our patients.
                </Typography>
            </Card>        

            </Box>
        </Box>
        </SignInContainer>
    );
};

export default Signup;
