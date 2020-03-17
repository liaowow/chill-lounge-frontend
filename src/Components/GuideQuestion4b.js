import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion4b = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h3>That’s okay!</h3>
            <h3>Remember that you’re here in the present, and nothing from your past can hurt you. If you like, you may want to try some grounding exercises to reinforce that idea.</h3>
            <button onClick={() => setContent("Q5")}>Show me some grounding exercises.</button>
            <button onClick={() => setContent("Q5")}>OK. Next!</button>
        </div>
    );
  };

  export default GuideQuestion4b