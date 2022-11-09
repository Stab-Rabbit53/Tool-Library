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
      <h1 id= 'title'>LENDR</h1>
      <div className='loginDiv'>
        <h1>Please Log In </h1>
        <form className='loginDivForm' onSubmit={handleClick}>
          <input className="inputFields" type='text' id='username' name='username' placeholder="Username"></input>
          <br></br>
          <input className="inputFields" type='password' id='password' name='password' placeholder='Password'></input>
          <br></br>
          <input className="loginDivBtn" type='submit' value='Login'></input>
        </form>

        <Link to='/signup' id='newAccBtn'>Create A New Account</Link>
      </div>
    </>
  );
}

export default LoginContainer;
