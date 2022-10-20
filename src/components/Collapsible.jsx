import React, { useState } from 'react'
import '../styles/Collapsible.css'
import icon from '../assets/chevron.png'

function Collapsible ()
{
    const [ open, setOpen ] = useState( true )

    return (
        <div className="container-collapse">

            <div div className="collapse1" >
                <h3>Fiabilité</h3>
                <button className="btn1" onClick={ icon }><img src={ icon } alt="chevron" className="chevron2" /></button>
                { open && (
                    <div className="open1">
                        Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées  par nos équipes.
                    </div>
                ) }
            </div>

            <div className="collapse2">
                <h3>Respect</h3>
                <button className="btn2" onClick={ icon }><img src={ icon } alt="chevron" className="chevron2" /></button>
                { open && (
                    <div className="open2">
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera
                        une exclusion de notre plateforme.
                    </div>
                ) }
            </div>

            <div className="collapse3">
                <h3>Service</h3>
                <button className="btn3" onClick={ icon }><img src={ icon } alt="chevron" className="chevron2" /></button>
                { open && (
                    <div className="open3">
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                        N'hésitez pas à nous contacter si vous avez la moindre question.
                    </div>
                ) }
            </div>

            <div className="collapse4" >
                <h3>Sécurité</h3>
                <button className="btn4" onClick={ icon }><img src={ icon } alt="chevron" className="chevron2" /></button>
                { open && (
                    <div className="open4">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services.
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
                        de vérifier que les standards sont bien respectés. Nous organisons également
                        des ateliers sur la sécurité domestique pour nos hôtes.
                    </div> ) }
            </div>
        </div>
    )
}

export default Collapsible

