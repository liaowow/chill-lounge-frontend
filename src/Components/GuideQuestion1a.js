import React from 'react';

const GuideQuestion1a = ({ setContent, setEat }) => {
    
    function handleFinishedSnack() {
        setEat(1)
        setContent("Q2")
    }

    function handleSnackLater() {
        setEat(0)
        setContent("Q2")
    }

    return (
        <div className="guide-container">            
            <h3>When you need a snack, just pop some easy food in your mouth. <br />You don't have to eat perfectly healthy all the time -- no one does! <br />You're probably just fine at trusting your gut and knowing what your body needs.</h3>
            <button onClick={handleSnackLater}>I will snack later.</button>
            <button onClick={handleFinishedSnack}>OK. I finished my snack.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion1a