import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import * as Actionalldata from '../../Redux/bigbasket/bigbasket.actions'
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const [createData, setcreateData] = useState({
         name : '',
         image : '',
         price : '',
         qty : '',
         info : ''
    })

 const submitData =(event)=>{
     event.preventDefault();
       console.log(createData);
       dispatch(Actionalldata.createProduct(createData,navigate))
 }
 
  const updateInput = (e) =>{
       //console.log({[e.target.name] : e.target.value});
       setcreateData({...createData,[e.target.name] : e.target.value})
  }

 let updateImage = async (event) => {
    let imageFile = event.target.files[0];
    let base64Image = await convertBase64String(imageFile);
    setcreateData({
        ...createData,
         image : base64Image
    });
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

    return (
        <React.Fragment>
        <section className="mt-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Create Product</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex impedit, incidunt ipsum nulla sapiente sint suscipit? A animi, error et fuga ipsum minus, nam officia praesentium quisquam, recusandae soluta voluptate?</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h4">Create Product</p>
                            </div>
                            <div className="card-body rgba-green-light">
                                <form onSubmit={submitData}>
                                    <div className="form-group">
                                        <input
                                            required
                                            name ="name"
                                            value={createData.name}
                                            onChange ={updateInput}
                                            type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input
                                            required
                                            name="image"
                                            onChange={updateImage}
                                            className="form-control" type="file" id="formFile"/>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input
                                            required
                                            name ="price"
                                            value={createData.price}
                                            onChange ={updateInput}
                                            type="number" className="form-control" placeholder="Price"/>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input
                                            required
                                            name ="qty"
                                            value={createData.qty}
                                            onChange ={updateInput}
                                            type="number" className="form-control" placeholder="Qty"/>
                                    </div>
                                    <div className="form-group mt-2">
                            <textarea
                                required
                                name ="info"
                                value={createData.info}
                                onChange ={updateInput}
                                rows={3} className="form-control" placeholder="Information"/>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="submit" className="btn btn-success btn-sm" value="Create"/>
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

export default CreateProduct