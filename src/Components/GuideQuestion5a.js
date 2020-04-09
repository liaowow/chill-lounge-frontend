import React from 'react';

const GuideQuestion5a = ({ setContent, handleUserResults }) => {

    function handleGuideComplete() {
        handleUserResults()
        setContent("GuideFinale")
    }
    
    return (
        <div className="guide-container">
            <h3>Walks/rides are really good for both our bodies and our minds. <br />Take a walk/ride of whatever length you choose!</h3>
            <h3>You’re not trying to burn calories or get to a particular destination; <br />you’re just taking a pleasant jaunt. <br />Enjoy it!</h3>
            <button onClick={handleGuideComplete}>I will walk/ride later.</button>
            <button onClick={handleGuideComplete}>OK. I'm back from my walk/ride.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion5a