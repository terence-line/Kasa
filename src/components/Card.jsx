import React from 'react'
import logements from '../datas/logements.json'
import '../styles/Card.css'



function Card ()
{
   
    return (

        <div className="gallery">

            {logements.map(logement => (
               
                <a href={`/logements/${logement.id}`} key={logement.id}>
                    <img src={logement.cover} alt="vue du logement" className="image" />
                    <h3>{logement.title}</h3>
                </a>

            ))}
           
        </div>
        
    )
    
}

export default Card


