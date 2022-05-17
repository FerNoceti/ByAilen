import React from "react";
import './Servicios.css';
function Servicios() {
    const servicios=[
        {id:1,titulo:"ASESORÍAS 1:1",color:"#dbbeff"},
        {id:2,titulo:"ASESORÍAS GRUPALES",color:"#f36921"},
        {id:3,titulo:"DISEÑO DE IDENTIDAD DIGITAL ",color:"#fcdb38"},
        {id:4,titulo:"GENERACIÓN DE CONTENIDO PARA MARCAS",color:"#faaae5"},
    ]
    return(
        <div className="servicios" id="servicios">
            <div className="Explicacion">
                <span>Servicios</span>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quo sunt esse totam. Itaque distinctio voluptate placeat pariatur, aliquam, odio eligendi error molestiae illo ipsam dolore. Pariatur culpa mollitia nemo.</p>
                <button>Solicitar</button>
                <img src='../images/ICONOGRAFIA BYAILEN-03.png' alt="" />
            </div>
            <div className="servs">
                {servicios.map((servicio)=>{
                    return(
                        <div className="redondeo" key={servicio.id} style={{backgroundColor: servicio.color}}>
                            <p>V</p>
                            <h3>{servicio.titulo}</h3>
                            <button onClick={console.log("FUNCIONO")}>Consultar</button>
                        </div>
                    )
                    })
                
                }
            </div>
        </div>
    )
}

export default Servicios;