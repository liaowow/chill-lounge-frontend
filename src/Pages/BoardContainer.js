import React from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'

export default function Boards() {
    
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

    return (
        <div className="board-card">
            <img src={board.cocktail} alt={board.cocktail} />
            <h2>{board.user.username} was here!</h2>
            <h3>{board.message}</h3>
        </div>
    )
}