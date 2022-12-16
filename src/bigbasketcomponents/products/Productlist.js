import React from 'react';
import * as allActions from '../../Redux/bigbasket/bigbasket.actions';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
  


const Productlist = () => {

let dispatch = useDispatch();

let getalldatafromserver = useSelector((state)=>{
             return state.fetchAllData;
})


   useEffect(() => {
      //console.log(getalldatafromserver.products);
        dispatch(allActions.fetchallProducts());
   },[])

// let {products} =getalldatafromserver

    return (

                <React.Fragment>
                    <section className="mt-3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h3 text-success">Product List</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex impedit, incidunt ipsum nulla sapiente sint suscipit? A animi, error et fuga ipsum minus, nam officia praesentium quisquam, recusandae soluta voluptate?</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row">
                                {
                                   getalldatafromserver.products.length > 0 &&
                                    getalldatafromserver.products.map(product => {
                                        return (
                                            <div className="col-md-3" key={product._id}>
                                                <div className="card">
                                                    <div className="card-header text-center bg-white">
                                                        <img src={product.image} alt="" width="150" height="150"/>
                                                    </div>
                                                    <div className="card-body rgba-light-green-light">
                                                        <ul className="list-group">
                                                            <li className="list-group-item">
                                                                NAME : {product.name}
                                                            </li>
                                                            <li className="list-group-item">
                                                                PRICE : {product.price}
                                                            </li>
                                                            <li className="list-group-item">
                                                                QTY : {product.qty} Kgs
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="row">
                                <div className="col">
                                    {
                                        // for empty data
                                        getalldatafromserver.products.length === 0 &&
                                        <p  className="font-weight-bold text-success text-center">NO Records Found in Database</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
       

    )
}

export default Productlist;