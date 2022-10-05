import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginContainer from './newComponents/Login'
import Homepage from './newComponents/Homepage'

function App() {
  const [username, setUsername] = useState('');
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <LoginContainer setUsername={setUsername}/>} />
        <Route path='/homepage' element={<Homepage username={username}/>} />
        <Route path='/signup' element={<SignupContainer />}/>
      </Routes>
    </>
  )
}

export default App;