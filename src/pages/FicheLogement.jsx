import React from 'react'
import '../styles/FicheLogement.css'
import Slideshow from '../components/Slideshow'
import Dropdown from '../components/Dropdown'
import logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import Star from '../components/Star'
import Tags from '../components/Tags'


function FicheLogement ()
{
       const params = useParams()
       const logement = logements.find( l => l.id === params.id )
       
       return (
        
              <div className="container-fichelogement" key={ logement.id }>
                     
                     <div className="container-slideshow">
                            <Slideshow />
                     </div>

                     <div className="title">
                            <h1>{ logement.title }</h1>
                            <p>{ logement.location }</p>
                     </div>

                     <div className="host">
                            <span className="span-host">{ logement.host.name }</span>
                            <img src={ logement.host.picture } alt="" />
                            <Star value={ parseInt( logement.rating ) } />
                     </div>

                     <Tags tags={logement.tags} />
            
                     <div className="dropdown-fichelogement">
                            <div className='dropdown-fichelogement-item1'>
                                   <Dropdown title="Description" text={logement.description} />
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


