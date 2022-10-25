import React, { useState } from 'react'
import '../styles/Collapsible.css'
import icon from '../assets/chevron.png'

function Collapsible ( { title, tags } )
{
    const [ isOpen, setIsOpen ] = useState( false )
    

    return (

        <div className={ "collapse" + ( isOpen ? 'open' : '' ) }>
            <div className="collapse_title" >
                { title } <img src={ icon } alt="chevron" className="collapse_icon" onClick={ () => setIsOpen(!isOpen )} />
            </div>

            { isOpen &&
                <div className="collapse_tags">{ tags }</div>
            }
        </div>
    )
}

export default Collapsible

