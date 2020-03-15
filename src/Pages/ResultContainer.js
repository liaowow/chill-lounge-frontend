import React from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'
import Calendar from 'react-calendar'

export default function Results() {

    const user = useSelector(state => state.user)

    return (
        <div>
            <Nav />
            <div className="result-wrapper">
                <div className="result-calendar">
                    <Calendar />
                </div>
                <div className="result-report">
                    <h3>Hi {user.username}.</h3>
                    <p>Looks like you haven't completed our guide yet.</p>
                    <button>Start Guide</button>
                </div>
            </div>
        </div>
    )
}