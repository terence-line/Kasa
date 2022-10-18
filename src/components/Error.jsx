import React from "react"
import logo from '../assets/404.svg'
import { Link } from "react-router-dom"
import '../styles/Error.css'


function Error ()
{
    return (

        <div>
            <img src={ logo } alt="erreur 404" classname="error-logo" />
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
            <Link className="p" to="/">
                Retourner sur la page d’accueil
            </Link>
        </div>

    )
}

export default Error


