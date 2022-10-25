import React from "react"
import logements from '../datas/logements.json'
import FicheLogements from './FicheLogements'


const logement = []

function FicheLogementId ()
{
    <FicheLogements />  

    return (

        
        <ul>
            { logements.map( ( logements ) => (
                <li key={ logements.id } > { logement }</li>
            ) ) }

        </ul>
    )
}

export default FicheLogementId
