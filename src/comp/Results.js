import React, { useEffect, useState } from 'react'
import { db } from '../server/firebase'
import './Results.css'
function Results() {
    const[Docs,setDocs]=useState([])
    useEffect(() => {                  
        const getVotesFromFirebase = [];
        const subscriber =
        db.orderBy("votes","desc").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              getVotesFromFirebase.push({
                ...doc.data(), //spread operator
                key: doc.id, // `id` given to us by Firebase
              });
              
            });
            setDocs(getVotesFromFirebase);
            
          });
    
        // return cleanup function
        return () => subscriber();
      }, []);
  return (
    <div className='head' ><center><h1 className="heading fw-900 text-decoration-underline mb-3">RESULTS</h1>

    {Docs.map((votee)=>
   
        <div className='vote' id="results">
          <table class="table table-dark table-striped">
 
  <tbody>
    <tr>
      
      <td><b className="ml-2">{votee.name}</b></td>
      <td className="position-absolute end-10">{votee.votes}</td>
    </tr>
  </tbody>
</table>
        
          </div>
    )}
      </center></div>

    )
}

export default Results