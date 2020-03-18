import React from 'react';

const GuideQuestion2 = ({ setContent, setSleep }) => {

    function handleNextQ() {
        setSleep(1)
        setContent("Q3")
    }
    
    return (
        <div className="guide-container">
            <h2>Question 2 of 5</h2>
            <h3>Did you get enough sleep over the last 24 hours?</h3>
            <button onClick={handleNextQ}>Yes, I am well-rested.</button>
            <button onClick={() => setContent("Q2a")}>No, I didn't sleep well.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion2