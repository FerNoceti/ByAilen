import React from "react";
import './Hola.css';
function Hola() {
    return(
        <section className="hola" id="hola">
            <div className="hola-container1">
                <p className="hola-title">
                    ¡Hola! 😀
                </p>
                <p className="hola-subtitle">
                    Qué gusto verte por acá
                </p>
                <p className="hola-text">
                    Mi nombre es Ailen pero también podes llamarme <span className="hola-negrita">Aile</span>, soy técnica en Mkt Digital pero también me
                    capacité en Diseño Digital, Copywriting, Fotografía y video. Desde el año 2017 comencé a incursionar en el mundo de las redes sociales
                    y las ventas por ese medio, luego de trabajar 2 años de manera formal en el área de prensa y comunicación de un establecimiento. Me formé
                    oficialmente en Coder House y Crecé con Google para jóvenes en el área de Marketing. Pero la historia sigue porque
                    la <span className="hola-negrita">curiosidad</span> me mueve constantemente y como siempre digo, soy una eterna aprendiz.
                    <br/>
                    Me apasiona la posibilidad de ayudar a las marcas, ya sean emprendimientos o Marcas personales a <span className="hola-negrita">encontrar su lugar</span> en
                    este mundo virtual. Es por eso que nació <span className="hola-red">By Ailen</span>, por la necesidad de generar un espacio creativo y de crecimiento, donde cada persona pueda confiarme la
                    posibilidad de acompañarlos en el proceso.
                </p>
            </div>
            <div className="hola-container2">
                <img className="hola-img" src="../images/HOLA.png" alt="Logo byAlen" />
            </div>
        </section>
    )
}

export default Hola;