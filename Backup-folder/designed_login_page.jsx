import * as React from 'react';
import {
    Box,
    Button,
    CssBaseline,
    TextField,
    Typography,
    Stack,
    Card as MuiCard,
    Avatar
} from '@mui/material'; 
import { styled } from '@mui/material/styles';
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
    backgroundColor: 'rgba(255, 255, 255, 0.30)',  // Semi-transparent white
    backdropFilter: 'blur(30px)',  // Blurs the content behind the card
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.22)', 
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

export default function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState("");
    const [found, setFound] = React.useState("");
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
        setFound("");

        const user = users.find(user => user.name === username);
        if (user) {
            if (user.password === password) {
                setFound("User found");
                // Optionally navigate to another route
                // navigate('/dashboard');
            } else {
                setError("Incorrect password");
            }
        } else {
            setError("User not found");
        }
    };

    return (
        <SignInContainer direction="column" justifyContent="center">
            <CssBaseline />
            <Card variant="outlined">
                <Avatar 
                    alt="User Avatar" 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7gUunYcYIivgGsb5GJiTygHaHa%26pid%3DApi&f=1&ipt=722ac69815c9bb8dd692d7a0b3fa99231a49174878997e03e05cdaad46700a10&ipo=images"
                    sx={{ width: 60, height: 56, marginBottom: 2 }} 
                />
                <Typography component="h1" variant="h4" sx={{ textAlign: 'center' }}>
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
                    {found && <Typography color="success.main">{found}</Typography>}
                    
                    <Button type="submit" variant="contained" style={{width:'50%'}}>
                        Login
                    </Button>
                </Box>
            </Card>
        </SignInContainer>
    );
}
