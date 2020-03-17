import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion3a = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h3>If there is something your doctor has prescribed you for pain, you should take it or do it. <br />Be nice to your body. Try replacing the painful feeling with some pleasant alternative sensations, like good smells or pleasurable textures.</h3>
            <button onClick={() => setContent("Q4")}>Cool. I'm all taken care of.</button>
            <button onClick={() => setContent("Q4")}>I will do it later.</button>
        </div>
    );
  };

  export default GuideQuestion3a