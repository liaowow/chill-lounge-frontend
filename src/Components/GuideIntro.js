import React from 'react';
import { useSelector } from 'react-redux'

const GuideIntro = ({ setContent }) => {

    // grab user info from the store
    const user = useSelector(state => state.user)
    
    return (
        <div>  
            <div className="guide-container">
                <h2>Hello, {user.username}.</h2>
                <h3>Welcome to Flatiron Chill Lounge, <br />a quick self-care guide to help you strengthen personal wellness <br />in stressful times, e.g. the coronavirus outbreak. </h3>
                <h3>This guide consists of 5 simple questions. <br /><br />When you complete the guide, we will give you a free virtual cocktail🍹 <br />and some life advice, which you can share on our message board.</h3>
                <h3>Before we begin, please follow the animation below: <br />BIG breath in, BIG breath out.</h3>
                <img src={require('../assets/breathe-in-out.gif')} alt="breathe gif" />
                <button onClick={() => setContent("Q1")}>OK. I have taken one big breath.</button>
            </div>
        </div>
    );
  };

  export default GuideIntro