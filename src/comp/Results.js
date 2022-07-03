import React, { useEffect, useState } from 'react'
import { db } from '../server/firebase'
import './Results.css'
function Results() {
    const[Docs,setDocs]=useState([])
    useEffect(() => {                  
        const getVotesFromFirebase = [];
        const subscriber =
        db.onSnapshot((querySnapshot) => {
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
    <div className='head' ><center><h1>Results</h1> 

    {Docs.map((votee)=>
        <div><h2 className='vote' >{votee.name}   :   {votee.votes}</h2> </div>
    )}
      </center></div>

    )
}

export default Results