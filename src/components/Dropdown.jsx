import React, { useState } from 'react'
import '../styles/Dropdown.css'
import icon from '../assets/chevron.png'

function Dropdown ( { title, tags } )
{
    const [ isOpen, setIsOpen ] = useState( false )
    

    return (

        <div className={ "dropdown" + ( isOpen ? 'open' : '' ) }>
            <div className="dropdown_title" >
                { title } <img src={ icon } alt="chevron" className="dropdown_icon" onClick={ () => setIsOpen(!isOpen )} />
            </div>

            { isOpen &&
                <div className="dropdown_tags">{ tags }</div>
            }
        </div>
    )
}

export default Dropdown

