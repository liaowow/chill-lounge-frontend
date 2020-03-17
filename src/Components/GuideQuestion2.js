import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion2 = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h2>Question 2 of 5</h2>
            <h3>Did you get enough sleep over the last 24 hours?</h3>
            <button onClick={() => setContent("Q3")}>Yes, I am well-rested.</button>
            <button onClick={() => setContent("Q2a")}>No, I didn't sleep well.</button>
        </div>
    );
  };

  export default GuideQuestion2