import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subtotal: 0
        }
    }

    componentDidMount = () =>{
        this.props.carts.addedItems.map((cart, key) => (
            this.setState({
                subtotal : this.state.subtotal + (cart.productPrice * cart.quantity)
            })
        )) 
    }

    componentWillReceiveProps = (props) =>{
        props.carts.addedItems.map((cart, key) => (
            this.setState({
                subtotal : this.state.subtotal + (cart.productPrice * cart.quantity)
            })
        )) 
    }
    
    render() {
        return (
            <tbody>
                {this.props.carts.addedItems.map((cart, key) => (
                    <CartItem cart={cart} key={key}/>
                ))}
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td><h3>Total</h3></td>
                    <td className="text-right"><h3><strong>${this.props.carts.total}</strong></h3></td>
                </tr>         
            </tbody>
        )
    }
}

export default CartList;