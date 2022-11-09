import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import SignupContainer from './newComponents/Signup'

function SignupContainer({ setUsername }) {
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    if (!body.username || !body.password) {
      return alert('Need both username and password input');
    }
    try {
      const res = await fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      const receivedBack = await res.json();
      if (receivedBack.added === true) {
        setUsername(body.username);
        navigate('/homepage');
      } else {
        alert('Unable to add');
      }
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <>
      <div className='loginDiv' id="signinDiv">
        <h1>Please Sign Up </h1>
        <form className='loginDivForm' onSubmit={handleClick}>
          <input
            className="inputFields"
            type='text'
            id='username'
            name='username'
            placeholder="Username"
          ></input>
          <br></br>
          <input
            className="inputFields"
            type='password'
            id='password'
            name='password'
            placeholder="Password"
          ></input>
          <br></br>
          <input className="loginDivBtn" type='submit' value='Sign Up'></input>
        </form>

        <Link to='/' id='newAccBtn'>Go back to Login</Link>
      </div>
    </>
  );
}

export default SignupContainer;
