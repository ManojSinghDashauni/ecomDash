import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
          navigate('/')
      })

    const handleLogin = async () =>{
        console.warn(email,password);
        let result = await fetch('http://localhost:5000/login',{
          method: 'post',
          body: JSON.stringify({email,password}),
          headers: {
            'Content-Type' : 'application/json'
          },
        });
        result = await result.json()
        console.warn(result);
        if(result.auth){//result.name
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate('/')
        }else{
            alert("please enter connect details");
        }
    }
  return (
    <div>
        <input type='text' placeholder=' Enter email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>

        <input type='password' placeholder=' Enter password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>

        <button onClick={handleLogin} type='button'>Login</button>
    </div>
  )
}

export default Login
