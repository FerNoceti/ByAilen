import React from 'react'
import Form from '../Form/Form'
import './FormularioContacto.css'
export default function FormularioContacto (){
    const redes = [
        {id:2,logo:'../images/Icono_lk.png' ,nombre:"byailendamo",redLink:"http://www.linkedin.com/in/ailendamo"},
        {id:1,logo:'../images/Icono_ig.png' ,nombre:"ailendamo",redLink:"https://www.instagram.com/by.ailendamo/"},
        {id:3,logo:'../images/Icono_tk.png' ,nombre:"@byailendamo",redLink:"https://www.tiktok.com/@by.ailendamo"},
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
                                    <a href={red.redLink} target="blank" className='linkRedes'>
                                        <p>/{red.nombre}</p>
                                    </a>
                                </div>
                           
                        )
                    })}
                </div>
                <div>
                    <footer>
                        <div>
                            <h5>Desarrollo</h5>
                            <p>reciolaut@gmail.com</p>
                            <p>fer.j.noceti@gmail.com</p>
                        </div>
                        <div>
                            <h5>Diseño</h5>
                            <p>sofia.poropat@gmail.com</p>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="formulario">
                <Form/>
            </div>
        </div>
    )
}