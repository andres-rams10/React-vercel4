import React from 'react';
import { Link } from 'react-router-dom';
import './ModuloProveedores.css'; // Puedes agregar estilos personalizados

const ModuloProveedores = () => {
    return (
        <div className="modulo-proveedores">
            <div className="sidebar">
                <h2>Menu</h2>
                <ul>
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li><Link to="/clientes">Clientes</Link></li>
                    <li><Link to="/proveedores">Proveedores</Link></li>
                </ul>
            </div>
            <div className="content">
                <h1>Módulo Proveedores</h1>
                {/* Aquí puedes agregar el contenido del módulo */}
            </div>
        </div>
    );
};

export default ModuloProveedores;
