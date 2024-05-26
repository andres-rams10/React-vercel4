import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Clientes.css';

const Clientes = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();



        console.log('Datos del cliente:', { nombre, apellido, telefono, direccion });
    };

    const handleCancel = () => {
        
        // Devolver al módulo Dashboard
        navigate('/dashboard');
    };

    return (
        <div className="clientes-container">
            <h1>Formulario de Clientes</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Apellido:
                    <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Teléfono:
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Dirección:
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        required
                    />
                </label>
                <div className="buttons-container">
                    <button type="submit">Aceptar</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default Clientes;
