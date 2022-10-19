import React, { useState } from 'react'
import '../styles/Collapsible.css'
import icon from '../assets/chevron.png'

function Collapsible ()
{


    return (
        <div className="container-collapse">

            <div div className="collapse1" >
                <h3>Fiabilité</h3>
                <img src={ icon } alt="chevron" className="chevron" />
            </div>

            <div className="collapse2">
                <h3>Respect</h3>
                <img src={ icon } alt="chevron" className="chevron" />
            </div>

            <div className="collapse3">
                <h3>Service</h3>
                <img src={ icon } alt="chevron" className="chevron" />
            </div>

            <div className="collapse4" >
                <h3>Sécurité</h3>
                <img src={ icon } alt="chevron" className="chevron" />
            </div>

            <span>Miguel</span>

        </div>
    )
}

export default Collapsible

