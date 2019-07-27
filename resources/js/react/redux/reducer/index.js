import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';





const rootReducer = combineReducers({

    category: categoryReducer,
    product : productReducer,
    cart :    cartReducer
});

export default rootReducer;
