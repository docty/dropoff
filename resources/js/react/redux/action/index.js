import * as types from './../constants';

export function setCategoryValue (value) {
    return {
        type: types.CATEGORY,
        payload: value
    }
}


export function setProductValue (value) {
    return {
        type: types.PRODUCT_CLICK ,
        payload: value
    }
}

export function setCartValue(value) {
    return {
        type: types.CART ,
        payload: value
    }
}

export function setCartCheckoutDisplay() {
    return {
        type: types.CART_CHECKOUT,
    }
}

export function setValueChange(value) {
    return {
        type: types.CART_VALUE_CHANGE,
        payload : value
    }
}
