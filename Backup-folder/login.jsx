import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [found, setFound] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
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
        <div>
            <form onSubmit={handler}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {found && <p style={{ color: 'green' }}>{found}</p>}
            </form>
        </div>
    );
};

export default Login;
