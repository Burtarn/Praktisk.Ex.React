import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../styles/Login.css';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongInput, setWrongInput] = useState('')
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (username === 'admin' && password === 'admin') {
            login();
            navigate('/profile');
        } else {
            setWrongInput('Felaktiga uppgifter. Försök igen')
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Logga In</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Användarnamn:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Lösenord:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                {wrongInput && <p style={{ color: 'red', fontWeight: 'bold' }}>{wrongInput}</p>}
                <button type="submit" className="login-button">Logga In</button>
            </form>
        </div>
    );
};

export default Login;