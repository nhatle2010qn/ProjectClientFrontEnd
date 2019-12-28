import { ADD_PRODUCT_TO_CART, LOAD_PRODUCT_IN_CART, ADD_QUANTITY, REMOVE_PRODUCT, DELETE_CART } from "./actionTypes";
import axios from '../axios/axios';

export const addProductToCart = (cart) => dispatch => {
    dispatch({ type: ADD_PRODUCT_TO_CART, cart })
}

export const loadProductInCart = () => dispatch => {
    dispatch({
        type: LOAD_PRODUCT_IN_CART
    })
}

export const addQuantity = (id, quantity) => dispatch => {
    dispatch({
        type: ADD_QUANTITY, id, quantity
    })
}

export const removeProduct = (id) => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT, id
    })
}

export const postCart = (cart) => async dispatch =>{
    await axios
    .post('/api/Order/AddOrder', cart)
    .then(res => console.log(res));   
}

export const deleteCart = () => async dispatch =>{
    dispatch({
        type: DELETE_CART
    })
}