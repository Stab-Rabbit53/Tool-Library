import React, { setState } from 'react';
// import SignupContainer from './Signup'
import { Navigate, useNavigate } from 'react-router-dom'

function LoginContainer({setUsername}) {

  const handleClick = async(e) => {
    e.preventDefault();
[[username, lisa], [password, 123]]
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
    if(receivedBack.exist === true) {
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
        <form className='form' onSubmit={handleClick()}>
            <label>Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => username = e.target.value}></input>
            <br></br>
            <label >Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => password = e.target.value}></input>
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