import React from 'react'
import {useState, useEffect} from 'react'



export default function Search() {

    const [searchInput, setSearchInput]= useState("Earth");
    let textInput = React.createRef();

const handleClick=()=>{
    setSearchInput(textInput.current.value);
}


    useEffect(() => {
        async function fetchPhotoData() {
            const res = await fetch(
                `https://images-api.nasa.gov/search?q=${searchInput}`
            )
                
            const data =await res.json();
            return data;
            }

            fetchPhotoData().then(function(data){
                if(data){
                    var arrayData = Array.from(data.collection.items)
                    var imageHtml= arrayData.map((subItem)=>{
                        let url
                        let alt
                        if(subItem.links){
                            url=subItem.links[0].href
                            alt=subItem.links[0].rel
                            return (
                                `
                                <div className="search__image--wrapper">
                                      <img className="search__image" src=${url} alt="${alt}"
                                      onerror="this.style.display='none';"/>
                                </div>   
                                `
                            )
                        }
      
                        
                        })
                    }
                    var htmls = imageHtml.join('');
                    document.getElementById('search__images--container').innerHTML=htmls;
            })
            .catch(function(error){
                console.log(error);
            });
        
         },[searchInput])




    return (
        <div className="search">
            <h2>Image and Video Search</h2>
             <div  className="search__form">
                <input className="search__input" type="text" ref={textInput} placeholder="Enter key word" />
                 <button className="search__button" onClick={handleClick}>Search</button>
             </div>
             <div className="search__images--container" id="search__images--container">

             </div>
        </div>
    )
}
