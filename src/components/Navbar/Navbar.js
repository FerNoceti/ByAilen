import React from 'react';
import './Navbar.css';

function Navbar(){
    return (
        <div className="navbar" id="nav">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href='/#'>
                        <img
                        src='../images/logo.png'
                        className="navbar-logo-img"
                        alt="Logo byAlen"
                        />
                    </a>
                </div>
            </div>
            <div className="navbar-container">
                <div className="navbar-links">
                    <div className="navbar-link">
                        <a href="#hola">Hola</a>
                    </div>
                    <div className="navbar-link">
                        <a href="#servicios">Servicios</a>
                    </div>
                    <div className="navbar-link">
                        <a href="#trabajos">Trabajos</a>
                    </div>
                    <div className="navbar-link">
                        <a href="#contacto">Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;