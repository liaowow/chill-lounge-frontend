import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Nav from '../Components/Nav'
import GuideIntro from '../Components/GuideIntro'
import GuideQuestion1 from '../Components/GuideQuestion1'
import GuideQuestion1a from '../Components/GuideQuestion1a'
import GuideQuestion1b from '../Components/GuideQuestion1b'
import GuideQuestion2 from '../Components/GuideQuestion2'
import GuideQuestion2a from '../Components/GuideQuestion2a'
import GuideQuestion3 from '../Components/GuideQuestion3'
import GuideQuestion3a from '../Components/GuideQuestion3a'
import GuideQuestion4 from '../Components/GuideQuestion4'
import GuideQuestion4a from '../Components/GuideQuestion4a'
import GuideQuestion4b from '../Components/GuideQuestion4b'
import GuideQuestion5 from '../Components/GuideQuestion5'
import GuideQuestion5a from '../Components/GuideQuestion5a'
import GuideQuestion5b from '../Components/GuideQuestion5b'
import GuideFinale from '../Components/GuideFinale'
import GuideToBoard from '../Components/GuideToBoard'

export default function Guide() {

  // grab user info from the store
  const user = useSelector(state => {
    return state.user
  })
  console.log("USER FROM STORE:", user)

  const dispatch = useDispatch()

  // set states of user results
  const [eat, setEat] = useState(0)
  const [sleep, setSleep] = useState(0)
  const [exercise, setExercise] = useState(0)
  const [mood, setMood] = useState(0)


  // store user results
  const userResults = {
    user_id: user.id,
    eat,
    sleep,
    exercise,
    mood
  }

  // POST a new user result to the backend
  const handleUserResults = () => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'bearer ' + localStorage.token
      },
      body: JSON.stringify(userResults)
    };
    fetch('http://localhost:3000/results', config)
      .then(r => r.json())
      .then(resultsData => {
        // update user results on the frontend
        const action = {
          type: 'SET_RESULTS',
          payload: resultsData.user.results
        }
        // console.log("ACTION TO DISPATCH NEW RESULT:", action)
        dispatch(action)
      });
  }


  // set states of guide content
  const [content, setContent] = useState("intro")

  // render guide content dynamically
  const renderGuide = () => {
    switch(content) {
      case "Q1":
        return <GuideQuestion1 setContent={setContent} setEat={setEat} />
      case "Q1a":
        return <GuideQuestion1a setContent={setContent} setEat={setEat} />      
      case "Q1b":
        return <GuideQuestion1b setContent={setContent} setEat={setEat} />           
      case "Q2":
        return <GuideQuestion2 setContent={setContent} setSleep={setSleep} />
      case "Q2a":
        return <GuideQuestion2a setContent={setContent} setSleep={setSleep} />
      case "Q3":
        return <GuideQuestion3 setContent={setContent} setExercise={setExercise} />
      case "Q3a":
        return <GuideQuestion3a setContent={setContent} setExercise={setExercise} />
      case "Q4":
        return <GuideQuestion4 setContent={setContent} />
      case "Q4a":
        return <GuideQuestion4a setContent={setContent} setMood={setMood} handleUserResults={handleUserResults} />      
      case "Q4b":
        return <GuideQuestion4b setContent={setContent} setMood={setMood} handleUserResults={handleUserResults} />         
      case "Q5":
        return <GuideQuestion5 setContent={setContent} />
      case "Q5a":
        return <GuideQuestion5a setContent={setContent} />      
      case "Q5b":
        return <GuideQuestion5b setContent={setContent} />
      case "GuideFinale":
        return <GuideFinale setContent={setContent} />      
      case "ToBoard":
        return <GuideToBoard setContent={setContent} />       
      default:
        return <GuideIntro setContent={setContent} />
    }
  }

  // RETURN VALUE
  return (
    <div>  
      <Nav />
      {user ? renderGuide() : null}
    </div>
  );

}