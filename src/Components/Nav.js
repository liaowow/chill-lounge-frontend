import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Nav() {

    const dispatch = useDispatch()

    function clearLocalStorage() {
        // clear local storage
        localStorage.clear()
        // use dispatch log out action
        dispatch({
            type: "LOG_OUT"
        })
    }

    return (
        <nav>
            <Link to="/guide">GUIDE</Link>
            <Link to="/results">MY WELLNESS REPORT</Link>
            <Link to="/boards">MESSAGE BOARD</Link>
            <Link onClick={clearLocalStorage} to="/">LOG OUT</Link>
        </nav>
    )
}