import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'
import { useDispatch } from 'react-redux'

export default function Boards() {
    
    const dispatch = useDispatch()

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
    }, [])

    // grab board cards from the store 
    const boards = useSelector(state => state.boards)

    const renderBoards = () => {
        return !boards.length ? null : boards.map(board => <BoardCard board={board} key={board.id} />)
    }

    return (
        <div>
            <Nav />
            <div className="board-container">
                {/* <h1>Messages across the Chill Lounge</h1> */}
                {renderBoards()}
            </div>
        </div>
    )

}

function BoardCard({ board }) {
    return (
        <div className="board-card">
            <img src={board.cocktail} alt={board.cocktail} />
            <h3>{board.user.username} was here!</h3>
            <h5>{board.message}</h5>
        </div>
    )
}