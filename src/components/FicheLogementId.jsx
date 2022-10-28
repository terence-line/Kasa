/*import React from "react"
import logements from '../datas/logements.json'
import FicheLogements from './FicheLogements'


const logement = []

function FicheLogementId ()
{
    <FicheLogements />  

    return (

        
        <ul>
            { logements.map( ( logements ) => (
                <li key={ logements.id } > { logement }</li>
            ) ) }

        </ul>
    )
}

export default FicheLogementId*/

import React, { useState } from 'react'
import '../styles/FicheLogement.css'
import Carroussel from '../components/Carroussel'
import iconStar1 from '../assets/star-grey.png'
import iconStar2 from '../assets/star-red.svg'
import Dropdown from '../components/Dropdown'
import logements from '../datas/logements.json'

//<a href={`/logements ${ id }`} key={ logement.id }>
function FicheLogement ()
{
  
       const logement = document.location.pathname.split( "/" ).pop();
       

     const logementInfos = logements.find((logement)=>{

            return logement.id === logement;
           
     });
    
            
       return (
        
              <div className="container-fichelogement" key={logement.id}>
              
                     <Carroussel />
           
            
                     <div className="title">
                            <h1>{`${logement.title}`}</h1>
                            <p>{`${logement.location}`}</p>
                     </div>

                     <div className="host">
                            <span className="span-host">{logement.name}</span>
                            <div className='host-picture'>
                            <img src={`${logement.picture}`} alt="photo de profil" />
                     </div>
              </div>

              <div className='tags'>
                     <ul>
                            <li>{`${logement.tags}`}</li>
                           
                     </ul>
              </div>
            
              <div className="dropdown-fichelogement">
                     <div className='dropdown-fichelogement-item1'>
                            <Dropdown title="Description" text="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)." />
                     </div>
                     <div className='dropdown-fichelogement-item2'>
                            <Dropdown
                                   title="Equipements" 
                                   text= <ul className="details-item2">
                                                 <li>Climatisation</li>
                                                 <li>Wi-Fi</li>
                                                 <li>Cuisine</li>
                                                 <li>Espace de travail</li>
                                                 <li>Fer à repasser </li>
                                                 <li>Sèche-cheveux</li> 
                                                 <li>Cintres</li>
                                          </ul>
                            />
                     </div>
               </div>

       </div>  
        
       )
}

export default FicheLogement



