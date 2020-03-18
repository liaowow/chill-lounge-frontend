import React from 'react';
import { useHistory } from 'react-router-dom'

const GuideFinale = ({ setContent }) => {
    
    const history = useHistory()
    
    function handleWellnessReport() {
        return history.push("/results")
    }
    
    return (
        <div className="guide-container">
            <h3>Congratulations on completing the guide!</h3>
            <h3>What would you like to do next?</h3>
            <button onClick={() => setContent("ToBoard")} >🍹Claim my free cocktail🍹</button>
            <button onClick={handleWellnessReport}>See my wellness report</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideFinale