import React from 'react'
import '../styles/FicheLogement.css'
import Slideshow from '../components/Slideshow'
import Dropdown from '../components/Dropdown'
import logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import Star from '../components/Star'
import Tags from '../components/Tags'
import Error from '../components/Error'


function FicheLogement ()
{
       const params = useParams()
       const logement = logements.find( l => l.id === params.id )
       
       if (!logement) return <Error />

       
       return (
        
              <div className="container-fichelogement">
                     
                     <div className="container-slideshow">
                            <Slideshow />
                     </div>

                     <div className="title">
                            <h1>{logement.title}</h1>
                            <p>{logement.location}</p>
                     </div>

                     <div className="host">
                            <span className="span-host">{logement.host.name}</span>
                            <img src={logement.host.picture} alt="" />
                            <Star value={parseInt(logement.rating)} />
                     </div>

                     <Tags tags={logement.tags} />
            
                     <div className="dropdown-fichelogement">
                            <div className='dropdown-fichelogement-item1'>
                                   <Dropdown title="Description" text={logement.description} />
                            </div>

                            
                            <div className='dropdown-fichelogement-item2'>
                                   <Dropdown
                                          title="Equipements" 
                                          text=<ul>{logement.equipments.map((equipment, index) => (
                                                 <li key={index}>{equipment}</li>
                                               ))}</ul>
                                          
                                   />
                            </div>
                     </div>
              </div>  
        
       )
}


export default FicheLogement


