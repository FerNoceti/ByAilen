import React from 'react'
import Form from '../Form/Form'
import './FormularioContacto.css'
export default function FormularioContacto (){
    const redes = [
        {id:1,logo:'../images/logo.png' ,nombre:"Instagram"},
        {id:2,logo:'../images/logo.png' ,nombre:"Telegram"},
        {id:3,logo:'../images/logo.png' ,nombre:"Gmail"},
    ]

    return(
        <div className="contacto" id="contacto">
            <div className="izq">
                <img src='../images/logo.png' alt='ByAilen' />
                <h3>Charlemos</h3>
                <div className="redes">
                    {redes.map((red)=>{
                        return(
                            <div key={red.id} className='red'>
                                <img src={red.logo} alt={red.nombre} />
                                <p>{red.nombre}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="formulario">
                <Form/>
            </div>
        </div>
    )
}