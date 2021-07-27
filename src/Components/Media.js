import React from 'react'
import ReactPlayer  from 'react-player';


export default function Media(mediaType, mediaUrl) {

    if (mediaType ==="image"){
        return(
            <div className="search__image--wrapper">
                   <img className="search__image" src={mediaUrl} alt="data"/>
             </div>
        )
    }
    else{
        return(
            <div>
                 <ReactPlayer url={mediaUrl}/>
             </div>
        )

    }

}
