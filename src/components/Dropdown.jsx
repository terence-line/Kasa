import React, { useState } from 'react'
import '../styles/Dropdown.css'
import icon from '../assets/chevron.png'

function Dropdown ( { title, tags } )
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

export default Dropdown

