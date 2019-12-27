import { combineReducers } from "redux";
import product from './productReducer';
import cart from './cartReducer';
import category from './categoryReducer';
import account from './accountReducer';
import brand from './brandReducer';
import comment from './commentReducer';
import option from './optionReducer';

const rootReducer = combineReducers({
    product,
    cart,
    category,
    account,
    brand,
    comment,
    option
});

export default rootReducer;