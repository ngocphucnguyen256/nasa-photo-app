import React from 'react'
import {useState, useEffect} from 'react'
import Media from './Media'



export default function Search() {

    const [mediaUrl,  setMediaUrl] =useState(null);
    const [searchInput, setSearchInput]= useState("Earth");
    const [mediaType, setMeType] = useState("");
    let textInput = React.createRef();

const handleClick=()=>{
    setSearchInput(textInput.current.value);
}


    useEffect(() => {
        fetchPhotoData();
        async function fetchPhotoData() {
            const res = await fetch(
                `https://images-api.nasa.gov/search?q=${searchInput}`
            );
            const data =await res.json();
            console.log(data);
            if(data.collection){
                if(data.collection.items[0]){
                    if(data.collection.items[0].data[0].media_type==="image"){
                        setMeType("image")
                        setMediaUrl(data.collection.items[0].links[0].href);

                    }
                    else{
                        setMeType("video")
                        setMediaUrl(data.collection.items[0].links[0].href);

                    }
                }
            
            }
        }
    },[searchInput])
    return (
        <div className="search">
            <h2>Image and Video Search</h2>
             <div  className="search__form">
                <input className="search__input" type="text" ref={textInput} placeholder="Enter key word" />
                 <button className="search__button" onClick={handleClick}>Search</button>
             </div>

        </div>
    )
}
