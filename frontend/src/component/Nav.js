import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
        <ul className='navbar'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">profile</Link></li>
            {
              auth ? <li><Link onClick={logout} to="/signup">Logout</Link></li> : <>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/login">login</Link></li>
            </>
            }
        </ul>
    </div>
  )
}

export default Nav