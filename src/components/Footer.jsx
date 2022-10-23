
import React from "react"
import logo from '../assets/logo.png'
import '../styles/Footer.css'

function Footer ()
{

    return (
        <div className="footer">
            <p className="footer-p">© 2020 Kasa. All rights reserved</p>
            <img src={ logo } alt="logo agence Kasa" className='footer-logo' />
        </div>
    )
}

export default Footer


