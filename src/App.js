import React from 'react';
import './App.css';
//components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Hola from './components/Hola/Hola';
import Servicios from './components/Servicios/Servicios';
import Trabajos from './components/Trabajos/Trabajos';
import Contacto from './components/FormularioContacto/FormularioContacto';
import Telegram from './components/Telegram/Telegram';

function App() {

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Hola />
            <Servicios />
            <Trabajos />
            <Contacto />
            <Telegram />
        </div>
    );

}

export default App;
