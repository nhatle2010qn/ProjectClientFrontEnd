import { GET_OPTION_DATA, GET_OPTION_VALUE_DATA, GET_OPTION, REMOVE_OPTION } from "../actions/actionTypes";
import { toast } from 'react-toastify';

const initialState = {
    data: [],
    product1: [],
    product2: [],
    value1: null,
    value2: null
}

export default function (state = initialState, action) {
    let option1 = localStorage.getItem('option1');
    let option2 = localStorage.getItem('option2');
    let detail1 = localStorage.getItem('product1');
    let detail2 = localStorage.getItem('product2');
    switch (action.type) {
        case GET_OPTION_DATA:
            return {
                ...state,
                data: action.payload
            }
        case GET_OPTION_VALUE_DATA:
            if (option1) {
                option1 = JSON.parse(option1);
                if(action.payload == null){
                    toast.error('The product is not config');
                }
                else if (option1[0].productId == action.payload[0].productId) {
                    toast.error('The product is exist');
                }
                else if (option2 == null) {
                    localStorage.setItem('option2', JSON.stringify(action.payload));
                    localStorage.setItem('product2', JSON.stringify(action.product));
                    toast.success('The product is added in compare product');
                }
                else if (option2) {
                    toast.error('The product compare is full');
                }
            }
            else {
                localStorage.setItem('option1', JSON.stringify(action.payload));
                localStorage.setItem('product1', JSON.stringify(action.product));
                toast.success('The product is added in compare product');
            }
            return {
                ...state,
            }
        case GET_OPTION:
            if (option1) {
                option1 = JSON.parse(option1);
                detail1 = JSON.parse(detail1);
            }
            if (option2) {
                option2 = JSON.parse(option2);
                detail2 = JSON.parse(detail2);
            }
            return {
                ...state,
                product1: option1,
                product2: option2,
                value1: detail1,
                value2: detail2
            }
        case REMOVE_OPTION:
            if (action.id == 1) {
                localStorage.removeItem('option1');
                localStorage.removeItem('product1');
                if (option2) {
                    localStorage.setItem('option1', option2);
                    localStorage.setItem('product1', detail2);
                    localStorage.removeItem('option2');
                    localStorage.removeItem('product2');
                }
            }
            if(action.id == 2){
                localStorage.removeItem('option2');
                localStorage.removeItem('product2');
            }
            return{
                ...state             
            }
        default:
            return state;
    }
}