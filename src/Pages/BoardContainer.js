import React from 'react';
import { useSelector } from 'react-redux'

export default function Boards() {
    const boards = useSelector(state => state.boards)

    const renderBoards = () => {
        return !boards.length ? null : boards.map(board => <BoardCard board={board} key={board.id} />)
    }

    return (
        <div className="board-container">
            {/* <h1>Messages across the Chill Lounge</h1> */}
            {renderBoards()}
        </div>
    )

}

function BoardCard({ board }) {
    return (
        <div className="board-card">
            <img src={board.cocktail} alt="cocktail-image"/>
            <h3>{board.user.username} was here!</h3>
            <h6>{board.message}</h6>
        </div>
    )
}