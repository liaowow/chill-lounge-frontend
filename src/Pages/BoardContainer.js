import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'
import { useDispatch } from 'react-redux'

export default function Boards() {
    
    // const dispatch = useDispatch()

    // useEffect(() => {
    //   fetch('http://localhost:3000/boards')
    //     .then(r => r.json())
    //     .then(boards => {
    //       const action = {
    //         type: 'SET_BOARDS',
    //         payload: boards.reverse()
    //       }
    //       dispatch(action)
    //     })
    // })

    // grab board cards from the store 
    const boards = useSelector(state => state.boards)
    console.log("BOARDS IN THE STORE:", boards)

    const renderBoards = () => {
        return !boards.length ? null : boards.map(board => <BoardCard board={board} key={board.id} />)
    }

    return (
        <div>
            <Nav />
            <div className="board-container">
                {renderBoards()}
            </div>
        </div>
    )

}

function BoardCard({ board }) {

    // grab user info from the store
    // const boards = useSelector(state => state.boards)

    return (
        <div className="board-card">
            <img src={board.cocktail} alt={board.cocktail} />
            <h2>{board.user.username} was here!</h2>
            <h3>{board.message}</h3>
        </div>
    )
}