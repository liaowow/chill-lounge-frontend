import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion3 = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h2>Question 3 of 5</h2>
            <h3>Now, stand up and follow the movement below. <br />Are you having trouble completing the exercise?</h3>
            <img src={require('../assets/stretching.gif')} alt="stretching gif" />
            <button onClick={() => setContent("Q4")}>No, my body feels fine.</button>
            <button onClick={() => setContent("Q3a")}>Yes, something hurts.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion3