import React, { useState } from "react";
import '../Servicios/Servicios.css';
function ServiciosDeskstop() {
  
    const [servicioSeleccionado,setServicioSeleccionado]=useState("asesorias")
    const [activado,setActivado]=useState(1)

   
    const servicios=[
        {id:1,titulo:"ASESORÍAS 1:1",color:"#dbbeff"},
        {id:2,titulo:"ASESORÍAS GRUPALES",color:"#f36921"},
        {id:3,titulo:"DISEÑO DE IDENTIDAD DIGITAL ",color:"#fcdb38"},
        {id:4,titulo:"GENERACIÓN DE CONTENIDO PARA MARCAS",color:"#faaae5"},
    ]
    function cambioDeServicios(serv){
        if(serv ===1){
            setServicioSeleccionado("asesorias")
            setActivado(1)
        }else if(serv ===2){
            setServicioSeleccionado("asesoriasGrupales")
            setActivado(2)

        }else if(serv ===3){
            setServicioSeleccionado("diseño")
            setActivado(3)

        }else {
            setServicioSeleccionado("generacion")
            setActivado(4)

        }
    }
    return(
        <div style={{backgroundColor: servicioSeleccionado === "asesorias"? "#dbbeff":servicioSeleccionado === "asesoriasGrupales"?"#f36921":servicioSeleccionado === "diseño"?"#fcdb38":"#faaae5"}} className="servicios" id="servicios">
            <div className="Explicacion">
                <span style={{color:servicioSeleccionado === "asesoriasGrupales"?"white":"#ec3c50"}}>Servicios</span>
                <p style={{color:servicioSeleccionado === "asesoriasGrupales"?"white":"black"}}> 
                    {servicioSeleccionado === "asesorias"? "Este espacio es individual y está diseñado para que tengas tu espacio único donde trabajar tus dudas sobre estrategias, publicidad, redes, diseño o fotografía. Tienen una duración de 1 hora 15 minutos y se agendan con anticipación según disponibilidad en el calendario."
                :servicioSeleccionado === "asesoriasGrupales"?"Este espacio es grupal para 5 personas y está diseñado para abordar dudas generales sobre estrategias, publicidad, redes, diseño o fotografía. Tienen una duración de 1 hora 15 minutos y las fechas se notifican en mis redes sociales."
                :servicioSeleccionado === "diseño"?"Se trabaja toda la Identidad Visual de la marca desde cero (Logotipo, paleta de colores, patterns, tarjetas, recursos gráficos) comenzando por desarrollar un brief en base a un formulario o previa reunión via zoom. Los presupuestos son personalizados para cada cliente. "
                :"Genero contenido para marcas ya sea desde grabar y editar videos o fotos, hasta redactar los copys con la posibilidad de asistir a los locales (que se encuentren en CABA) también puedo brindar asesorías en los locales para sus empleados sobre la generación de los contenidos, ya sea para Tik tok o Instagram. "}</p>
                <button><a href="#contacto">Solicitar</a></button>
                <img src='../images/ICONOGRAFIA BYAILEN-03.png' alt="" />
            </div>
            <div className="servs">
                {servicios.map((servicio)=>{
                    return(
                        <div className="redondeo" key={servicio.id} style={{backgroundColor: servicio.color}}>
                            <p style={{color:"white"}}>{servicio.id === activado? "^":"v" }</p>
                            <h2>{servicio.titulo}</h2>
                            <button style={{opacity: servicio.id === activado? 0:100 }} onClick={()=>cambioDeServicios(servicio.id)}>Consultar</button>
                        </div>
                    )
                    })
                
                }
            </div>
        </div>
    )
}

export default ServiciosDeskstop;