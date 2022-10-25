import React, { useState } from 'react'
import '../styles/FicheLogement.css'
import Carroussel from '../components/Carroussel'
import iconStar1 from '../assets/star-grey.png'
import iconStar2 from '../assets/star-red.svg'
import Collapsible from '../components/Collapsible'
import logements from '../datas/logements.json'


function FicheLogement ()
{
  
     const logementId = document.location.pathname.split("/").pop();

     const logementInfos = logements.find((logement)=>{

            return logement.id === logementId;

     });



       return (
        
              <div className="container-fichelogement">
            
                     <Carroussel />
           
            
                     <div className="title">
                            <h1>{ logementId.title }</h1>
                             <p>{ logementId.location }</p>
                     </div>

                     <div className="host">
                            <span className="span-host">{ logementId.name}</span>
                            <div className='host-picture'>
                            <img src={logementId.picture} alt="photo de profil" />
                     </div>
              </div>

              <div className='tags'>
                     <ul>
                            <li>{logementId.tags }</li>
                            <li>Canal</li>
                            <li>Paris 10</li>
                     </ul>
              </div>
            
              <div className="rate">
                     {logementId.rating}
                            <img src={ iconStar2 } alt="star" className="star1" />
                            <img src={ iconStar2 } alt="star" className="star2" />
                            <img src={ iconStar2 } alt="star" className="star3" />
                            <img src={ iconStar1 } alt="star" className="star4" />
                            <img src={ iconStar1 } alt="star" className="star5" />
              </div>
            
              <div className="collapse-fichelogement">
                     <div className='collapse-fichelogement-item'>
                            <Collapsible />
                      </div>
                     <div className='collapse-fichelogement-item'>
                             <Collapsible />
                     </div>
               </div>

       </div>  
        
       )
}

export default FicheLogement


