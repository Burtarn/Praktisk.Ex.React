import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username); // Debugging

        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            navigate('/profile');
        } else {
            alert('Inloggningen misslyckades. Kontrollera dina uppgifter.');
        }
    };

    return (
        <div>
            <h2>Logga In</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Användarnamn:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Lösenord:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Logga In</button>
            </form>
        </div>
    );
};

export default Login;