import React, { useState } from 'react'
import '../styles/Collapsible.css'

function Collapsible ()
{


    return (
        <div className="container-collapse">

            <div className="collapse1">
                <h3>Fiabilité</h3>
            </div>
            <div className="collapse2">
                <h3>Respect</h3>
            </div>
            <div className="collapse3">
                <h3>Service</h3>
            </div>
            <div className="collapse4">
                <h3>Sécurité</h3>
            </div>
            <span>Miguel</span>
        </div>
    )
}

export default Collapsible

