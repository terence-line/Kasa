import React from 'react'
import '../styles/FicheLogement.css'
import Carroussel from './Carroussel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import Logements from '../datas/logements.json'


function FicheLogement ()
{
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

                <div className='description'>
                    <h3>Description</h3>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-up 1" />
                </div>
                <div className="equipements">
                    <h3>Équipements</h3>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-up 2" />
                </div>

            </div>

        </div>
    )
}

export default FicheLogement


