import { GET_CATEGORIES_DATA } from "../actions/actionTypes";

const initialState = {
    data: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}