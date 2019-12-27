import { GET_COMMENT_DATA, GET_RATING, GET_COMMENT_USER } from "../actions/actionTypes";

const initialState = {
    data: [],
    ratingData: {},
    commentUser: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMMENT_DATA:
            return{
                ...state,
                data: action.payload
            }
        case GET_RATING:
            return{
                ...state,
                ratingData: action.payload
            }
        case GET_COMMENT_USER:
            return{
                ...state,
                commentUser: action.payload
            }
        default:
            return state;
    }
}