import React, { Component } from 'react';
import { useSelector } from 'react-redux'

export default function Home() {

    const user = useSelector(state => state.user)
    console.log(user)
    return (
      <div>  
          <h1>Hello, {user.username}.</h1>
      </div>
    );
  }

