import React from "react"
import logo from '../assets/404.svg'
import { Link } from "react-router-dom"
import Footer from './Footer'
import '../styles/Error.css'


function Error ()
{
    return (
        <div className="body-error">

            <div className="error">
                <img src={ logo } alt="erreur 404" classname="error-logo" />
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link className="p" to="/">
                    Retourner sur la page d’accueil
                </Link>
            </div>
                <div className="footer-error">
                    <Footer />
                </div>
        </div>
        

    )
}

export default Error


