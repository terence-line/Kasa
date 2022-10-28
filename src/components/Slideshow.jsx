import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import logements from '../datas/logements.json'
import '../styles/Slideshow.css'
import icon3 from '../assets/chevron-left-solid.svg'
import icon4 from '../assets/chevron-right-solid.svg'


const Slideshow = () =>
{
    
    const [carrousselIndex, setCarrousselIndex] = useState(0)
    const params = useParams()
    const logement = logements.find( l => l.id === params.id )
    

    useEffect(() => {
        if (carrousselIndex > logement.pictures.length - 1) {
            setCarrousselIndex(0)
        }
        if (carrousselIndex < 0) {
            setCarrousselIndex(logement.pictures.length - 1)
        }
    }, [ carrousselIndex, logement.pictures.length ] )
    

    return (

        <div className='carroussel'>
            
            {logement.pictures.length > 1 &&
                <button onClick={() => setCarrousselIndex(carrousselIndex - 1)}
                    className='carroussel-btn-left'>
                    <img src={icon3} alt="chevron gauche"/></button>}
                        
                <img src={logement.pictures[carrousselIndex]}
                    alt="Galerie des différentes pièces du logement" className='carroussel-img' />
                    
                {logement.pictures.length > 1 &&
                <span className='carroussel-bullet-point'>{ carrousselIndex + 1}/
                    {logement.pictures.length}</span> }

                {logement.pictures.length > 1 && <button onClick={() => 
                    setCarrousselIndex(carrousselIndex + 1)} className='carroussel-btn-right'>
                <img src={icon4} alt="chevron droite" /></button>}
            
        </div>
    )
}

export default Slideshow