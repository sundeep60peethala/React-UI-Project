import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as allActions from '../../Redux/bigbasket/bigbasket.actions';


 const UpdateProduct = () => {

    let dispatch = useDispatch();
    const navigate = useNavigate();

    let id = useParams().id;

    const [productInfo, setproductInfo] = useState({
        name : '',
        image : '',
        price : '',
        qty : '',
        info : ''
   })

    // get product information from Redux Store
    let getalldatafromserver = useSelector((state) =>{
        return state.fetchAllData;
    });
    //console.log(getalldatafromserver.selectedProduct);

    useEffect(() => {
        // get a single product from server and keep in the Redux Store
         dispatch(allActions.fetchProduct(id));
    }, [id]);

    let updateInput = (event) => {
        dispatch(allActions.updateProductForm(event.target.name , event.target.value));
      };

      let updateImage = async (event) => {
        let imageFile = event.target.files[0];
        let base64Image = await convertBase64String(imageFile);
        dispatch(allActions.updateProductForm('image' , base64Image.toString()));
    };

    let convertBase64String = (imageFile) => {
        return new Promise((resolve, reject) => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.addEventListener('load', () => {
                if(fileReader.result){
                    resolve(fileReader.result);
                }
                else {
                    reject('Error Occurred');
                }
            })
        });
    };

    let submitUpdateProduct = (event) => {
        event.preventDefault();
        dispatch(allActions.updateProduct(getalldatafromserver.selectedProduct,id,navigate));
    };


    return (
        <React.Fragment>
        {/* <pre>{JSON.stringify(selectedProduct)}</pre> */}
        <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-secondary">Update Product</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex impedit, incidunt ipsum nulla sapiente sint suscipit? A animi, error et fuga ipsum minus, nam officia praesentium quisquam, recusandae soluta voluptate?</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Update Product</p>
                                </div>
                                <div className="card-body rgba-green-light">
                                    <form onSubmit={submitUpdateProduct}>
                                        <div className="form-group">
                                            <input
                                                required
                                                name="name"
                                                onChange={updateInput}
                                                value={getalldatafromserver.selectedProduct.name}
                                                type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input
                                                name="image"
                                                onChange={updateImage}
                                                className="form-control" type="file" id="formFile"/>
                                            <img src={getalldatafromserver.selectedProduct.image} alt="" width="25" height="25"/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input
                                                required
                                                name="price"
                                                onChange={updateInput}
                                                value={getalldatafromserver.selectedProduct.price}
                                                type="number" className="form-control" placeholder="Price"/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input 
                                                required
                                                name="qty"
                                                onChange={updateInput}
                                                value={getalldatafromserver.selectedProduct.qty}
                                                type="number" className="form-control" placeholder="Qty"/>
                                        </div>
                                        <div className="form-group mt-2">
                                                    <textarea
                                                        required
                                                        name="info"
                                                        onChange={updateInput}
                                                        value={getalldatafromserver.selectedProduct.info}
                                                        rows={3} className="form-control" placeholder="Information"/>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input type="submit" className="btn btn-secondary btn-sm" value="Update"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     </React.Fragment>
    )
}

export default UpdateProduct