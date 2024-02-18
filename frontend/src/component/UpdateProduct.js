import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");

    const navigate = useNavigate();

    const params=useParams();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async() => {
        console.log(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
          headers:{
              authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` 
          }
      });
        result = await result.json();
        console.warn(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const UpdateProduct = async () =>{
        console.warn(name,company,category,price);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
          method: 'put',
          body: JSON.stringify({name,company,category,price,}),
          headers: {
            'Content-Type' : 'application/json' ,
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
          },
        });
        result = await result.json()
        console.warn(result);
        navigate('/');
    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"space-evenly" ,height:"80vh"}}>
        <h1>update Product</h1>
        <input type='text' placeholder='Enter product name' value={name} onChange={(e)=> setName(e.target.value)}></input>

        <input type='text' placeholder='Enter product price' value={price} onChange={(e)=> setPrice(e.target.value)}></input>

        <input type='text' placeholder='Enter product category' value={category} onChange={(e)=> setCategory(e.target.value)}></input>

        <input type='text' placeholder='Enter product company' value={company} onChange={(e)=> setCompany(e.target.value)}></input>

        <button onClick={UpdateProduct} type='button'>update Product</button>
    </div>
  )
}

export default UpdateProduct




