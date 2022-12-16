import React,{useState,useContext,useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import { store } from './../../App';
import { Navigate } from 'react-router-dom';
import axios from "axios";

const NavBar = () => {

    // const [token,setToken] = useContext(store);
    // const [data,setData] = useState(null);
    // useEffect (()=>{
    //     axios.get('http://127.0.0.1:5000/api/products',{
    //         headers :{
    //             'x-token' : token
    //         }
    //     }).then(res => setData(res.data))
    // },[])

    // if(!token){
    //     return <Navigate to= "/login" />
    //  }

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-success navbar-expand-sm">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">
                        <i className="fa fa-shopping-cart"/> BigBasket</NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/prodcutlist/productlist" className="nav-link">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/getadmin/admin" className="nav-link">Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default NavBar;