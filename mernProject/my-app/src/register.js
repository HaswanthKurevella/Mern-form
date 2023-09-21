import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const RegisterForms=()=> {
    const nav = useNavigate();

    const [name ,setname] = useState('');
    const [password ,setpassword] = useState('');
    const [mail,setmail] = useState('');
    // const print=()=>{
      
    //     alert(' your name is '+(name)+' your password is '+(password))
    // }
    const handleclick =async()=>{
   
      const  response = await axios.post("http://localhost:8000/register/"+name+"/"+password+'/'+mail);
      
        console.log(response.data)

  
}
    // const loginRedirect=async(req,res)=>{
        
    //     navigate('/login')
    // }
    return(
    <>
      
      <h1>Registeration Page</h1>
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
        <input type="text"
         name="mail"
         placeholder="Email ID" 
         onChange={(e)=>setmail(e.target.value)}
        /><br />
            <button onClick={handleclick}>register</button>
            <h3>already a user?</h3>
            <button onClick={()=>nav('/login')}>Login</button>
        
    </>
        )
}

export default RegisterForms