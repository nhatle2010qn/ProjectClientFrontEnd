import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
class CartList extends Component {
    render() {
        console.log(this.props.carts);
        return (
            <div className="cart-dropdown">
                {this.props.carts.addedItems.length > 0 ? <div>
                    <div className="cart-list">
                        {this.props.carts.addedItems.map((cart, key) => (
                            <CartItem cart={cart} key={key} />
                        ))}
                    </div>
                    <div className="cart-summary">
                        <small>{this.props.carts.addedItems.length} Item(s) selected</small>
                        <h5>SUBTOTAL: ${this.props.carts.total}</h5>
                    </div>
                    <div className="cart-btns">
                        <Link to='/Cart'>View Cart</Link>
                        <Link to='/Checkout'>Checkout  <i className="fa fa-arrow-circle-right"></i></Link>
                    </div>
                </div> : <div className="text-center">
                        No item in cart
                </div>}

            </div>
        );
    }
}

export default CartList;