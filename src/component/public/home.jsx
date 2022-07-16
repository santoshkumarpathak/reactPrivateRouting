import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <div>home</div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                {/* <Link to="/admin">Admin</Link> */}
            </nav>
        </div>
    )
}
