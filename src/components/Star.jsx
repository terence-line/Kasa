import React from 'react'
import StarIcon from './Icons/StarIcon'
import '../styles/Star.css'


const Star = ( { value = 0 } ) =>
{
    
    return (
        <div className="rating">
            {[1,2,3,4,5].map(number => <StarIcon color={ value >= (number + 1) ? "#FF6060" : "#E3E3E3" } />

            )}
        </div>
    

    )
}
export default Star