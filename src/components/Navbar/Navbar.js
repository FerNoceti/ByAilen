import React from 'react';
import './Navbar.css';

function Navbar(){

    return (
        <div className="navbar" id="nav">
                <div className="navbar-logoD">
                    <a href='/#'>
                        <img
                        src='../images/iso_web.png'
                        className="navbar-logo-imgD"
                        alt="Logo byAlen"
                        />
                    </a>
                </div>
                <div className="navbar-logoM">
                    <a href='/#'>
                        <img
                        src='../images/REBRANDING-ROJO-AILEN.png'
                        className="navbar-logo-imgM"
                        alt="Logo byAlen"
                        />
                    </a>
                </div>
                <div className="navbar-links">
                    <div className="navbar-link">
                        <a href="#hola">¡HOLA!</a>
                    </div>
                    <div className="navbar-link">
                        <a href="#servicios">SERVICIOS</a>
                    </div>
                    <div className="navbar-link">
                        <a href="#trabajos">TRABAJOS</a>
                    </div>
                    <div className="navbar-link">
                        <a href="#contacto">CONTACTO</a>
                    </div>
                </div>
            </div>
    )
}

export default Navbar;