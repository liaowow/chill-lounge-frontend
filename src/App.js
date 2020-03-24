import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Pages'

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.token) {
      const config = {
        headers: {
          Authorization: 'bearer ' + localStorage.token
        }
      }

      fetch('https://secret-cove-14662.herokuapp.com/', config)
        .then(r => r.json())
        .then(userObj => {
            dispatch({
              type: "SET_USER",
              payload: userObj
            })

            dispatch({
                type: "SET_RESULTS",
                payload: userObj.results
            })
        })
    }

    fetch('https://secret-cove-14662.herokuapp.com/boards')
      .then(r => r.json())
      .then(boards => {
        const action = {
          type: 'SET_BOARDS',
          payload: boards.reverse()
        }
        dispatch(action)
      })

  })

  return (
    <Router>
      <Routes />
    </Router>
  );
}
