import { CART, CART_CHECKOUT, CART_VALUE_CHANGE } from './../constants';


const initialState = {
  items: [],
  isCartShowing : true,
  valueChange : {}
};


function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART:
      return {...state, items : action.payload};
    case CART_CHECKOUT:
        return {...state, isCartShowing : !state.isCartShowing};
    case CART_VALUE_CHANGE:
        return { valueChange : {[action.payload.target.name] : action.payload.target.value}}
    default:
      return state;
  }
}

export default cartReducer;
