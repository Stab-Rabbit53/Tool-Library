import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import SignupContainer from './newComponents/Signup'

function SignupContainer({setUsername}) {
  const navigate = useNavigate();

  const handleClick = async(e) => {
    e.preventDefault();

    const body = {username: e.target.username.value, password: e.target.password.value}
    if (!body.username || !body.password) {
      return alert('Need both username and password input')
    }
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
        navigate('/homepage')
      } else {
        alert('Wrong Information')
      }
      
    } catch(error) {
      console.log('error')
    }
  }
  
  const fakeFetch = () => {
    setUsername('put the username from the input field')
    navigate('/homepage')
  }

  return (
    <>
    <div className='LoginDiv'>
        <h1>Please sign up </h1>
        <form className='form' onSubmit={fakeFetch}>
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