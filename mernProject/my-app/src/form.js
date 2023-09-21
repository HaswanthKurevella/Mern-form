import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Forms=()=> {
  const nav=useNavigate();
    const [name ,setname]=useState('');
    const [password ,setpassword]=useState('');
    // const print=()=>{
      
    //     alert(' your name is '+(name)+' your password is '+(password))
    // }
    const handleclick =async()=>{
   
      const  response = await axios.get("http://localhost:8000/login/"+name+"/"+password);
      
        console.log(response.data)
        if(response.data){
          nav('/loggedin')
        }
        else{
          alert("UserNotFound")
          nav('/register')
        }

  
}
    return(
    <>
      
      <h1>Login page</h1>
        <input type="text"
         name="username"
         placeholder="name" 
         onChange={(e)=>setname(e.target.value)}
        /><br />
        <input type="password"
        name="password"
        placeholder="password"
        onChange={(e)=>setpassword(e.target.value)}
        /><br />
        <button onClick={handleclick} >Login</button>
        <h3>Not a user?</h3>
        <button onClick={()=>nav('/register')}>Register now</button>
         
        
    </>
        )
}

export default Forms