import axios from '../axios/axios';
import { GET_CATEGORIES_DATA } from './actionTypes';

export const getCategoryData = () => async dispatch => {
    await axios
        .get('/api/Category/List')
        .then(res => dispatch({ type: GET_CATEGORIES_DATA, payload: res.data }))
}