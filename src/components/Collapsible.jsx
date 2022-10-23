import React, { useState } from 'react'
import '../styles/Collapsible.css'
import icon from '../assets/chevron.png'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

function Collapsible ( { title, content } )
{
    const [ isOpen, setIsOpen ] = useState( false )
    

    return (

        <div className={ "collapse" + ( isOpen ? 'open' : '' ) }>
            <div className="collapse_title" >
                { title } <img src={ icon } alt="chevron" className="collapse_icon" onClick={ () => setIsOpen(!isOpen )} />
            </div>

            { isOpen &&
                <div className="collapse_content">{ content }</div>
            }
        </div>
    )
}

export default Collapsible

