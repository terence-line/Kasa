import React, { useState } from 'react'
import '../styles/FicheLogement.css'
import Carroussel from './Carroussel'
import iconStar1 from '../assets/star-grey.png'
import iconStar2 from '../assets/star-red.svg'
import Collapsible from './Collapsible'



//import Logements from '../datas/logements.json'


function FicheLogement ()
{
    const [ open, setOpen ] = useState( true )

    return (
        
        <div className="container-fichelogement">
            
                <Carroussel />
        
            <div className="title">
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <p>Paris, Île-de-France</p>
            </div>

            <div className="host">
                <span className="span-host">Alexandre Dumas</span>
                <div className='host-picture'>
                    <img src="" alt="photo de profil" />
                </div>
            </div>

            <div className='content'>
                <ul>
                    <li>Cozy</li>
                    <li>Canal</li>
                    <li>Paris 10</li>
                </ul>
            </div>
            
            <div className="rate">
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


