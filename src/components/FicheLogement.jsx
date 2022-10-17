import React from 'react'
import logements from '../datas/logements.json'

const logement = []

function FicheLogement ()
{
    return (
        <ul>
            { logements.map( ( logements ) => (
                <li key={ logements.id } > { logement }</li>
            ) ) }

        </ul>
    )
}

export default FicheLogement


