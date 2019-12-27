import axios from '../axios/axios';
import { GET_COMMENT_DATA, GET_RATING, GET_COMMENT_USER } from './actionTypes';

export const getCommentData = (id) => async dispatch => {
    await axios
        .get('/api/Comment/List?productId=' + id)
        .then(res => dispatch({ type: GET_COMMENT_DATA, payload: res.data }));
}

export const addComment = (comment) => async dispatch => {
    await axios
        .post('/api/Comment/Save', comment)
        .then(res => console.log(res));
}

export const getRating = (id) => async dispatch => {
    await axios
        .get('/api/Comment/GetRatingComment?productId=' + id)
        .then(res => dispatch({ type: GET_RATING, payload: res.data }));
}

export const getCommentUser = (userId, productId) => async dispatch => {
    await axios
        .get('/api/Comment/GetCommentUser?userId=' + userId + '&productId=' + productId)
        .then(res => dispatch({ type: GET_COMMENT_USER, payload: res.data }));
}