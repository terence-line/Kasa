import React from 'react'
import Logements from '../datas/logements.json'
//import { useState, useEffect } from "react"
import '../styles/Card.css'



function Card ()
{

    return (

        <div className="gallery">

            { Logements.map( logement => (

                <a href="./logements/:id" key={ logement.id }>
                    <img src={ logement.cover } alt="" className="image" />
                    <h3>{ logement.title }</h3>
                </a>

            ) ) }


        </div>
    )
}

export default Card


