import axios from '../axios/axios';
import { GET_BRAND_DATA } from './actionTypes';

export const getBrandData = () => async dispatch => {
    await axios
        .get('/api/Brand/List')
        .then(res => dispatch({ type: GET_BRAND_DATA, payload: res.data }))
}