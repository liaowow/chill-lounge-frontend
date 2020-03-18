import React from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'
import Calendar from 'react-calendar'
import { useHistory } from 'react-router-dom'

export default function Results() {

    const history = useHistory()
    const user = useSelector(state => state.user)

    function ResultCard({ result }) {
        return (
            <div className="board-card">
                <h3>Date: {result.created_at}</h3>
                <ul>
                    <li>Eat: {result.eat === 0 ? "Almost there!" : "👍"}</li>
                    <li>Sleep: {result.sleep === 0 ? "Almost there!" : "👍"}</li>
                    <li>Exercise: {result.exercise === 0 ? "Almost there!" : "👍"}</li>
                    <li>Mood: {result.mood === 0 ? "Almost there!" : "👍"}</li>
                </ul>
            </div>
        )
    }

    function handleStartGuide() {
        return history.push("/guide")
    }

    // RETURN VALUE if user has results
    if (user.results.length) {
        return (
            <div>
                <Nav />
                <div className="board-container">
                    {user.results.map(result => <ResultCard result={result} key={result.id} />)}
                </div>
            </div>
        )
    } else {
        // RETURN VALUE if user doesn't have any results
        return (
            <div>
                <Nav />
                <div className="result-wrapper">
                    <div className="result-calendar">
                        <Calendar />
                    </div>
                    <div className="result-report">
                        <h3>Hi {user.user.username}.</h3>
                        <p>Looks like you haven't completed our guide yet.</p>
                        <button onClick={handleStartGuide}>Start Guide</button>
                    </div>
                </div>
            </div>
        )
    }
}