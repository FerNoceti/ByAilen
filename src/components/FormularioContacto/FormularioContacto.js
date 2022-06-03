import React from "react";
import FormularioContactoPC from "../FormularioContactoPC/FormularioContactoPC"
import FormularioContactoCelu from "../FormularioContactoCelu/FormularioContactoCelu"

function FormularioContacto() {
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
                <FormularioContactoPC/>
            ):(
                <FormularioContactoCelu/>
            )
            
            
            
            }
        </>
    )
}

export default FormularioContacto;