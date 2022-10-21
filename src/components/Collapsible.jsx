import React, { useState } from 'react'
import '../styles/Collapsible.css'
import icon from '../assets/chevron.png'

function Collapsible ( { title, content } )
{
    const [ isOpen, setIsOpen ] = useState( false )
    const handleToggle = () =>
    {
        setIsOpen( !isOpen )
    }

    return (

        <div className={ "collapse" + ( isOpen ? 'open' : '' ) }>
            <div className="collapse_title" onClick={ handleToggle }>
                { title } <span className="collapse_icon"><img src={ icon } alt="chevron" /></span>
            </div>
            <div className="collapse_content">{ content }</div>
        </div>
    )
}

export default Collapsible

