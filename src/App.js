import React from 'react';
import './App.css';
//components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Hola from './components/Hola/Hola';
import Servicios from './components/Servicios/Servicios';
import Trabajos from './components/Trabajos/Trabajos';
import Contacto from './components/Contacto/Contacto';

function App() {

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Hola />
            <Servicios />
            <Trabajos />
            <Contacto />
        </div>
    );

}

export default App;
