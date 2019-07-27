import { PRODUCT_CLICK } from './../constants';


const initialState = {
  clickedValues: []
};


function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_CLICK:
      return {...state, clickedValues : action.payload};
    default:
      return state;
  }
}

export default productReducer;
