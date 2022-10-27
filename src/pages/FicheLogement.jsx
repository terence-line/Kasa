import React from 'react'
import '../styles/FicheLogement.css'
import Carroussel from '../components/Carroussel'
import iconStar1 from '../assets/star-grey.png'
import iconStar2 from '../assets/star-red.svg'
import Dropdown from '../components/Dropdown'
import logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'



function FicheLogement ()
{
//        const logement = document.location.pathname.split( "/" ).pop();
       
//      const logementInfos = logements.find((logement)=>{

//             return logement.id === logement;
           
//      });
      
       const params = useParams()
       const logement = logements.find(l => l.id === params.id)
       
       return (
        
              <div className="container-fichelogement" key={logement.id}>
              
                     <Carroussel />
           
                     <div className="title">
                            <h1>{ logement.title }</h1>
                            <p>{logement.location}</p>
                     </div>

                     <div className="host">
                            <span className="span-host">{logement.name}</span>
                            
                                   <img src={logement.picture} alt="" />
              </div>

              <div className='tags'>
                     <ul>
                            <li>{logement.tags}</li>
                            <li>Canal</li>
                            <li>Paris 10</li>
                     </ul>
              </div>
            
              <div className="rate">
              <li>{logement.rating}</li>
                            <img src={ iconStar2 } alt="star" className="star1" />
                            <img src={ iconStar2 } alt="star" className="star2" />
                            <img src={ iconStar2 } alt="star" className="star3" />
                            <img src={ iconStar1 } alt="star" className="star4" />
                            <img src={ iconStar1 } alt="star" className="star5" />
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
console.log(logements)

export default FicheLogement


