import React from "react"
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import '../styles/Error.css'
import Header from '../components/Header'

function Error ()
{
    return (
        <div>
            <Header />
            <div className='error'>
                <img src={ logo } alt="erreur 404" classname="error-logo" />
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link className="p" to="/">
                    Retourner sur la page d’accueil
                </Link>
            </div>
        </div>
    )
}

export default Error


