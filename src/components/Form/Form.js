import { useState } from 'react';
import './Form.css'
export default function Form(){ 
    const [nombreForm,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [mail,setMail]=useState("")
    const [mensaje,setMensaje]=useState("")
    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
        gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /^[a-zA-ZÀ-ÿ\s\!\¡\¿\?]{4,200}$/, // Letras y espacios, pueden llevar acentos.
    };
    function reset(){
        setNombre("");setApellido("");setMail("");setMensaje("");
    }
    const nombreChange = event => setNombre(event.target.value)
    const apellidoChange = event => setApellido(event.target.value)
    const mailChange = event => setMail(event.target.value)
    const mensajeChange = event => setMensaje(event.target.value)
    return(
        <>
            <form action="">
                <div className='divGris'>
                
                        <label htmlFor="" style={{color: (nombreForm=== "" ? `` :( expresiones.nombre.test(nombreForm)===false?"red":"green")) }}> {nombreForm=== "" ? ` Nombre` :( expresiones.nombre.test(nombreForm)===false?"Nombre invalido":"Nombre Valido")}</label>
                        <input type="text" value={nombreForm} onChange={nombreChange}/>
                    
                </div>

                <div className='divGris'>
                
                        <label htmlFor="" style={{color: (apellido=== "" ? `` :( expresiones.nombre.test(apellido)===false?"red":"green")) }}>{apellido=== "" ? `Apellido` :( expresiones.nombre.test(apellido)===false?"Apellido invalido":"Apellido Valido")}</label>
                        <input type="text" value={apellido} onChange={apellidoChange}/>
                    
                </div>

                <div className='divGris'>
                
                        <label htmlFor="" style={{color: (mail=== "" ? `` :( expresiones.gmail.test(mail)===false?"red":"green")) }}>{mail=== "" ? `Corre Electronico` :( expresiones.gmail.test(mail)===false?"Corre Electronico invalido":"Corre Electronico Valido")}</label>
                        <input type="mail" value={mail} onChange={mailChange}/>
                    
                </div>
                
                <div className='divGris'>
                   
                        <label htmlFor="" style={{color: (mensaje=== "" ? `` :( expresiones.mensaje.test(mensaje)===false?"red":"green")) }}>{mensaje=== "" ? `Mensaje` :( expresiones.mensaje.test(mensaje)===false?"Mensaje invalido":"Mensaje Valido")}</label>
                        <input className='textArea' type="text-area" value={mensaje} onChange={mensajeChange}/>
                    
                </div>
                <button type="submit" >Enviar</button>
                <button type="reset" onClick={()=>reset()}>Limpiar</button>
            </form>
        </>
    )
}