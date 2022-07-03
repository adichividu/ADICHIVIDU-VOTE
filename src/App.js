import './App.css';
import Vote from './comp/Vote';
import React from 'react';
import Results from './comp/Results';
// import { auth } from './server/firebase';
// import Login from './comp/Login';
// import {useAuthState} from 'react-firebase-hooks/auth'
function App() {
return(
<div className='app'><Vote/><Results/></div>



) 
  

}

export default App;
