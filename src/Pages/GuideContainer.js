import React from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'


export default function Guide() {

    const user = useSelector(state => state.user)
    console.log(user)

    function handleBreathe() {
      console.log("inside click")
      return (
       <div>
          <Nav />
          <div className="guide-container">
            <h3>Question 1</h3>
          </div>
       </div>
      )
    }

    return (
      <div>  
          <Nav />
          <div className="guide-container">
            <h2>Hello, {user.username}.</h2>
            <h3>Welcome to Flatiron Chill Lounge, <br />a simple self-care guide in the wake of coronavirus outbreak. </h3>
            <p>This guide consists of 5 simple questions. <br />When you complete the guide, we will give you a free virtual cocktail and some life advice, which you can share on our message board.</p>
            <p>Before we begin, please follow the animation below: <br />BIG breath in, BIG breath out.</p>
            <img src={require('../assets/breathe-in-out.gif')} alt="breathe gif" />
            <button onClick={() => handleBreathe()}>OK. I have taken one big breath.</button>
          </div>
      </div>
    );

  }