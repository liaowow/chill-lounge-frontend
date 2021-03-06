import React from 'react';

const GuideQuestion5b = ({ setContent, handleUserResults }) => {

    function handleGuideComplete() {
        handleUserResults()
        setContent("GuideFinale")
    }
    
    return (
        <div className="guide-container">
            <h3>No worries! Here are some alternatives:</h3>
            <ul>
                <li>Just sit outside for some fresh air</li>
                <li>Bouncing on Bed</li>
                <li>Dancing</li>
                <li>Wiggling, squirming, jiggling around; <br />being silly and active and having fun!</li>
            </ul>
            <button onClick={handleGuideComplete}>OK, I did some of those.</button>
            <button onClick={handleGuideComplete}>I will do it later.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion5b