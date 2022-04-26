import React from "react";
import './Trabajos.css';
import TrabajosList from "../TrabajosList/TrabajosList";
import Trabajo from "../Trabajo/Trabajo";

function Trabajos() {

    const trabajos = [
        <Trabajo/>, <Trabajo/>, <Trabajo/>, <Trabajo/>, <Trabajo/>, <Trabajo/>, <Trabajo/>, <Trabajo/>, <Trabajo/>
    ]

    return(
        <section className="trabajos" id="trabajos">
            <TrabajosList trabajos={trabajos}/>
        </section>
    )
}

export default Trabajos;