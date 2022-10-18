import React from "react"
import '../styles/Apropos.css'
import image from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'

function Apropos ()
{

    return (
        <div>
            <div className="banner-apropos">
                <img src={ image } alt="paysage montagne" className="paysage2" />
            </div>

            <div className="fiabilite">
                <h1>Fiabilité</h1>
            </div>
            <div className="respect">
                <h1>Respect</h1>
            </div>
            <div className="service">
                <h1>Service</h1>
            </div>
            <div className="responsabilite">
                <h1>Responsabilité</h1>
            </div>
            <span>Miguel</span>
        </div>
    )
}

export default Apropos


