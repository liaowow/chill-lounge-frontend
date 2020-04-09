import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Nav from '../Components/Nav'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function Results() {

    const history = useHistory()
    const user = useSelector(state => state.user)
    const userResults = useSelector(state => state.results)
    // set states of calendar date
    const [calDate, setCalDate] = useState(new Date())
    // set states of results (initialized with results from store AND latest on top)
    const [resultArr, setResultArr] = useState(userResults.reverse())
    
    // render each result
    function ResultCard({ result }) {
        
        const dateFormat = new Date(result.created_at)
        
        return (
            <div>
                <h2>{dateFormat.toLocaleString()}</h2>
                <ul>
                    <li>Eat<hr />{result.eat === 0 ? "Almost there!" : "👍"}</li>
                    <li>Sleep<hr />{result.sleep === 0 ? "Almost there!" : "👍"}</li>
                    <li>Exercise<hr />{result.exercise === 0 ? "Almost there!" : "👍"}</li>
                    <li>Mood<hr />{result.mood === 0 ? "Almost there!" : "👍"}</li>
                </ul>
            </div>
        )
    }

    // btn for redirecting to guide if no result
    function handleStartGuide() {
        return history.push("/guide")
    }

    // change results based on calendar date click
    function onChange (calDate) {
        setCalDate(calDate)
        // console.log("CALENDAR ===>", calDate.toLocaleString().split(",")[0])
        // console.log("RESULT ARR ===>", resultArr)
        const filteredResults = userResults.filter(result => {
            const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
            const newCalDateFormat = calDate.toLocaleString().split(",")[0]
            return newResultFormat === newCalDateFormat
        })
        // console.log("FILTERED RESULTS:", filteredResults)
        setResultArr(filteredResults)
    }


    // RETURN VALUE if user has results
    if (resultArr.length) {
        return (
            <div>
                <Nav />
                <div className="result-wrapper">
                    <div className="result-report">
                        {resultArr.map(result => <ResultCard result={result} key={result.id} />)}
                    </div>
                    <div className="result-calendar">
                        <Calendar onChange={onChange} value={calDate} />
                    </div>
                </div>
            </div>
        )
    } 

    // RETURN VALUE if user doesn't have any results
    return (
        <div>
            <Nav />
            <div className="result-wrapper">
                <div className="result-report">
                    <h3>Hi, {user.username}.</h3>
                    <h3>Looks like you don't have a wellness report on this date.</h3>
                    <button onClick={handleStartGuide}>Start Guide</button>
                </div>
                <div className="result-calendar">
                    <Calendar onChange={onChange} value={calDate} />
                </div>
            </div>
        </div>
    )

}