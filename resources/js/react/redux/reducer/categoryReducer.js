import { CATEGORY } from './../constants';






const initialState = {

  info :  {data:[]}
};

const categoryReducer =  (state = initialState.info, action) => {
  switch (action.type) {
    case CATEGORY:
      return {...state,  ...action.payload};
    default:
      return state;
  }
}

export default categoryReducer;
