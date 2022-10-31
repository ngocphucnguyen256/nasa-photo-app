import React from 'react'
import {useState, useEffect} from 'react'



export default function Search() {

    const [searchInput, setSearchInput]= useState("Earth");
    let textInput = React.createRef();

    const handleClick=()=>{
        setSearchInput(textInput.current.value);
    }

    const keyPresshandler=(e)=>{
        if(e.keyCode===13){
         setSearchInput(textInput.current.value);
                
        }
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
                        let desc
                        if(subItem.links){
                            desc=subItem.data[0].description
                            url=subItem.links[0].href
                            alt=subItem.links[0].rel
                            return (
                                `
                                <div className="search__image--wrapper">
                                     <p className="search__image--desc">${desc}</p>
                                      <img className="search__image" src=${url} alt="${alt}"
                                      onerror="this.parentNode.style.display='none';"/>
                                </div>   
                                `
                            )
                        }
                        else{
                            return (``)
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
            <h2 className="search__title">Image and Video Search</h2>
             <div  className="search__form">
                <input className="search__input" type="text" ref={textInput} placeholder="Enter key word"
                 onKeyDown={keyPresshandler} />
                 <button className="search__button" onClick={handleClick}>Search</button>
             </div>
             <h3 className="search__keyword">Results of "<span>{searchInput}</span>" in Nasa Image Library</h3>
             <div className="search__images--container" id="search__images--container"> </div>
        </div>
    )
}
