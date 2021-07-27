import React from 'react'
import {useState, useEffect } from 'react'



const apiKey = process.env.REACT_APP_NASA_KEY;

export default function EPIC() {
    const [caption, setCaption]=useState("")


    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`
            );
            const data =await res.json();
            return data;
        }
        fetchData().then(function (data) {
            if(data){
                setCaption(data[0].caption)
                var imageHtml=Object.keys(data).map((item) => {
                if(data[item].date){
                    let dateString=data[item].date.slice(0,10).split('-');
                    let year=dateString[0];
                    let month=dateString[1];
                    let day=dateString[2];
                    let imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${data[item].image}.png`
                    return(
                          `<div className="epic__image--wrapper">
                                <p className="epic__image--title">${data[item].date}</p>
                                <img className="epic__image" src=${imageUrl} alt=${data[item].identifier}
                                onerror="this.style.display='none';"/>
                            </div>
                        `
                         )
                }
                else{
                    return(``)
                }
            })
            var htmls= imageHtml.join('')
            document.getElementById('epic__images--container').innerHTML=htmls
            }
         }).catch(function(error){
        console.log(error);
     })



    }, [])

    return (
        <div className="epic">
        <h2 className="epic__title">Earth Polychromatic Imaging Camera</h2>
        <h3 className="epic__caption">{caption}</h3>
        <div className="epic__images--container" id="epic__images--container">

        </div>
        </div>
        )
}
