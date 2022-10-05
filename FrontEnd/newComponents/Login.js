import React, { setState } from 'react';
import SignupContainer from './Signup'
import { Navigate, useNavigate } from 'react-router-dom'

function LoginContainer({setUsername}) {

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
    const receivedBack = await res.json()
    if(receivedBack === true) {
      setUsername(body.username)
      Navigate('/homepage')
    } else {
      alert('Wrong Information')
    }
  } catch (error) {
    console.log('error')
  }
  }
  return (
    <>
    <div className='LoginDiv'>
        <h1>Please log in </h1>
        <form onSubmit={handleClick()}>
            <label>Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => username = e.target.value}></input>
            <br></br>
            <label >Password:</label>
            <input type="text" id="password" name="password" onChange={(e) => password = e.target.value}></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>

        <button onClick={goToCreateUser}>Create A New Account</button>
    </div>
    <div className='SignupDiv'><SignupContainer /></div>
    </>
  )
}

export default LoginContainer;