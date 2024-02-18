import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'


const SignUp = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth)
        navigate('/')
    })

    const collectData = async () =>{
        console.warn(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
          method: 'post',
          body: JSON.stringify({name,email,password}),
          headers: {
            'Content-Type' : 'application/json'
          },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
          navigate('/')
    }
  return (
    <div>
        <h1>Register</h1>
        <input type='text' placeholder=' Enter name' value={name} onChange={(e)=> setName(e.target.value)}></input>

        <input type='text' placeholder=' Enter email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>

        <input type='password' placeholder=' Enter password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>

        <button onClick={collectData} type='button'>Sign Up</button>
        
    </div>
  )
}

export default SignUp