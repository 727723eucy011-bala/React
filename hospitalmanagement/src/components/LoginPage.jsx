import * as React from 'react';
import {
    Box,
    Button,
    CssBaseline,
    TextField,
    Typography,
    Stack,
    Card as MuiCard,
    Avatar,
    Divider
} from '@mui/material'; 
import { styled } from '@mui/material/styles';
// import background from './background.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    maxWidth: '450px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',  // Semi-transparent white
    backdropFilter: 'blur(30px)',  // Blurs the content behind the card
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.22)', 
    borderRadius: theme.shape.borderRadius,
}));

// const SignInContainer = styled(Stack)(({ theme }) => ({
//     minHeight: '100vh',
//     padding: theme.spacing(2),
//     justifyContent:'center',
//     backgroundImage: `url(${background})`,
//     backgroundSize: 'cover',
//     backgroundPosition:'center',
// }));

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    // Fetch users from JSON server on component mount
    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
            } catch (err) {
                console.error("Error fetching users:", err);
                setError("Failed to fetch user data.");
            }
        };

        fetchUsers();
    }, []);

    // Handle login logic
    const handler = (e) => {
        e.preventDefault();
        setError("");

        const user = users.find(user => user.name === username);
        if (user) {
            if (user.password === password) {
                navigate('/appointment'); // Redirect to appointment page
            } else {
                setError("Invalid Username or Password");
            }
        } else {
            setError("Invalid Username or Password");
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/signup');
    }

    return (   
        <Card variant="outlined">
                <Avatar 
                    alt="User Avatar" 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7gUunYcYIivgGsb5GJiTygHaHa%26pid%3DApi&f=1&ipt=722ac69815c9bb8dd692d7a0b3fa99231a49174878997e03e05cdaad46700a10&ipo=images"
                    sx={{ width: 60, height: 56, marginBottom: 2 }} 
                />
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color:"black" }}>
                    Welcome to Our Hospital
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic', color:"black" }}>
                    Your health is our priority. Please log in to access your appointments and more.
                </Typography>
            </Box>
            <Divider  orientation="horizontal" sx={{ mx: 2 }} />
                <Typography component="h1" variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color:"black" }}>
                    Login
                </Typography>
                <Box
                    component="form"
                    onSubmit={handler}
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Username"
                        variant="outlined"
                        required
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        
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
                    {error && <Typography color="error">{error}</Typography>}
                    
                    <Button type="submit" variant="contained" style={{ width:'50%', margin: 'auto' }}>
                        Login
                    </Button>
                    
                    {/* Vertical Divider */}
                    <Divider sx={{ mx: 2 }} />
                    
                    <Typography align="center">
                        Don't have an account? 
                        <span style={{ cursor: 'pointer', color:"black", fontWeight: 'bold' }} onClick={handleSignUpRedirect}>
                            Sign Up
                        </span>
                    </Typography>
                    
                </Box>
            </Card>
        
    );
}
