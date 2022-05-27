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
                
                        <input type="text"  style={{borderBottom: (nombreForm=== "" ? `` :( expresiones.nombre.test(nombreForm)===false?"1px solid red": (nombreForm=== " " ?" ":" 1px solid green"))) }} value={nombreForm} onChange={nombreChange}/>
                        <p className='pBlanco' style={{color: (nombreForm=== "" ? `` :( expresiones.nombre.test(nombreForm)===false?"red":"green")) }}> {nombreForm=== "" ? ` Nombre` :( expresiones.nombre.test(nombreForm)===false?"Nombre invalido":"Nombre Valido")}</p>
                    
                </div>

                <div className='divGris'>
                
                        <input type="text" style={{borderBottom: (apellido=== "" ? `` :( expresiones.nombre.test(apellido)===false?"1px solid red":(apellido=== " " ?" ":" 1px solid green"))) }} value={apellido} onChange={apellidoChange}/>
                        <p className='pBlanco' style={{color: (apellido=== "" ? `` :( expresiones.nombre.test(apellido)===false?"red":"green")) }}>{apellido=== "" ? `Apellido` :( expresiones.nombre.test(apellido)===false?"Apellido invalido":"Apellido Valido")}</p>
                    
                </div>

                <div className='divGris'>
                
                        <input type="mail" style={{borderBottom: (mail=== "" ? `` :( expresiones.gmail.test(mail)===false?"1px solid red":(mail=== " " ?" " : " 1px solid green"))) }} value={mail} onChange={mailChange}/>
                        <p className='pBlanco' style={{color: (mail=== "" ? `` :( expresiones.gmail.test(mail)===false?"red":"green")) }}>{mail=== "" ? `Corre Electronico` :( expresiones.gmail.test(mail)===false?"Corre Electronico invalido":"Corre Electronico Valido")}</p>
                    
                </div>
                
                <div className='divGris'>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="ASESORÍAS 1:1">ASESORÍAS 1:1 </option>
                            <option value="ASESORÍAS GRUPALES">ASESORÍAS GRUPALES </option>
                            <option value="DISEÑO DE IDENTIDAD DIGITAL">DISEÑO DE IDENTIDAD DIGITAL </option>
                            <option value="GENERACIÓN DE CONTENIDO PARA MARCAS">GENERACIÓN DE CONTENIDO PARA MARCAS</option>

                        </select>
                    
                </div>
                <div className='divGris'>
                   
                        <input className='textArea' type="text-area" value={mensaje} onChange={mensajeChange}/>
                        <p className='pBlanco'>Mensaje</p>
                    
                </div>
                <div className="botones"> 
                    <button type="submit" style={{
                        backgroundColor: ((expresiones.gmail.test(mail)===false) || (expresiones.nombre.test(apellido)===false) || (expresiones.nombre.test(nombreForm)===false))?"#ddddddd":"#f36921",
                        color: ((expresiones.gmail.test(mail)===false) || (expresiones.nombre.test(apellido)===false) || (expresiones.nombre.test(nombreForm)===false))?"black":"white"}}
                        disabled={((expresiones.gmail.test(mail)===false) || (expresiones.nombre.test(apellido)===false) || (expresiones.nombre.test(nombreForm)===false))}>Consultar</button>
                </div>
            </form>
        </>
    )
}