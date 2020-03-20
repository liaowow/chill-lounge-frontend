import React from 'react';

const GuideQuestion2a = ({ setContent, setSleep }) => {

    function handleNextQ() {
        setSleep(1)
        setContent("Q3")
    }

    function handleNapLater() {
        setSleep(0)
        setContent("Q3")
    }
    
    return (
        <div className="guide-container">
            <h3>Take a nap. You can finish this guide when you wake up.</h3>
            <h3>Also, set an alarm for yourself, <br />with plenty of time to wake up and get yourself together <br />between your nap and your responsibilities.</h3>
            <button onClick={handleNextQ}>Cool. I finished my nap.</button>
            <button onClick={handleNapLater}>OK. I will take my nap later.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion2a