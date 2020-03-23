import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Pages'
import setUser from './Redux/Actions/userAction'

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.token) {
      const config = {
        headers: {
          Authorization: 'bearer ' + localStorage.token
        }
      }

      fetch('http://localhost:3000/', config)
      .then(r => r.json())
      .then(userObj => dispatch(setUser(userObj)))
    }

    fetch('http://localhost:3000/boards')
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
