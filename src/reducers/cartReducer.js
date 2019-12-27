import { ADD_PRODUCT_TO_CART, LOAD_PRODUCT_IN_CART, ADD_QUANTITY, REMOVE_PRODUCT, DELETE_CART } from "../actions/actionTypes";

const initialState = {
    addedItems: [],
    total: 0
}

export default function (state = initialState, action) {
    let cart = localStorage.getItem('myCart');
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            if (cart) {
                state = JSON.parse(cart);
            }
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.cart.id === item.id)
            if (existed_item) {
                for (var i = 0; i < state.addedItems.length; i++) {
                    if (existed_item.id == state.addedItems[i].id) {
                        state.addedItems[i].quantity = parseInt(state.addedItems[i].quantity) + action.cart.quantity
                    }
                }
                state.total = state.total + action.cart.productPrice
                localStorage.setItem('myCart', JSON.stringify(state))
                return {
                    ...state,
                }
            }
            else {
                //calculating the total
                state.total = state.total + action.cart.productPrice;
                state.addedItems.push(action.cart);
                localStorage.setItem('myCart', JSON.stringify(state))
                return {
                    ...state,
                }
            }

        case LOAD_PRODUCT_IN_CART:
            if (cart) {
                state = JSON.parse(cart)
                return {
                    ...state
                }
            }
            else {
                return state
            }
        case ADD_QUANTITY:
            if (cart) {
                state = JSON.parse(cart);
                for (var i = 0; i < state.addedItems.length; i++) {
                    if (action.id == state.addedItems[i].id) {
                        state.addedItems[i].quantity = action.quantity
                        console.log(state.addedItems[i])
                    }
                }
                state.total = 0;
                for (var j = 0; j < state.addedItems.length; j++) {
                    state.total += state.addedItems[j].quantity * state.addedItems[j].productPrice
                }
                localStorage.setItem('myCart', JSON.stringify(state))
                return {
                    ...state,
                }
            }
        case REMOVE_PRODUCT:
            if (cart) {
                state = JSON.parse(cart);
                for (var i = 0; i < state.addedItems.length; i++) {
                    if (action.id == state.addedItems[i].id) {
                        state.addedItems.splice(i, 1);
                    }
                }
                state.total = 0;
                for (var j = 0; j < state.addedItems.length; j++) {
                    state.total += state.addedItems[j].quantity * state.addedItems[j].productPrice
                }
                localStorage.setItem('myCart', JSON.stringify(state))
                return {
                    ...state,
                }
            }
        case DELETE_CART:
            localStorage.removeItem('myCart');
            state = {
                addedItems: [],
                total: 0
            }
            return{
                ...state
            }
        default:
            return state;
    }
} 