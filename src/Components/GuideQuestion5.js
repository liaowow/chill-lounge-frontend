import React from 'react';

const GuideQuestion5 = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h2>Question 5 of 5</h2>
            <h3>Do you have the energy and ability to go for a walk/ride?</h3>
            <button onClick={() => setContent("Q5a")}>Yes, a walk/ride sounds great.</button>
            <button onClick={() => setContent("Q5b")}>No, a walk/ride is too much for me.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion5