import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Pages'
import Nav from './Components/Nav'
import { useDispatch } from 'react-redux'

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/boards')
      .then(r => r.json())
      .then(boards => {
        const action = {
          type: 'SET_BOARDS',
          payload: boards
        }
        dispatch(action)
      })
  }, [])

  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}
