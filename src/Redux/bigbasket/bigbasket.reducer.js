 import * as getallproductsactions from './bigbasket.actions';

 export const bigBasketFeatureKey = 'bigBasket';


 let initialState = {
     loading : false,
     errorMessage : '',
     products : [],
     selectedProduct : {}
 }

 export const reducer = (state = initialState, action) =>{
           let {type, payload} = action;
            switch(type){
                //Get all the Products
                case getallproductsactions.FETCH_ALL_PRODUCTS_REQUEST :
                    return {
                        ...state,
                        loading : true
                    }
                    case getallproductsactions.FETCH_ALL_PRODUCTS_SUCCESS :
                    return {
                        ...state,
                        loading : false,
                        products : payload
                    }
                    case getallproductsactions.FETCH_ALL_PRODUCTS_ERROR :
                    return {
                        ...state,
                        loading : false,
                        errorMessage : payload
                    };
                    //Create a Product
                    case getallproductsactions.CREATE_PRODUCT_REQUEST :
                        return {
                            ...state,
                            loading : true
                        };
                        case getallproductsactions.CREATE_PRODUCT_SUCCESS :
                            return {
                                ...state,
                                loading : false
                            };
                            case getallproductsactions.CREATE_PRODUCT_ERROR :
                                return {
                                    ...state,
                                    loading : false
                                };
                                //Get a Single Product
                                case getallproductsactions.FETCH_PRODUCT_REQUEST : 
                                   return {
                                       ...state,
                                       loading : true
                                   };
                                   case getallproductsactions.FETCH_PRODUCT_SUCCESS : 
                                   return {
                                       ...state,
                                       loading : false,
                                  selectedProduct : payload    
                                   };
                                   case getallproductsactions.FETCH_PRODUCT_ERROR : 
                                   return {
                                       ...state,
                                       loading : false,
                                       errorMessage : payload
                                   };
                                   case getallproductsactions.UPDATE_PRODUCT_FORM : 
                                      return {
                                          ...state,
                                          selectedProduct :{
                                              ...state.selectedProduct, [payload.name] : payload.value
                                          }
                                      };
                                      case getallproductsactions.UPDATE_PRODUCT_REQUEST :
                                         return {
                                             ...state,
                                               loading : true
                                                   };
                                      case getallproductsactions.UPDATE_PRODUCT_SUCCESS :
                                                    return {
                                                        ...state,
                                                          loading : false
                                                              };
                                      case getallproductsactions.UPDATE_PRODUCT_ERROR :
                                                                return {
                                                                    ...state,
                                                                      loading : true
                                                                          };
                                                                          case getallproductsactions.DELETE_PRODUCT_SUCCESS :
                                                                            return {
                                                                                ...state,
                                                                                loading : false,
                                                                            };
                    default : return state;
            }
 }