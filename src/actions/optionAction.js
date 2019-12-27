import axios from '../axios/axios';
import { GET_OPTION_DATA, GET_OPTION_VALUE_DATA, GET_OPTION, REMOVE_OPTION } from './actionTypes';


export const getOptionData = (id) => async dispatch => {
    await axios
        .get('/api/Option/GetOptionList?categoryId=' + id)
        .then(res => dispatch({ type: GET_OPTION_DATA, payload: res.data }))
}


export const getOptionValueData = (product) => async dispatch => {
    await axios
        .get('/api/Option/GetOptionValueList?productId=' + product.id)
        .then(res => dispatch({ type: GET_OPTION_VALUE_DATA, product, payload: res.data }))
}

export const getOption = () => dispatch => {
    dispatch({
        type: GET_OPTION
    })
}

export const removeOption = (id) => dispatch =>{
    dispatch({
        type: REMOVE_OPTION, id
    })
}