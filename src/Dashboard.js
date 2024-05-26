import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <ul>
                    <li><button onClick={() => navigateTo('/login')}>Salir</button></li>
                    <li><button onClick={() => navigateTo('/register')}>Crear Usuario</button></li>
                </ul>
            </nav>
            <h1>Dashboard</h1>
            <div className="cards-container">
                <div className="card" onClick={() => navigateTo('/clientes')}>
                    <h2>Clientes</h2>
                </div>
                <div className="card" onClick={() => navigateTo('/proveedores')}>
                    <h2>Proveedores</h2>
                </div>
            </div>

            {/* Nueva columna con información */}
            <div className="columna">
                <div className="clientes-proveedores">Clientes</div>
                <p>Información sobre clientes...</p>
            </div>
        </div>
    );
};

export default Dashboard;






