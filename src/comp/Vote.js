import React, { useState } from 'react'
import { db } from '../server/firebase'
import'./vote.css'
import firebase from 'firebase'
import aniruth from '../comp/aniruth.png';



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
      <div className='vote mt-5' >
        {/*<center><h1 className='head' >Vote For Your True Leader</h1></center>*/}

        <div class="row row-cols-1 row-cols-md-3 g-4">
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
      <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201905/ravi_kishan1_660_052319061852.jpg?size=948:533" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <button className='btn' onClick={()=>check("Vijay")}>Vijay</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201905/ravi_kishan1_660_052319061852.jpg?size=948:533" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <button className='btn' onClick={()=>check("Thamana")}>Thamana</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201905/ravi_kishan1_660_052319061852.jpg?size=948:533" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <button className='btn' onClick={()=>check("Ajith")}>Ajith</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201905/ravi_kishan1_660_052319061852.jpg?size=948:533" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        
        <button className='btn' onClick={()=>check("PoojaHedge")}>PoojaHedge</button>
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