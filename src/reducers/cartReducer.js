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
                    if (existed_item.id === state.addedItems[i].id) {
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
            state = JSON.parse(cart);
            for (var k = 0; k < state.addedItems.length; k++) {
                if (action.id === state.addedItems[k].id) {
                    state.addedItems[k].quantity = action.quantity
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
        case REMOVE_PRODUCT:
            state = JSON.parse(cart);
            for (var h = 0; h < state.addedItems.length; h++) {
                if (action.id === state.addedItems[h].id) {
                    state.addedItems.splice(h, 1);
                }
            }
            state.total = 0;
            for (var m = 0; m < state.addedItems.length; m++) {
                state.total += state.addedItems[m].quantity * state.addedItems[m].productPrice
            }
            localStorage.setItem('myCart', JSON.stringify(state))
            return {
                ...state,
            }
        case DELETE_CART:
            localStorage.removeItem('myCart');
            state = {
                addedItems: [],
                total: 0
            }
            return {
                ...state
            }
        default:
            return state;
    }
} 