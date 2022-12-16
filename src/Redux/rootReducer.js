import {combineReducers} from 'redux';
import * as fetchreducer from './bigbasket/bigbasket.reducer';



export const rootReducer = combineReducers({
    fetchAllData : fetchreducer.reducer
      
})