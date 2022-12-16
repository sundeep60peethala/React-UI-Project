import axios from "axios";

export const FETCH_ALL_PRODUCTS_REQUEST = "FETCH_ALL_PRODUCTS_REQUEST";
export const FETCH_ALL_PRODUCTS_SUCCESS= "FETCH_ALL_PRODUCTS_SUCCESS";
export const FETCH_ALL_PRODUCTS_ERROR = "FETCH_ALL_PRODUCTS_ERROR";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS= "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";

export const CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCT_SUCCESS= "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR";

export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS= "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_ERROR = "UPDATE_PRODUCT_ERROR";

export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS= "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR";
export const UPDATE_PRODUCT_FORM = 'UPDATE_PRODUCT_FORM';

//Get All Products
export const fetchallProducts = () =>{
    return async(dispatch) =>{
         try {
             dispatch({type : FETCH_ALL_PRODUCTS_REQUEST});
             let dataUrl = 'http://127.0.0.1:5000/api/products';
             let response = await axios.get(dataUrl);
             dispatch({type : FETCH_ALL_PRODUCTS_SUCCESS , payload : response.data});
         } catch (error) {
            dispatch({type : FETCH_PRODUCT_ERROR , payload : error.message})
         }
    }
}

//Create a New Product
export const createProduct = (product, navigate) =>{

     return async(dispatch) =>{
            try {
                dispatch({type : CREATE_PRODUCT_REQUEST});
                let dataUrl = 'http://127.0.0.1:5000/api/products/';
                let res = await axios.post(dataUrl, product);
                dispatch({type : CREATE_PRODUCT_SUCCESS , payload : res.data});
                navigate('/getadmin/admin');
                
            } catch (error) {
                dispatch({type: CREATE_PRODUCT_ERROR , payload : error.message})
            }
     }

}

// get a product
export const fetchProduct = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type : FETCH_PRODUCT_REQUEST})
            let dataURL = `http://127.0.0.1:5000/api/products/${id}`;
            let response = await axios.get(dataURL);
            dispatch({type : FETCH_PRODUCT_SUCCESS , payload : response.data});
        }
        catch (error) {
            dispatch({type : FETCH_PRODUCT_ERROR , payload : error.message});
        }
    };
};

//Update the Form
export const updateProductForm = (name , value) => {
    return {
            type: UPDATE_PRODUCT_FORM,
            payload : { name , value }
    };
};

//Update the Form with new Details
export const updateProduct = (product , productId , navigate) => {
    return async (dispatch) => {
        try {
            dispatch({type : UPDATE_PRODUCT_REQUEST})
            let dataURL= `http://127.0.0.1:5000/api/products/${productId}`;
            let response = await axios.put(dataURL,product);
            dispatch({type : UPDATE_PRODUCT_SUCCESS , payload : response.data});
            // redirect to Admin Page
            navigate('/getadmin/admin')
        }
        catch (error) {
            dispatch({type : UPDATE_PRODUCT_ERROR , payload : error.message});
        }
    };
};

//Delete a Product
export const deleteallprodcuts = (productId) =>{
   return async (dispatch) => {
        try {
            
            let dataURL= `http://127.0.0.1:5000/api/products/${productId}`;
            let response = await axios.delete(dataURL);
            dispatch({type:DELETE_PRODUCT_SUCCESS , payload : response.data});
            // get the latest products info
            dispatch(fetchallProducts());
        }catch(error){
            console.log(error);
        }
    }

}

