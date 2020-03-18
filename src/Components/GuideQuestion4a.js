import React from 'react';

const GuideQuestion4a = ({ setContent, setMood, handleUserResults }) => {

    function handleSetMood1() {
        setMood(1)
        handleUserResults()
        setContent("Q5")
    }

    function handleSetMood0() {
        handleUserResults()
        setContent("Q5")
    }
    
    return (
        <div className="guide-container">
            <h3>Set a timer for 15 minutes and do something to take care of that worry. <br />Maybe chip away at a task that seems insurmountable. You can do it!</h3>
            <button onClick={handleSetMood0}>I will do it later.</button>
            <button onClick={handleSetMood1}>OK. I did my best.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion4a