import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion1b = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h3>You haven’t eaten in a little while, and your body needs fuel. <br />It’s time for breakfast, lunch, or dinner. <br />Notice the quantity you’re eating, and how healthy it is for you. <br />You’re probably just fine at trusting your gut and knowing what your body needs.</h3>
            <button onClick={() => setContent("Q2")}>I will eat my meal later.</button>
            <button onClick={() => setContent("Q2")}>OK. I finished my meal.</button>
        </div>
    );
  };

  export default GuideQuestion1b