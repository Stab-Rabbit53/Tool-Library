import React, { useState } from 'react';
// import SignupContainer from './Signup'
import { Link, useNavigate } from 'react-router-dom';

function LoginContainer({ setUsername }) {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const body = { username: e.target[0].value, password: e.target[1].value };
    console.log(body);
    try {
      const res = await fetch('/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      const receivedBack = await res.json();

      //receivedBack will be an object with two properties: username, password
      //username will be true if username exists, password will be true if password matches

      //both username and password are true, means route them to mainPage, preserving the username in state
      if (receivedBack.login === true) {
        setUsername(body.username);
        navigate('/homepage');

        //if either false, then let them know login information is invalid/incorrect
      } else {
        alert('Wrong Information');
      }
    } catch (error) {
      console.log('123error');
    }
  };

  return (
    <>
      <div className='LoginDiv'>
        <h1>Please log in </h1>
        <form className='form' onSubmit={handleClick}>
          <label>Username:</label>
          <input type='text' id='username' name='username'></input>
          <br></br>
          <label>Password:</label>
          <input type='password' id='password' name='password'></input>
          <br></br>
          <input type='submit' value='Submit'></input>
        </form>

        <Link to='/signup'>Create A New Account</Link>
      </div>
      {/* <div className='SignupDiv'><SignupContainer /></div> */}
    </>
  );
}

export default LoginContainer;
