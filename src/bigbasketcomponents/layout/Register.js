import React,{useState} from 'react'
import axios from "axios";

const Register = () => {

     const [data, setData] = useState({
        username : '',
        email : '',
        password : '',
        confirmpassword : ''
     })

     const handleChange = (e) =>{
         setData({...data,[e.target.name] : e.target.value});
     }

     const submitForm =(e) =>{
          e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/register/',data).then(res => console.log(res.data));
       // console.log(data);
        
     }

    return (
        <div>
            <div className="container mt-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header bg-info text-white">
                      <h4>Register</h4>
                      <hr className="bg-white border-3 border-top border-white"></hr>
                      <form onSubmit={submitForm}>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">UserName</label>
                          <input type="text" className="form-control" placeholder='UserName' name="username" onChange={handleChange} />
                        </div>
                        <div className="form-group mt-2">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                          <input name="email" className="form-control" placeholder='Email' onChange={handleChange} />
                        </div>
                        <div className="form-group mt-2">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Password</label>
                          <input type="text" className="form-control" placeholder='Password' name="password" onChange={handleChange}/>
                        </div>
                        <div className="form-group mt-2">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">ConfirmPassowrd</label>
                          <input type="text" className="form-control" placeholder='ConfirmPassowrd' name="confirmpassword" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-dark fw-bold mt-4">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              </div>
        </div>
      );
}

export default Register;