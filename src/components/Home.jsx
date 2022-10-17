//import { useState, useEffect } from "react"
import React from "react"
import Header from '../components/Header'
import Card from '../components/Card'
import '../styles/Home.css'

function Home ()
{
    return (
        <div>
            <Header />
            <div className="body-home">
                <Card />
            </div>
        </div>

    )
}

export default Home

