import React, { Component } from 'react';
import OrderItem from './OrderItem';

class OrderList extends Component {
    render() {
        return (
            <div className="order-summary">
                <div className="order-col">
                    <div><strong>PRODUCT</strong></div>
                    <div><strong>TOTAL</strong></div>
                </div>
                <div className="order-products">
                    {this.props.orders.addedItems.map((order) =>(
                        <OrderItem order={order} />
                    ))}
                </div>
                <div className="order-col">
                    <div>Shiping</div>
                    <div><strong>FREE</strong></div>
                </div>
                <div className="order-col">
                    <div><strong>TOTAL</strong></div>
                    <div><strong className="order-total">${this.props.orders.total}</strong></div>
                </div>
            </div>
        )
    }
}

export default OrderList;