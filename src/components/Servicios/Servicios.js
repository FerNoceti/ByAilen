import React from "react";
import ServiciosCelu from "../ServiciosCelu/ServiciosCelu";
import ServiciosDeskstop from "../ServiciosDeskstop/ServiciosDeskstop";
import './Servicios.css';
function Servicios() {
    let celular=false
    console.log(window.screen.width)
    if(window.screen.width < 577){
        celular=true
    } else{
        celular=false
    }

    return(
        <>
            { celular=== false?(
                <ServiciosDeskstop/>
            ):(
                <ServiciosCelu/>
            )
            
            
            
            }
        </>
    )
}

export default Servicios;