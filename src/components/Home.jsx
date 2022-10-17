//import { useState, useEffect } from "react"
import React from "react"
import Card from '../components/Card'
import '../styles/Home.css'
import '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'

function Home ()
{
    return (
        <div>
            <div className="body-home">

                <div className="banner">
                    <h1>Chez vous, partout et ailleurs</h1>
                    <div className="masked">
                        <img src='../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'
                            alt="paysage montagne au bord de l'eau" className="paysage1" />
                    </div>
                </div>
                <Card />
            </div>
        </div>

    )
}

export default Home

