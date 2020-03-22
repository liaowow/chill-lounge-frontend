import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'

export default function Boards() {
    
    // grab board cards and user info from the store
    const boards = useSelector(state => state.boards)
    const userInfo = useSelector(state => state.user)

    // handle search-related functions
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearchChange = e => {
        setSearchTerm(e.target.value)
    }
    console.log("Search Term ===>", searchTerm)

    // modify board cards based on search terms
    // make them case insensitive
    const lowerCaseSearchTerm = searchTerm.toLowerCase()
    const modifiedBoards = boards.filter(board => board.user.username.toLowerCase().includes(lowerCaseSearchTerm) || board.message.toLowerCase().includes(lowerCaseSearchTerm) || "was here!".includes(lowerCaseSearchTerm))

    // set states of boards, initializing with modifiedBoards
    const [myBoards, setMyBoards] = useState(modifiedBoards)
    
    // handle checkbox toggle
    const [myCardChecked, setMyCardChecked] = useState(false)
    const handleCheckBoxChange = e => {
        setMyCardChecked(!myCardChecked)
        renderMyCards(e.target.checked)
    }
    
    // modify board cards based on checkbox status
    const renderMyCards = checked => {
        const userCards = myBoards.filter(board => board.user.id === userInfo.user.id)
        console.log("check status:", checked)
        console.log("myBoards when checked ===>", myBoards)
        return checked ? setMyBoards(modifiedBoards) : setMyBoards(userCards)
    }
    
    // render boards
    const renderBoards = (myBoards) => {
        return !myBoards.length ? null : myBoards.map(board => <BoardCard board={board} key={board.id} />)
    }

    return (
        <div>
            <Nav />
            <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} myCardChecked={myCardChecked} handleCheckBoxChange={handleCheckBoxChange} />
            <div className="board-container">
                {renderBoards(modifiedBoards)}
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

function SearchBar({ searchTerm, handleSearchChange, myCardChecked, handleCheckBoxChange }) {
    return (
        <div className="search">
         <input type="text" 
                className="searchTerm" 
                placeholder="Type here to search"
                value={searchTerm}
                onChange={handleSearchChange} />
        {/* <label htmlFor="myCard">Show only my cards:</label>
          <input type="checkbox" 
                 id="myCard" 
                 name="sortAgeChecked" 
                 checked={myCardChecked} 
                 onChange={handleCheckBoxChange} /> */}
        </div>
      )
}