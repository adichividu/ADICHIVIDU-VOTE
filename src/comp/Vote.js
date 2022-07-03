import React, { useState } from 'react'
import { db } from '../server/firebase'
import'./vote.css'
import firebase from 'firebase'


function Vote() {

   const check =(key)=>{
     var a = localStorage.getItem("vote")
     if(a==null){

      const increment = firebase.firestore.FieldValue.increment(1)
      db.doc(key).update({votes:increment})   
       
       localStorage.setItem("vote","1")
      
       
     }
     else{
       alert(`you are allowed to cast vote only one time for ${key}`)
     }
   }
  return (
      <div className='vote' >
        <center><h1 className='head' >Vote For Your True Leader</h1></center>
      {/* <center> */}
      <button className='btn' onClick={()=>check("Samantha")}>Samantha</button>
      <button className='btn' onClick={()=>check("Vijay")}>Vijay</button>
      <button className='btn' onClick={()=>check("Thamana")}>Thamana</button>
      <button className='btn' onClick={()=>check("Ajith")}>Ajith</button>
      <button className='btn' onClick={()=>check("PoojaHedge")}>PoojaHedge</button>
      <h1></h1>
      {/* </center> */}
      </div>
    
  )
}

export default Vote