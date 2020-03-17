import React from 'react';
import { useSelector } from 'react-redux'

const GuideQuestion5a = ({ setContent }) => {
    
    return (
        <div className="guide-container">
            <h3>Walks/rides are really good for both our bodies and our minds. Take a walk/ride of whatever length you choose!</h3>
            <h3>You’re not trying to burn calories or get to a particular destination; you’re just taking a pleasant jaunt. Enjoy it!</h3>
            <button >I will walk/ride later.</button>
            <button >OK. I'm back from my walk/ride.</button>
        </div>
    );
  };

  export default GuideQuestion5a