import React, { useState } from 'react';
// import SignupContainer from './Signup'
import { Link, useNavigate } from 'react-router-dom'

function LoginContainer({setUsername}) {
  const navigate = useNavigate();

  const handleClick = async(e) => {
    e.preventDefault();
    const body = {username: e.target[0].value, password: e.target[1].value}
    try{
    const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json, text/plain"
      },
      body: JSON.stringify(body)
    })
    const receivedBack = res.json()
    if(receivedBack.exist === true) {
      setUsername(body.username)
      navigate('/homepage')
    } else {
      alert('Wrong Information')
    }
  } catch (error) {
    console.log('error')
  }
  }

  const fakeFetch = () => {
   // const body = {username: e.target[0].value}
    setUsername(`12`)
    navigate('/homepage')
  }

  return (
    <>
    <div className='LoginDiv'>
        <h1>Please log in </h1>
        <form className='form' onSubmit={fakeFetch}>
            <label>Username:</label>
            <input type="text" id="username" name="username" ></input>
            <br></br>
            <label >Password:</label>
            <input type="password" id="password" name="password" ></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>

        <Link to='/signup'>Create A New Account</Link>
    </div>
    {/* <div className='SignupDiv'><SignupContainer /></div> */}
    </>
  )
}

export default LoginContainer;