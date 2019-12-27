import axios from '../axios/axios';
import { GET_PRODUCT_DATA, GET_PRODUCT_BY_ID, GET_HOT_SELLER_PRODUCT, GET_PRODUCT_DATA_PAGING, GET_RELATED_PRODUCT } from './actionTypes';

export const getProductData = () => async dispatch => {
    await axios
        .get('/api/Product/GetProductList')
        .then(res => dispatch({ type: GET_PRODUCT_DATA, payload: res.data }))
}

export const getProductById = (id) => async dispatch => {
    await axios
        .get('api/Product/GetById/' + id)
        .then(res => dispatch({ type: GET_PRODUCT_BY_ID, payload: res.data }))
}

export const getHotSellerProduct = () => async dispatch => {
    await axios
        .get('api/Product/GetHotSeller')
        .then(res => dispatch({ type: GET_HOT_SELLER_PRODUCT, payload: res.data }))
}

export const getProductDataPaging = (page, size, search, idCategory, idBrand, minPrice, maxPrice) => async dispatch => {
    await axios
        .get('api/Product/GetProductByCategoryPaging?page=' + page + '&size=' + size + '&search=' + search + '&idCategory=' + idCategory + '&idBrand=' + idBrand + '&stPrice=' + minPrice + '&enPrice=' + maxPrice)
        .then(res => dispatch({ type: GET_PRODUCT_DATA_PAGING, payload: res.data }))
}

export const getRelatedProduct = (id) => async dispatch => {
    await axios
        .get('api/Product/GetProductRelated?id=' + id)
        .then(res => dispatch({ type: GET_RELATED_PRODUCT, payload: res.data }));
}

