import './TrabajosList.css'
import Trabajo from '../Trabajo/Trabajo'
import React from 'react'

function TrabajosList({trabajos}) {

    return (
        <div className='trabajoslist'>
            {trabajos.map(element => <Trabajo title={element.title} img={element.img} desc={element.desc}/>)}
        </div>
    )
}

export default TrabajosList