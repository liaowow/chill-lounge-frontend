import React from 'react';

const GuideQuestion4b = ({ setContent, setMood, handleUserResults }) => {

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
            <h3>That’s okay!</h3>
            <h3>Remember that you’re here in the present, and nothing from your past can hurt you. <br /><br />If you like, you may want to try some grounding exercises to reinforce that idea:</h3>
            <img src={require('../assets/grounding.png')} width="75%" alt="grounding exercise png" />
            <button onClick={handleSetMood1}>Cool, I did some grounding exercises.</button>
            <button onClick={handleSetMood0}>OK, I will do it later.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion4b