import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModuloProveedores.css';

const ModuloProveedores = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [nit, setNit] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a tu backend o hacer lo que necesites con ellos
        console.log('Datos del proveedor:', { nombre, apellido, telefono, direccion, empresa, nit });
    };

    const handleCancel = () => {
        // Devolver al módulo Dashboard
        navigate('/dashboard');
    };

    return (
        <div className="modulo-proveedores-container">
            <h1>Formulario de Proveedores</h1>
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
                <label>
                    Empresa:
                    <input
                        type="text"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        required
                    />
                </label>
                <label>
                    NIT:
                    <input
                        type="text"
                        value={nit}
                        onChange={(e) => setNit(e.target.value)}
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

export default ModuloProveedores;
