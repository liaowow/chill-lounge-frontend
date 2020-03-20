import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Pages'

export default function App() {

  const dispatch = useDispatch()
  // set up board page on mount
  useEffect(() => {
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
