import { REGISTER_ACCOUNT, LOGIN_ACCOUNT, LOAD_ACCOUNT } from "../actions/actionTypes";

const initialState = {
    register: [],
    data: null,
    currentUser: null
}

export default function (state = initialState, action) {
    let user = localStorage.getItem('currentUser');
    switch (action.type) {
        case REGISTER_ACCOUNT:
            return {
                ...state,
                register: action.payload
            }
        case LOGIN_ACCOUNT:
            localStorage.setItem('currentUser', JSON.stringify(action.payload))
            return {
                ...state,
                data: action.payload
            }
        case LOAD_ACCOUNT:
            if (user) {
                state.currentUser = JSON.parse(user)
                return {
                    ...state
                }
            }
            else {
                return state
            }
        default:
            return state;
    }
}