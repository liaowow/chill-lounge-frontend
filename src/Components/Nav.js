import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <Link to="/home">HOME</Link>
            {/* <Link to="/guides">GUIDE</Link>
            <Link to="/results">MY RESULTS</Link> */}
            <Link to="/boards">MESSAGE BOARD</Link>
            <Link to="/">LOG OUT</Link>
        </nav>
    )
}