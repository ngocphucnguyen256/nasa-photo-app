import React from 'react'
import { useEffect } from 'react'



const apiKey = process.env.REACT_APP_NASA_KEY;

export default function EPIC() {
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`
            );
            const data =await res.json();
            console.log(data)
            return data;
        }
        fetchData().then(function (data) {
            if(data){
                var imageHtml=Object.keys(data).map((item, i) => {
                if(item.date){
                    let dateString=item.date.slice(0,10).split('-');
                    let year=dateString[0];
                    let month=dateString[1];
                    let day=dateString[2];
                    let imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${item.image}`
                    return(
                          `<div>
                                <img src=${imageUrl} alt=${item.identifier}/>
                            </div>
                        `
                         )
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
        <h2>Earth Polychromatic Imaging Camera</h2>
        <div className="epic__images--container" id="epic__images--container">

        </div>
        </div>
        )
}
