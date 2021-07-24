import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <div className="menu">
                <Link className="link" to='/APOD' >Picture of the day</Link>
                <Link className="link" to='/Search' >Search</Link>
                <Link className="link" to='/APOD' >Epic</Link>
            </div>
            <h1>Nasa Api App</h1>
            <div className="home__info">
                <h2>A web app using Nasa Api</h2>
            </div>
        </div>
    )
}
