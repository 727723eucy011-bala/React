// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [cpassword, setCpassword] = useState("");
//     const [error, setError] = useState("");
//     const [passworderror, setPasswordError] = useState("");
//     const [success, setSuccess] = useState("");
//     const navigate = useNavigate();

//     const handler = async (e) => {
//         e.preventDefault();
//         setError("");
//         setSuccess("");

//         // Simple validation
//         if (!username || !password) {
//             setError("Username and password are required.");
//             return;
//         }

//         // Create a new user object
//         if (password===cpassword)
//         {   const newUser = {
//                 name: username,
//                 password: password,
//                 email:email,
//             };

//         try {
//             // Send POST request to add the new user
//             const response = await axios.post('http://localhost:3000/users', newUser);
            
//             if (response.status === 201) {
//                 alert("User registered successfully!");
                
//                 navigate('/login');
//             }
//         } catch (err) {
//             console.error("Error registering user:", err);
//             setError("Failed to register user.");
//         }
//     }
//     else{
//         setPasswordError("Passwords do not match.");
//     }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={handler}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="Confirm password"
//                     placeholder="Conform Password"
//                     value={cpassword}
//                     onChange={(e) => setCpassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Signup</button>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 {success && <p style={{ color: 'green' }}>{success}</p>}
//                 {passworderror && <p style={{ color: 'pink' }}>{passworderror}</p>}
//             </form>
//         </div>
//     );
// };

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    TextField,
    Typography,
    Card as MuiCard,
    Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    maxWidth: '450px',
}));

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [error, setError] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const navigate = useNavigate();

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
                    navigate('/login');
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
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Box
                sx={{ margin:'3%',width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Card variant="outlined">
                    <Typography component="h1" variant="h4" sx={{ textAlign: 'center' }}>
                        Sign Up
                    </Typography>
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
                    </Box>
                </Card>
            </Box>

            <Divider orientation="vertical" flexItem sx={{ height: '100%', marginLeft:'1%'}} />

            <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h5" component="h2" sx={{ textAlign: 'center' }}>
                    Welcome to Aura Hospital!<br />
                    Join us in providing the best care for our patients.
                </Typography>
            </Box>
        </Box>
        
    );
};

export default Signup;
