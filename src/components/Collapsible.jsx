import React, { useState } from 'react'
import '../styles/Collapsible.css'
import icon from '../assets/chevron.png'

function Collapsible ( { title, content } )
{
    const [ isOpen, setIsOpen ] = useState( false )
    

    return (

        <div className={ "collapse" + ( isOpen ? 'open' : '' ) }>
            <div className="collapse_title" onClick={ () => setIsOpen(!isOpen)}>
                { title } <img src={ icon } alt="chevron" className="collapse_icon" />
            </div>

            { isOpen &&
                <div className="collapse_content">{ content }</div>
            }
        </div>
    )
}

export default Collapsible

