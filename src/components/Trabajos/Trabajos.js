import React from "react";
import './Trabajos.css';

function Trabajos() {

    /*
    const trabajos = [
        <Trabajo key={1}/>, <Trabajo key={2}/>, <Trabajo key={3}/>, <Trabajo key={4}/>,
        <Trabajo key={5}/>, <Trabajo key={6}/>, <Trabajo key={7}/>, <Trabajo key={8}/>
    ]

    return(
        <section className="trabajos" id="trabajos">
            <TrabajosList trabajos={trabajos}/>
        </section>
    )
    */

    return(
        <section className="trabajos" id="trabajos">
            <div className="trabajos-container">
                <div className="trabajos-item">
                    <img className="trabajos-img" src="../images/Trabajos/Trabajo1.jpg" alt="Trabajo 1"/>
                </div>
                <div className="trabajos-item">
                    <img className="trabajos-img" src="../images/Trabajos/Trabajo2.jpg" alt="Trabajo 2"/>
                </div>
                <div className="trabajos-item">
                    <img className="trabajos-img" src="../images/Trabajos/Trabajo3.jpg" alt="Trabajo 3"/>
                </div>
                <div className="trabajos-item">
                    <img className="trabajos-img" src="../images/Trabajos/Trabajo4.jpg" alt="Trabajo 4"/>
                </div>
                <div className="trabajos-item">
                    <img className="trabajos-img" src="../images/Trabajos/Trabajo5.jpg" alt="Trabajo 5"/>
                </div>
                <div className="trabajos-item">
                    <img className="trabajos-img" src="../images/Trabajos/Trabajo6.jpg" alt="Trabajo 6"/>
                </div>
            </div>
        </section>
    )

}

export default Trabajos;