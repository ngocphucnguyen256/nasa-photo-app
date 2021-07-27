import React from 'react'
import { useState, useEffect } from 'react'



const apiKey = process.env.REACT_APP_NASA_KEY;

export default function EPIC() {
    const [photoData,  setPhotoData] =useState(null);




    useEffect(() => {
        fetchPhotoData();
        async function fetchPhotoData() {
            const res = await fetch(
                `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`
            );
            const data =await res.json();
            setPhotoData(data);
            console.log(data)
        }
       
    }, [])

    if(!photoData) {
        return <div/>
    }
    return (
        <div className="apod">
        <h2>Earth Polychromatic Imaging Camera</h2>
        <div className="container photo">
            <h3 className="photo__title">{photoData.title}</h3>
            <p className="photo__info">{photoData.copyright} - {photoData.date}</p>
            <div className="photo__wrapper">
                <img className="photo_image" src={photoData.url} alt={photoData.title}/>
            </div>
            <div className="photo__explanation">{photoData.explanation}</div>
        </div>
        </div>
    )
}
