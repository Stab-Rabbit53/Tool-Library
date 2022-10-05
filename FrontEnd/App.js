import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginContainer from './newComponents/Login'
import Homepage from './newComponents/Homepage'
import SignupContainer from './newComponents/signup';

function App() {
  const [username, setUsername] = useState('');
  
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LoginContainer setUsername={setUsername}/>} />
        <Route path='/homepage' element={<Homepage username={username}/>} />
        <Route path='/signup' element={<SignupContainer setUsername={setUsername}/>}/>
      </Routes>
    </div>
  )
}

export default App;