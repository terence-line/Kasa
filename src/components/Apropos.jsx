import React from "react"
import '../styles/Apropos.css'
import image from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'
//import icon from '../assets/icons8-chevron-down-30.png'
import Collapsible from './Collapsible'


function Apropos ( props )
{

    return (
        <div>

            <div className="banner-apropos">
                <img src={ image } alt="paysage montagne" className="paysage2" />
            </div>
            <Collapsible />

        </div>
    )
}

export default Apropos




