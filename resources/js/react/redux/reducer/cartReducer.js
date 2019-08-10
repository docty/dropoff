import { CART, CART_CHECKOUT, CART_VALUE_CHANGE, DELIVERY_MODE } from './../constants';


const initialState = {
  items: [],
  isCartShowing : true,
  valueChange : [],
  delivery : ''
};


function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART:
      return {...state, items : action.payload};
    case CART_CHECKOUT:
        return {...state, isCartShowing : !state.isCartShowing};
    case CART_VALUE_CHANGE:
        return {...state,  valueChange : [{[action.payload.target.name]: [action.payload.target.value]}]}
        case DELIVERY_MODE:
            return {...state,  delivery :   action.payload.target.value}
    default:
      return state;
  }
}

export default cartReducer;
