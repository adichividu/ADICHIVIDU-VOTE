import React from 'react'
import {auth,provider} from "../server/firebase"
function Login() {
  return (
    <div className="App">
    <h1>Vote For Your Leader</h1>
    <text>one person one vote one value</text>
   <button onClick={()=>{
     auth.signInWithPopup(provider)
   }}>sign in</button>
       </div>
  )
}

export default Login