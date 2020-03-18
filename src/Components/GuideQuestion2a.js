import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion1b = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h3>Take a nap. You can finish this guide when you wake up. <br />Also, set an alarm for yourself, with plenty of time to wake up and get yourself together between your nap and your responsibilities.</h3>
            <button onClick={() => setContent("Q3")}>Cool. I finished my nap.</button>
            <button onClick={() => setContent("Q3")}>OK. I will take my nap later.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion1b