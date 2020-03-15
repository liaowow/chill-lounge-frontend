import React from 'react';
import { useSelector } from 'react-redux'
import Nav from '../Components/Nav'

export default function Guide() {

    const user = useSelector(state => state)
    console.log(user)
    return (
      <div>  
          <Nav />
          <h2>Hello, {user.username}.</h2>
      </div>
    );
  }