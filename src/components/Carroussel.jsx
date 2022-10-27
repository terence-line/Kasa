import React from "react"
import logements from '../datas/logements.json'
import '../styles/Carroussel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from "../assets/background.svg"


function Carroussel ()
{


    return (
    
        <div className="carroussel">
            
            {logements.map((logement) => (
                <li key={logement.id}>
                    <img src={`${ logement.pictures}`} alt="photo logement" className="image" />
                </li>  
               
        ) ) }
                     
        </div>                                         
    )
}
export default Carroussel



/*<FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-right" />
<FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-left" />
<p>1/4</p>


<img src={ image } alt="decor intérieur" className="pictures" />*/