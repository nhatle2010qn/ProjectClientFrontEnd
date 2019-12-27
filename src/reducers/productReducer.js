import { GET_PRODUCT_DATA, GET_PRODUCT_BY_ID, GET_HOT_SELLER_PRODUCT, GET_PRODUCT_DATA_PAGING, GET_RELATED_PRODUCT } from "../actions/actionTypes";

const initialState = {
    data: [],
    dataById: [],
    hotData: [],
    dataPaging: {},
    relatedData: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_DATA:
            return {
                ...state,
                data: action.payload
            };
        case GET_PRODUCT_BY_ID:
            return{
                ...state,
                dataById: action.payload
            };
        case GET_HOT_SELLER_PRODUCT:
            return{
                ...state,
                hotData: action.payload
            };
        case GET_PRODUCT_DATA_PAGING:
            return{
                ...state,
                dataPaging: action.payload
            }
        case GET_RELATED_PRODUCT:
            return{
                ...state,
                relatedData: action.payload
            }
        default:
            return state;
    }
}