import React from 'react';

const GuideQuestion3a = ({ setContent, setExercise }) => {

    function handleNextQ() {
        setExercise(1)
        setContent("Q4")
    }

    function handleLater() {
        setExercise(0)
        setContent("Q4")
    }
    
    return (
        <div className="guide-container">
            <h3>If there is something your doctor has prescribed you for pain, you should take it or do it. <br />Be nice to your body. Try replacing the painful feeling with some pleasant alternative sensations, like good smells or pleasurable textures.</h3>
            <button onClick={handleNextQ}>Cool. I'm all taken care of.</button>
            <button onClick={handleLater}>I will do it later.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion3a