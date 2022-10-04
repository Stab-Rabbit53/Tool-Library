import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App.jsx'


//create a root
const root = createRoot(document.getElementById('root'));

//initial render
root.render(
  <App/>
)