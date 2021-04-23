import React from 'react'

export default function Gif({title, url, id}){
    return(
        <div className="gift">
            <h4>{title}</h4>
            <img src={url} />
            <br/>
            <small>{id}</small>
        </div>
    )
}