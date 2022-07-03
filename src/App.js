import './App.css';
import Vote from './comp/Vote';
import React from 'react';
import Results from './comp/Results';
// import { auth } from './server/firebase';
// import Login from './comp/Login';
// import {useAuthState} from 'react-firebase-hooks/auth'
function App() {
return(
<div className='app'>
<nav className="navbar bg-black">
  <div className="container-fluid d-flex justify-content-between">
  <a href="whatsapp://send?text=Share this with all your AVKian friends! lets grow this community together guys! https://adichividu.netlify.app -By Students For Students." class="badge fs-6 px-2 py-1" id="wa-share-btn" data-action="share/whatsapp/share"  
        target="_blank"><i class="fa fa-whatsapp mr-1 font-weight-bolder" aria-hidden="true"></i>Share</a>
  <h1 className="heading fw-900">ADICHIVIDU{/*<span className="sub-brand-name text-253C78 font-weight-bolder text-white">Chat</span>*/}</h1>
  <a href="#results" class="badge fs-6 px-2 py-1" id="wa-share-btn">Results</a>
  </div>
</nav>

<div class="container">
  <div class="row">
    <div class="col-sm-8"><Vote/></div>
    <div class="col-sm-4"><Results/></div>
  </div>
  </div></div>



) 
  

}

export default App;
