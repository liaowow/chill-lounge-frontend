import React from 'react';

const GuideQuestion1b = ({ setContent, setEat }) => {

    function handleFinishedMeal() {
        setEat(1)
        setContent("Q2")
    }

    function handleMealLater() {
        setEat(0)
        setContent("Q2")
    }
    
    return (
        <div className="guide-container">
            <h3>You haven’t eaten in a little while, and your body needs fuel. <br />It’s time for breakfast, lunch, or dinner. <br />Notice the quantity you’re eating, and how healthy it is for you. <br />You’re probably just fine at trusting your gut and knowing what your body needs.</h3>
            <button onClick={handleMealLater}>I will eat my meal later.</button>
            <button onClick={handleFinishedMeal}>OK. I finished my meal.</button>
            <br />
            <button id="helperbtn" onClick={() => setContent("Intro")}>START OVER</button>
        </div>
    );
  };

  export default GuideQuestion1b