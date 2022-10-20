import React from 'react'
import { useState } from 'react'
import '../styles/FicheLogement.css'
import Carroussel from './Carroussel'
import icon from '../assets/chevron.png'
import iconStar1 from '../assets/star-grey.png'
import iconStar2 from '../assets/star-red.svg'



//import Logements from '../datas/logements.json'


function FicheLogement ()
{
    const [ open, setOpen ] = useState( false )
    return (
        <div>

            <Carroussel />
            <div className="title">
                <h1>Cozy loft on the Canal Saint-Martin</h1>
                <p>Paris, Île-de-France</p>
            </div>

            <span>Alexandre Dumas</span>
            <div className="host-picture" />

            <div className='content'>
                <ul>
                    <li>Cozy</li>
                    <li>Canal</li>
                    <li>Paris 10</li>
                </ul>

                <div className="rate">
                    <img src={ iconStar2 } alt="star" className="star1" />
                    <img src={ iconStar2 } alt="star" className="star2" />
                    <img src={ iconStar2 } alt="star" className="star3" />
                    <img src={ iconStar1 } alt="star" className="star4" />
                    <img src={ iconStar1 } alt="star" className="star5" />


                </div>

                <div className='description'>
                    <h3>Description</h3>
                    <button className="btn" onClick={ icon }><img src={ icon } alt="chevron" className="chevron2" /></button>
                </div>
                <div className="equipements">
                    <h3>Équipements</h3>
                    <button className="btn" onClick={ icon }><img src={ icon } alt="chevron" className="chevron3" /></button>
                </div>

            </div>

        </div>
    )
}

export default FicheLogement


