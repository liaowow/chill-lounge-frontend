import React from 'react';

const GuideQuestion4 = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h2>Question 4 of 5</h2>
            <h3>Cool. We’ve taken care of the physical self-care. Now we’re going to deal with the emotional ones. <br />Whenever you are feeling down, do you know why you’re in a bad mood, or not feeling well emotionally?</h3>
            <button onClick={() => setContent("Q4a")}>Yes, there's something on my mind.</button>
            <button onClick={() => setContent("Q4b")}>No, I don't know the reason.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion4