import React from 'react'
import StarIcon from './Icons/StarIcon'


const Star = ( { value = 0 } ) =>
{
    
    return (
        <div>
            {[1,2,3,4,5].map(number => <StarIcon color={ value >= number ? "#FF6060" : "#E3E3E3" } />

            )}
        </div>
    

    )
}
export default Star