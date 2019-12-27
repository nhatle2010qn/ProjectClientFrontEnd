import React from 'react';
import PropTypes from 'prop-types';

function CartItem(props) {
    let {
        cart
    } = props;
    return (
        <div className="product-widget">
            <div className="product-img">
                <img src={"http://localhost:44322/wwwroot/Image/Products/" + cart.mainUrl} alt="" />
            </div>
            <div className="product-body">
                <h3 className="product-name"><a href="#">{cart.productName}</a></h3>
                <h4 className="product-price"><span className="qty">{cart.quantity}x</span>${cart.productPrice}</h4>
            </div>
            <button className="delete"><i className="fa fa-close"></i></button>
        </div>
    )
}


CartItem.protoTypes = {
    cart: PropTypes.object.isRequired
}
export default CartItem;