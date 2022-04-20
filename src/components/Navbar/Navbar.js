import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import './Navbar.css';

function Navbar(){
    return (
        <div className="navbar" id="nav">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img
                    src='../images/logo.png'
                    className="navbar-logo-img"
                    alt="Logo byAlen"
                    onClick={() => scroll.scrollToTop()}
                    />
                </div>
            </div>
            <div className="navbar-container">
                <div className="navbar-links">
                    <div className="navbar-link">
                        <a href="#home">Home</a>
                    </div>
                    <div className="navbar-link">
                        <a href="#about">About</a>
                    </div>
                    <div className="navbar-link">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;