import React, { useState, useEffect } from "react"
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
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations
                    sont régulièrement vérifiées  par nos équipes.</p>
            </div>
            <div className="respect">
                <h1>Respect</h1>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de notre plateforme.</p>
            </div>
            <div className="service">
                <h1>Service</h1>
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                    N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
            <div className="securite">
                <h1>Responsabilité</h1>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                    chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire,
                    cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
            <span>Miguel</span>
        </div>
    )
}

export default Apropos


