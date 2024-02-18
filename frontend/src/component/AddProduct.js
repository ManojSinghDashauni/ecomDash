import React, {useState } from 'react'


const AddProduct = () => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");

    const [error,setError] = useState(false);

    const AddProduct = async () =>{
        console.warn(!name);
        if(!name || !price || !category || !company ){
            setError(true);
            return false;
        }

        console.warn(name,company,category,price);
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product',{
          method: 'post',
          body: JSON.stringify({name,company,category,price,userId}),
          headers: {
            'Content-Type' : 'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` 
          },
        });
        result = await result.json()
        console.warn(result);
    }
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"sspace-evenly" ,height:"80vh"}}>
        <h1>Add Product</h1>
        <input type='text' placeholder='Enter product name' value={name} onChange={(e)=> setName(e.target.value)}></input>
        {error && !name && <span style={{color:"red",marginTop:"-40px",height:"1px"}}>invalid</span>}

        <input type='text' placeholder='Enter product price' value={price} onChange={(e)=> setPrice(e.target.value)}></input>

        <input type='text' placeholder='Enter product category' value={category} onChange={(e)=> setCategory(e.target.value)}></input>

        <input type='text' placeholder='Enter product company' value={company} onChange={(e)=> setCompany(e.target.value)}></input>

        <button onClick={AddProduct} type='button'>Add Product</button>
    </div>
  )
}



export default AddProduct



