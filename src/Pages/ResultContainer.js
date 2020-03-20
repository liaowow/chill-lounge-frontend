import React from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'
import Calendar from 'react-calendar'
import { useHistory } from 'react-router-dom'

export default function Results() {

    const history = useHistory()
    const user = useSelector(state => state.user)
    const userResults = useSelector(state => state.results)

    function ResultCard({ result }) {

        const dateFormat = new Date(result.created_at)

        return (
            <div>
                <h2>{dateFormat.toLocaleString()}</h2>
                <ul>
                    <li>Eat <hr />{result.eat === 0 ? "Almost there!" : "👍"}</li>
                    <li>Sleep<hr />{result.sleep === 0 ? "Almost there!" : "👍"}</li>
                    <li>Exercise <hr />{result.exercise === 0 ? "Almost there!" : "👍"}</li>
                    <li>Mood <hr />{result.mood === 0 ? "Almost there!" : "👍"}</li>
                </ul>
            </div>
        )
    }

    function handleStartGuide() {
        return history.push("/guide")
    }

    // RETURN VALUE if user has results
    if (userResults.length) {

        userResults.reverse()

        return (
            <div>
                <Nav />
                <div className="result-wrapper">
                    <div className="result-calendar">
                        <Calendar />
                    </div>
                    <div className="result-report">
                        {userResults.map(result => <ResultCard result={result} key={result.id} />)}
                    </div>
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
                        <h3>Hi, {user.user.username}.</h3>
                        <p>Looks like you haven't completed our guide yet.</p>
                        <button onClick={handleStartGuide}>Start Guide</button>
                    </div>
                </div>
            </div>
        )
    }
}