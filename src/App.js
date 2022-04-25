import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hola from './components/Hola/Hola';
import Servicios from './components/Servicios/Servicios';
import Trabajos from './components/Trabajos/Trabajos';
import Contacto from './components/Contacto/Contacto';

function App() {

    return (
        <div className="App">
            <Navbar />
            <Hola />
            <Servicios />
            <Trabajos />
            <Contacto />
        </div>
    );

}

export default App;
