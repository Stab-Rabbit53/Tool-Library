import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App.js'


//create a root
const root = createRoot(document.getElementById('root'));

//initial render
root.render(
  <App />
)