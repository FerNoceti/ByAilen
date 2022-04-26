import React from 'react'
import './Trabajo.css'
import { useState } from 'react';

function Trabajo({img, title, desc}) {

    const [showDesc, setShowDesc] = useState(false);

    return(
        <div className="trabajo" onMouseEnter={() => setShowDesc(true)}
        onMouseLeave={() => setShowDesc(false)}>
            <img className='trabajo-img' src="https://png.pngtree.com/png-vector/20191023/ourlarge/pngtree-brown-travel-suitcase-with-stickers-icon-png-image_1845640.jpg" alt=""/>
            {showDesc ?
                <div className="trabajo-desc">
                    <span className='trabajo-title'>
                        Titulo de ej
                    </span>
                    <p className='trabajo-text'>
                        lorem ipsumsfjanfaasdfasdjkgfhsdfboúisfbhngódfisugb 9éwrougibso´figubs weioghsdoug bhso´guihwb owiuebhfgosúigh
                    </p>
                </div>
            :
            null}
        </div>
    )
}

export default Trabajo