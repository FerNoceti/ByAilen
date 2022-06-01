import React from "react";
import './Trabajos.css';

function Trabajos() {

        const trabajos = [
            {id: 1, src: "../images/Trabajos/Trabajo1.jpg", alt: 'Trabajo 1'},
            {id: 2, src: "../images/Trabajos/Trabajo2.jpg", alt: 'Trabajo 2'},
            {id: 3, src: "../images/Trabajos/Trabajo3.jpg", alt: 'Trabajo 3'},
            {id: 4, src: "../images/Trabajos/Trabajo4.jpg", alt: 'Trabajo 4'},
            {id: 5, src: "../images/Trabajos/Trabajo5.jpg", alt: 'Trabajo 5'},
            {id: 6, src: "../images/Trabajos/Trabajo6.jpg", alt: 'Trabajo 6'},
        ]

    return(
        <section className="trabajos" id="trabajos">
            <div className="trabajos-container">
                {trabajos.map((trabajo)=>{
                    return(
                        <div key={trabajo.id} className="trabajos-item">
                            <img className="trabajos-img" src={trabajo.src} alt={trabajo.alt}/>
                        </div>
                    )
                })}
            </div>
            <div className="trabajos-animation">
                <img className="trabajos-animation-img" src="../images/Trabajos/Sticker web_trabajos.png" alt="Trabajos Ailen"/>
            </div>
        </section>
    )

}

export default Trabajos;