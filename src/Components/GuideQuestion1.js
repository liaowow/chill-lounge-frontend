import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion1 = ({ setContent }) => {

    // grab user info from the store
    const user = useSelector(state => state.user)
    console.log(user)
    
    return (
        <div className="guide-container">
            <h2>Question 1 of 5</h2>
            <h3>Have you eaten in the last 4 hours?</h3>
            <button onClick={() => setContent("Q2")}>Yes! Next Question.</button>
            <button onClick={() => setContent("Q1a")}>I could use a snack.</button>
            <button onClick={() => setContent("Q1b")}>No, I need a meal.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion1