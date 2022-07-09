import React, { useState } from 'react'
import { db } from '../server/firebase'
import'./vote.css'
import firebase from 'firebase'
import aniruth from './aniruth.png';
import roshan from './roshan.png';
import female from "./female.png";
import subhashini from "./subhashini.png";



function Vote() {

   const check =(key)=>{
     var a = localStorage.getItem("vote")
     if(a==null){

      const increment = firebase.firestore.FieldValue.increment(1)
      db.doc(key).update({votes:increment})   
       
       localStorage.setItem("vote","1")
      
       
     }
     else{
       alert(`you are allowed to cast vote only one time`)
     }
   }
  return (
      <div className='vote mt-3' >
        {/*<center><h1 className='head' >Vote For Your True Leader</h1></center>*/}

        <div class="row row-cols-1 row-cols-md-3 g-4">
  
  <div class="col">
    <div class="card h-100">
      <img src={subhashini} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fw-bolder"><b>Subhashini</b></h5>
        
        <button className='btn fw-bolder' onClick={()=>check("Subhkshini")}>Vote!</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={roshan} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fw-bolder"><b>Roshan</b></h5>
        <button className='btn fw-bolder' onClick={()=>check("Roshan")}>Vote!</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" border-black>
      <img src={aniruth} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fw-bolder"><b>Aniruth Varma</b></h5>
        
        <button className='btn btn-l fw-bolder' onClick={()=>check("Aniruth")}>Vote!</button>
      </div>
    </div>
  </div>
  
  <div class="col">
    <div class="card h-100">
      <img src={female} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Madhumitha</h5>
        
        <button className='btn' onClick={()=>check("Madhumitha")}>vote!</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={female} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Chitra</h5>
        
        <button className='btn' onClick={()=>check("Chitra")}>vote!</button>
      </div>
    </div>
  </div>
</div>






      
      
      <h1></h1>
      {/* </center> */}
      </div>
    
  )
}

export default Vote