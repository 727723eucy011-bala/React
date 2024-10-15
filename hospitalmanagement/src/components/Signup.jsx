// import React, { useState } from 'react';
// import axios from 'axios';
// import background from './background.jpg'
// import { useNavigate } from 'react-router-dom';
// import {
//     Box,
//     Button,
//     TextField,
//     Typography,
//     Card as MuiCard,
//     Divider,Stack,
//     Avatar
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const Card = styled(MuiCard)(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     alignSelf: 'center',
//     width: '100%',
//     padding: theme.spacing(4),
//     gap: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: '400px',
//     // maxHeight:'650px',
//     backgroundColor: 'rgba(255, 255, 255, 0.30)', 
//     backdropFilter: 'blur(30px)',  
//     boxShadow: '0px 10px 30px rgba(0, 0, 0, 2.22)', 
//     borderRadius: theme.shape.borderRadius,
// }));

// const SignInContainer = styled(Stack)(({ theme }) => ({
//     minHeight: '100vh',
//     padding: theme.spacing(2),
//     justifyContent:'center',
//     backgroundImage: `url(${background})`,
//     backgroundSize: 'cover',
//     backgroundPosition:'center',
// }));



// const Signup = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [email, setEmail] = useState("");
//     const [cpassword, setCpassword] = useState("");
//     const [error, setError] = useState("");
//     const [passworderror, setPasswordError] = useState("");
//     const navigate = useNavigate();
//     const handleSignUpRedirect = () => {
//         navigate('/login');
//     }


//     const handler = async (e) => {
//         e.preventDefault();
//         setError("");
//         setPasswordError("");

//         if (!username || !password) {
//             setError("Username and password are required.");
//             return;
//         }

//         if (password === cpassword) {
//             const newUser = {
//                 name: username,
//                 password: password,
//                 email: email,
//             };

//             try {
//                 const response = await axios.post('http://localhost:3000/users', newUser);
//                 if (response.status === 201) {
//                     alert("User registered successfully!");
//                     navigate('/login'); // Redirect to login page after successful signup
//                 }
                
//             } catch (err) {
//                 console.error("Error registering user:", err);
//                 setError("Failed to register user.");
//             }
//         } else {
//             setPasswordError("Passwords do not match.");
//         }
//     };

//     return (
//         <SignInContainer direction="column" justifyContent="center">
//         <Box sx={{ display: 'flex' }}>
//             <Box
//                 sx={{ margin:'2%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//             >
//                 <Card variant="outlined">
//                     <Avatar 
//                         alt="User Avatar" 
//                         src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7gUunYcYIivgGsb5GJiTygHaHa%26pid%3DApi&f=1&ipt=722ac69815c9bb8dd692d7a0b3fa99231a49174878997e03e05cdaad46700a10&ipo=images"
//                         sx={{ width: 60, height: 56, marginBottom: 2 }} 
//                     />
//                      <Box sx={{ textAlign: 'center', mb: 4 }}>
//                 <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
//                     Welcome to Our Hospital
//                 </Typography>
//                 <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#fff' }}>
//                     Your health is our priority. Please log in to access your appointments and more.
//                 </Typography>
//                 <Divider  orientation="horizontal" sx={{ mx: 1 }} />
//             </Box>
//             <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
// Signup                </Typography>
//                     <Box component="form" onSubmit={handler} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                         <TextField
//                             label="Username"
//                             variant="outlined"
//                             required
//                             fullWidth
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                         <TextField
//                             label="Email"
//                             type="email"
//                             variant="outlined"
//                             required
//                             fullWidth
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <TextField
//                             label="Password"
//                             type="password"
//                             variant="outlined"
//                             required
//                             fullWidth
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <TextField
//                             label="Confirm Password"
//                             type="password"
//                             variant="outlined"
//                             required
//                             fullWidth
//                             value={cpassword}
//                             onChange={(e) => setCpassword(e.target.value)}
//                         />
//                         <Button type="submit" variant="contained" fullWidth>
//                             Signup
//                         </Button>
//                         {error && <Typography color="error">{error}</Typography>}
//                         {passworderror && <Typography color="pink">{passworderror}</Typography>}
//                         <Divider sx={{ mx: 2 }} />
                    
//                     <Typography align="center">
//                         Already have an account? 
//                         <span style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold' }} onClick={handleSignUpRedirect}>
//                             Login
//                         </span>
//                     </Typography>
//                     </Box>
//                 </Card>
//             </Box>
//         </Box>
//         </SignInContainer>
//     );
// };

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import background from './background.jpg';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    TextField,
    Typography,
    Card as MuiCard,
    Divider,
    Stack,
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
    backgroundColor: 'rgba(255, 255, 255, 0.30)',
    backdropFilter: 'blur(30px)',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 2.22)',
    borderRadius: theme.shape.borderRadius,
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    padding: theme.spacing(2),
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cpassword, setCpassword] = useState("");
    
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const navigate = useNavigate();

    const validateUsername = (username) => {
        const usernameRegex = /^[a-zA-Z0-9]+$/; // Alphanumeric only
        return username.length >= 2 && username.length <= 20 && usernameRegex.test(username);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/; // At least one letter, one number, one special character
        return passwordRegex.test(password);
    };

    const handler = async (e) => {
        e.preventDefault();
        setError("");
        setPasswordError("");

        if (!validateUsername(username)) {
            setError("Username must be between 2 and 20 characters and contain only letters and numbers.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Invalid email format.");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 8 characters long and include letters, numbers, and special characters.");
            return;
        }

        if (password !== cpassword) {
            setPasswordError("Passwords do not match.");
            return;
        }

        const newUser = {
            name: username,
            password,
            email,
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
    };

    return (
        <SignInContainer direction="column" justifyContent="center">
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ margin:'2%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                            <Divider orientation="horizontal" sx={{ mx: 1 }} />
                        </Box>
                        <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>
                            Signup
                        </Typography>
                        <Box component="form" onSubmit={handler} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                required
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                error={!validateUsername(username) && username.length > 0}
                                helperText={!validateUsername(username) && username.length > 0 ? "Invalid username." : ""}
                            />
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                required
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={!validateEmail(email) && email.length > 0}
                                helperText={!validateEmail(email) && email.length > 0 ? "Invalid email format." : ""}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!validatePassword(password) && password.length > 0}
                                helperText={!validatePassword(password) && password.length > 0 ? "Invalid password." : ""}
                            />
                            <TextField
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                required
                                fullWidth
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                                error={cpassword !== password && cpassword.length > 0}
                                helperText={cpassword !== password && cpassword.length > 0 ? "Passwords do not match." : ""}
                            />
                            <Button type="submit" variant="contained" fullWidth>
                                Signup
                            </Button>
                            {error && <Typography color="error">{error}</Typography>}
                            {passwordError && <Typography color="error">{passwordError}</Typography>}
                            <Divider sx={{ mx: 2 }} />
                            
                            <Typography align="center">
                                Already have an account? 
                                <span style={{ cursor: 'pointer', color: '#fff', fontWeight: 'bold' }} onClick={() => navigate('/login')}>
                                    Login
                                </span>
                            </Typography>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </SignInContainer>
    );
};

export default Signup;
