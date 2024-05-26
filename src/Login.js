import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {


        // Redirigir al Dashboard directamente sin hacer una solicitud a la API por que la desghraciada no funciono


        navigate('/dashboard');
    };

    const handleRegister = () => {
        // Redirigir a la página de registro al hacer clic en "Create Account"
        navigate('/Register');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Create Account</button>
        </div>
    );
};

export default Login;
