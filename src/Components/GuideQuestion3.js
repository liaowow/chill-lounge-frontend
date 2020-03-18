import React from 'react';

const GuideQuestion3 = ({ setContent, setExercise }) => {

    function handleNextQ() {
        setExercise(1)
        setContent("Q4")
    }
    
    return (
        <div className="guide-container">
            <h2>Question 3 of 5</h2>
            <h3>Now, stand up and follow the movement below. <br />Are you having trouble completing the exercise?</h3>
            <img src={require('../assets/stretching.gif')} width="80%" alt="stretching gif" />
            <button onClick={handleNextQ}>No, my body feels fine.</button>
            <button onClick={() => setContent("Q3a")}>Yes, something hurts.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion3