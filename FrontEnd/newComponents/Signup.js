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
      <div className='LoginDiv'>
        <h1>Please sign up </h1>
        <form className='form' onSubmit={handleClick}>
          <label>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
          ></input>
          <br></br>
          <label>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
          ></input>
          <br></br>
          <input type='submit' value='Submit'></input>
        </form>

        {/* <Link to='/signup'>Go back to Login</Link> */}
      </div>
    </>
  );
}

export default SignupContainer;
