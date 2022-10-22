import React from "react"
import '../styles/Apropos.css'
import image from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'
//import icon from '../assets/icons8-chevron-down-30.png'
import Collapsible from './Collapsible'


function Apropos ()
{

    return (
        <div>
            <div className="banner-apropos">
                <img src={ image } alt="paysage montagne" className="paysage2" />
            </div>

            <div className="container_collapse">
                <Collapsible title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." /><br /><br />
                <Collapsible title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." /><br /><br />
                <Collapsible title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." /><br /><br />
                <Collapsible title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>

            <span className="span-apropos">Miguel</span>

        </div>
    )
}

export default Apropos




