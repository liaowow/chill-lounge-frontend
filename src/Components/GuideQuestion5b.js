import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion5b = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h3>No worries! Here are some alternatives:</h3>
            <ul>
                <li>Just sit outside for some fresh air</li>
                <li>Bouncing on Bed</li>
                <li>Dancing</li>
                <li>Wiggling, squirming, jiggling around; being silly and active and having fun!</li>
            </ul>
            <button >OK, I did some of those.</button>
            <button >I will do it later.</button>
        </div>
    );
  };

  export default GuideQuestion5b