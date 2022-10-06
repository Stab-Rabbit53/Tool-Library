import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginContainer from './newComponents/Login';
import Homepage from './newComponents/Homepage';
import SignupContainer from './newComponents/Signup';
import Navbar from './newComponents/Navbar';
import AddNewTools from './newComponents/AddNewTool';
import Browse from './newComponents/Browse';

function App() {
  const [username, setUsername] = useState('');
  //id?
  const [id, setId] = useState('');

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<LoginContainer setUsername={setUsername} />}
        />
        <Route path='/homepage' element={<Homepage username={username} />} />
        <Route
          path='/signup'
          element={<SignupContainer setUsername={setUsername} />}
        />
        <Route path='/create' element={<AddNewTools username={username} />} />
        <Route path='/browse' element={<Browse username={username} />} />
        {/* <Route
          path='/userprofile'
          element={<UserItems username={username} />}
        />  */}
      </Routes>
    </div>
  );
}

export default App;
