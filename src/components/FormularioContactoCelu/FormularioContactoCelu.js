import React from 'react'
import Form from '../Form/Form'
import './FormularioContactoCelu.css'
export default function FormularioContacto (){
    const redes = [
        {id:2,logo:'../images/Icono_lk.png' ,redLink:"http://www.linkedin.com/in/ailendamo"},
        {id:1,logo:'../images/Icono_ig.png' ,redLink:"https://www.instagram.com/by.ailendamo/"},
        {id:3,logo:'../images/Icono_tk.png' ,redLink:"https://www.tiktok.com/@by.ailendamo"},
    ]

    return(
        <div className="contacto" id="contacto">
            <div className="izq">
                <h3>Charlemos</h3>
                <div className="formulario">
                    <Form/>
                </div>
                <div className="redes">
                    <div  className='red'>
                    {redes.map((red)=>{
                        return(
                            
                                    <a key={red.id} href={red.redLink} target="blank" className='linkRedes'>
                                        <img src={red.logo} alt={red.nombre} />
                                    </a>
                        )})}
                        <button><a href="#hero"> ^</a></button>
                    </div>
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
            
        </div>
    )
}