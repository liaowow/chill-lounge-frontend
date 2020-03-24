import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const GuideToBoard = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    // grab user info from the store
    const user = useSelector(state => state.user)

    // set states of the card info
    const [cocktail, setCocktail] = useState("")
    const [message, setMessage] = useState("")
    const cardData = { user_id: user.id, cocktail, message }

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(r => r.json())
        .then(cocktailData => {
            return setCocktail(cocktailData.drinks[0].strDrinkThumb)
        })

        fetch("https://api.adviceslip.com/advice")
        .then(r => r.json())
        .then(msgData => {
            return setMessage(msgData.slip.advice)
        })

    }, [])
    
    // GET a new cocktail img url
    function getNewCocktail() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(r => r.json())
        .then(cocktailData => {
            return setCocktail(cocktailData.drinks[0].strDrinkThumb)
        })
    }

    // GET a new message
    function getNewMessage() {
        fetch("https://api.adviceslip.com/advice")
        .then(r => r.json())
        .then(msgData => {
            return setMessage(msgData.slip.advice)
        })
    }

    // POST the new card to backend...
    function handleNewBoardCard() {
        const config = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cardData)
        }

        fetch("http://localhost:3000/boards", config)
        .then(r => r.json())
        .then(boardsData => {
            // update boards on the frontend
            const action = {
                type: 'SET_BOARDS',
                payload: boardsData.reverse()
            }
            // console.log("ACTION TO DISPATCH NEW BOARDS:", action)
            dispatch(action)
        })
        // redirect to Message Board page
        history.push("/boards")

    }
    
    // render the new card
    function BoardCard() {
        return (
            <div className="board-card">
                <img src={cocktail} alt={cocktail} />
                <h2>{user.username} was here!</h2>
                <h3>{message}</h3>
            </div>
        )
    }
    
    return (
        <div className="guide-container">
            <h3>Please enjoy your virtual cocktail on the house... <br />...with a sprinkle of wise words:</h3>
            <BoardCard />
            <h3>Would you like to share this?</h3>
            <button onClick={handleNewBoardCard}>Yes, post it on the message board!</button>
            <button onClick={getNewCocktail}>Hit me with another cocktail</button>
            <button onClick={getNewMessage}>Hit me with another message</button>
        </div>
    );
  };

  export default GuideToBoard