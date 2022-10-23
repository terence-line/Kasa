import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom"
import '../styles/Header.css'

function Header ()
{
    return (

        <div className="body-header">
            <div className="header">
                <img src={ logo } alt="logo Kasa" className="header-logo" />
                <nav className="header-links">
                    <Link to="/">Accueil</Link>
                    <Link to="/apropos">A propos</Link>
                </nav>
            </div>
        </div>
    )

}

export default Header


