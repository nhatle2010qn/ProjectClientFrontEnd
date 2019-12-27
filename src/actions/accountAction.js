import axios from '../axios/axios';
import { REGISTER_ACCOUNT, LOGIN_ACCOUNT, LOAD_ACCOUNT } from './actionTypes';

export const registerAccount = (register) => async dispatch => {
    await axios
        .post('/api/Account/Register', register)
        .then(res => dispatch({ type: REGISTER_ACCOUNT, payload: res.data }));
}

export const loginAccount = (user) => async dispatch => {
    await axios
        .post('/api/Account/SignIn', user)
        .then(res => dispatch({ type: LOGIN_ACCOUNT, payload: res.data }));
}

export const loadAccount = () => dispatch =>{
    dispatch({
        type: LOAD_ACCOUNT
    })
}