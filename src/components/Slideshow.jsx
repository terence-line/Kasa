import React from "react"
import logements from '../datas/logements.json'
import '../styles/Slideshow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Slideshow ()
{


    <div className="slide-carroussel">
            
            {logements.map((logement) => (
                <li key={logement.id}>
                    <img src={logement.pictures} alt="decoration-logement" />
                    <FontAwesomeIcon icon1="fa-sharp fa-solid fa-chevron-right" />
                    <FontAwesomeIcon icon2="fa-sharp fa-solid fa-chevron-left" />
                    <p>1/4</p>
                </li>  
               
        ) ) }
                     
        </div>       
                              
    
}
export default Slideshow



  