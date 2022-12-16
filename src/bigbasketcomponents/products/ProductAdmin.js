import React from 'react';
import {Link} from "react-router-dom";
import * as allActions from '../../Redux/bigbasket/bigbasket.actions';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';


 const ProductAdmin = () => {
    let dispatch = useDispatch();
    let getalldatafromserver = useSelector((state)=>{
        return state.fetchAllData;
})
  
     useEffect(() => {
        // console.log(getalldatafromserver.products);
          dispatch(allActions.fetchallProducts())
     },[])

     
     let deleteProduct = (productId) => {
        dispatch(allActions.deleteallprodcuts(productId));
     };

    return (
        <React.Fragment>
     
                    <section className="mt-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h3 text-success">Product Admin</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex impedit, incidunt ipsum nulla sapiente sint suscipit? A animi, error et fuga ipsum minus, nam officia praesentium quisquam, recusandae soluta voluptate?</p>
                                    <Link to="/getproducts/create" className="btn btn-success btn-sm">Create Product</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mt-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <table className="table table-hover text-center table-striped">
                                        <thead className="bg-dark text-success">
                                        <tr>
                                            <th>SNO</th>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            getalldatafromserver.products.length > 0 &&
                                            getalldatafromserver.products.map(product => {
                                                return (
                                                    <tr key={product._id}>
                                                        <td>{product._id.substr(product._id.length - 4)}</td>
                                                        <td>
                                                            <img src={product.image} alt="" width="50" height="50"/>
                                                        </td>
                                                        <td>{product.name}</td>
                                                        <td>&#8377; {product.price}</td>
                                                        <td>{product.qty} Kgs</td>
                                                        <td>
                                                            <Link to={`/products/${product._id}`} className="btn btn-secondary btn-sm">Update</Link>
                                                            <button onClick={()=> {deleteProduct(product._id)}} className="btn btn-danger btn-sm">Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        {
                                            // for empty data
                                            getalldatafromserver.products.length === 0 &&
                                            <tr>
                                                <td className="text-success" colSpan={6}>NO Records Found in Database</td>
                                            </tr>
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
        
  
    )
}

export default ProductAdmin;