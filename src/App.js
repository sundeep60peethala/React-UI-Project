import './App.css';
import React,{useState,createContext} from 'react';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from '../src/bigbasketcomponents/layout/Home';
import NavBar from '../src/bigbasketcomponents/layout/NavBar';
import Productlist from '../src/bigbasketcomponents/products/Productlist';
import ProductAdmin from '../src/bigbasketcomponents/products/ProductAdmin';
import CreateProduct from '../src/bigbasketcomponents/products/CreateProduct';
import UpdateProduct from '../src/bigbasketcomponents/products/UpdateProduct';
import Register from '../src/bigbasketcomponents/layout/Register';
import Login from '../src/bigbasketcomponents/layout/Login';

export const store = createContext();

function App() {

  const [token,setToken] = useState(null);

  return (
    <React.Fragment>
      <store.Provider value={[token,setToken]} >
        <Router>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path ="/prodcutlist/productlist" element ={<Productlist/>} />
                    <Route exact path ="/getadmin/admin" element ={<ProductAdmin />} />
                    <Route exact path="/getproducts/create"  element ={<CreateProduct />} />
                    <Route exact path="/products/:id" element={<UpdateProduct />}/>
                    <Route exact path="/register" element={<Register />}/>
                    <Route exact path="/login" element={<Login />}/>
                    
                </Routes>
            </Router>
            </store.Provider>
    </React.Fragment>
  );
}

export default App;
