import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // Usa useNavigate para la navegación

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Simular registro de usuario (aquí puedes llamar a tu API de registro)
        console.log('Registrando usuario:', { name, email, password });
        alert("Usuario registrado correctamente");
        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
    };

    const handleBack = () => {
        // Navegar hacia atrás usando navigate
        navigate(-1);
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Nombres y Apellidos"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Repetir Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Aceptar</button>
            <button onClick={handleBack}>Regresar</button>
        </div>
    );
};

export default Register;
