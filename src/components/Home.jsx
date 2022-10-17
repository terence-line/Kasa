//import { useState, useEffect } from "react"
import React from "react"
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'
import '../styles/Home.css'

function Home ()
{
    return (
        <div className="container">
            <Header />
            <div className="body-home">
                <Card />
            </div>
            <Footer />
        </div>

    )
}

export default Home

