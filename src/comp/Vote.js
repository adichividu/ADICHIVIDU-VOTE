import React, { useState } from 'react'
import { db } from '../server/firebase'
import'./vote.css'
import firebase from 'firebase'
import aniruth from './aniruth.png';
import male from '../comp/1000_F_168802075_Il6LeUG0NCK4JOELmkC7Ki81g0CiLpxU.jpg'
import female from "./download.jpg"



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
      <div className='vote mt-5' >
        {/*<center><h1 className='head' >Vote For Your True Leader</h1></center>*/}

        <div class="row row-cols-1 row-cols-md-3 g-4">
  
  <div class="col">
    <div class="card h-100">
      <img src={female} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Subhkshini</h5>
        
        <button className='btn' onClick={()=>check("Subhkshini")}>Vote!</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" border-black>
      <img src={aniruth} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title fw-bolder">Aniruth Varma</h5>
        
        <button className='btn btn-l' onClick={()=>check("Aniruth")}><b>Vote!</b></button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={male} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Roshan</h5>
        <button className='btn' onClick={()=>check("Roshan")}>vote!</button>
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