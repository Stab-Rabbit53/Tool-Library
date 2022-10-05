import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import SignupContainer from './newComponents/Signup'

function SignupContainer({setUsername}) {

  const handleClick = async(e) => {
    e.preventDefault();

    const body = {username: e.target.username.value, password: e.target.password.value}
    
    try {
      const res = await fetch('/api/user/signup?', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain'
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
      
    } catch(error) {
      console.log('error')
    }
  }
  


  return (
    <>
    <div className='LoginDiv'>
        <h1>Please sign up </h1>
        <form className='form' onSubmit={handleClick()}>
            <label>Username:</label>
            <input type="text" id="username" name="username" onChange={(e) => username = e.target.value}></input>
            <br></br>
            <label >Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => password = e.target.value}></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>

        {/* <Link to='/signup'>Go back to Login</Link> */}
    </div>
    </>
  )
}

export default SignupContainer;