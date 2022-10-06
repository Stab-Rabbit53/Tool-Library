import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  // const navigate = useNavigate();

  return (
    <div id='navbar'>
      <div id='navigation'>
        <span>
          <Link to='/login'>LogIn</Link>
        </span>
        <span>
          <Link to='/homepage'>Homepage</Link>
        </span>
        <span>
          <Link to='/create'>Create</Link>
        </span>
        <span>
          <Link to='/browse'>Browse</Link>
        </span>
        <span>
          <Link to='/userprofile'>User Profile</Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
