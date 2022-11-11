import React from 'react'
import { useState } from 'react';
export default function Start() {
   
    const [name,setName]=useState("");

    function changeName(e){
setName(e.target.value) ;
    }

    const [motivate,setMotivate]=useState(true);
    
   function onClk(){
   setMotivate(false);
    }


  return (
    <div>
<input type="text" placeholder='Enter your name'  onChange={changeName}></input>
    {
    motivate?
   <div>Hello {name}</div>
 :
 <div>Hey {name}, keep going</div>
 }
 <button onClick={onClk}>   Motivate</button>
    </div>
  )
}


