import React, { useState } from 'react'
import '../styles/Dropdown.css'
import icon from '../assets/chevron.png'

function Dropdown ( props )
{
    const [ isOpen, setIsOpen ] = useState( false )
    

    return (

        <div className={ "dropdown" + ( isOpen ? 'open' : '' ) }>
            <div className="dropdown_title" >
                { props.title } <img src={ icon } alt="chevron" className={isOpen ? 'dropdown_icon' : 'up' } onClick={ () => setIsOpen(!isOpen )} />
            </div>

            { isOpen &&
                <div className="dropdown_text">{props.text}</div>
            }
        </div>
    )
}

export default Dropdown

