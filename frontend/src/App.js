import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav'
import SignUp from './component/SignUp'
import PrivateComponent from './component/PrivateComponent'
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/> 
        <Routes>
          <Route element={<PrivateComponent/>} >
          <Route path="/" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct/>} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
          <Route path="/logout" element={<h1>logout</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
          </Route>
         
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
