import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ModuloProveedores from './ModuloProveedores';
import Clientes from './Clientes';
import Proveedores from './Proveedores';
import Inicio from './Inicio';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/moduloProveedores" element={<ModuloProveedores />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/proveedores" element={<Proveedores />} />
                <Route path="/inicio" element={<Inicio />} />
            </Routes>
        </Router>
    );
};

export default App;
