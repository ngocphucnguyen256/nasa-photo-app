import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <h1 className="home__title">Nasa Api App</h1>
            <div className="home__info">
                <h2 className="home__desc">A small web app using Nasa Api</h2>
            </div>
            <div className="menu">
                <Link className="link" to='/APOD' >Picture of the day</Link>
                <Link className="link" to='/Search' >Search in Nasa library</Link>
                <Link className="link" to='/EPIC' >Earth camera</Link>
            </div>
        </div>
    )
}
