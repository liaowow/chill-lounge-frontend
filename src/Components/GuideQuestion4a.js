import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion4a = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h3>Set a timer for 15 minutes and do something to take care of that worry. <br />Maybe chip away at a task that seems insurmountable. You can do it!</h3>
            <button onClick={() => setContent("Q5")}>I will do it later.</button>
            <button onClick={() => setContent("Q5")}>OK. I did my best.</button>
        </div>
    );
  };

  export default GuideQuestion4a