import React from "react"
//import Logements from '../datas/logements.json'
import '../styles/Carroussel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from "../assets/background.svg"


function Carroussel ()
{


    return (

        <div className="carroussel">
            
            <img src={ image } alt="decor intérieur" className="pictures" />
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-right" />
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-left" />
            <p>1/4</p>

        </div>
    )
}

export default Carroussel

/*{
    Logements.map( logement => (

        <div key={ logement.id }>
            <img src={ logement.pictures } alt="" className="pictures" />
        </div>

    ) )
}*/
