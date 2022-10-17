import React from "react"
import '../styles/Apropos.css'

function Apropos ()
{

    return (
        <div className="container-apropos">
            <div className="fiabilite">
                <p>Fiabilité</p>
                <div className="respect">
                    <h1>Respect</h1>
                </div>
                <div className="service">
                    <h1>Service</h1>
                    <div className="responsabilite">
                        <h1>Responsabilité</h1>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du voisinage entraînera
                            une exclusion de notre plateforme.
                        </p>
                        <span>Miguel</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Apropos


