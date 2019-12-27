import React from 'react';
import PropTypes from 'prop-types';

function OrderItem(props) {
    let {
        order
    } = props;
    return (
        <div className="order-col">
            <div>{order.quantity}x {order.productName}</div>
            <div>${order.quantity * order.productPrice}</div>
        </div>
    )
}
OrderItem.protoTypes = {
    order: PropTypes.object.isRequired
}
export default OrderItem