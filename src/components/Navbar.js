import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
            <h1>A Rabbit Hole</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/topics">Learn all the things</Link>
            </div>
        </nav>
    )
}