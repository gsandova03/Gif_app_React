import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGift({keyword}){
    
    const [gifs, updateGifs] = useState([])

    //useEffect sirve para ejecutar una accion cada vez que renderiza nuestro componente
  
    useEffect(function (){
        getGifs({keyword})
        .then(gifs => updateGifs(gifs))
    }, [keyword])

    return gifs.map(({id, title, url}) => 
        (
        <Gif
            key={id} 
            title={title} 
            url={url} 
            id={id} />
        )
    )
}