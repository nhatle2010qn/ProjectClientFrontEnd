import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addQuantity, loadProductInCart, removeProduct } from '../../actions/cartAction';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }
    handleChange = async (ev) => {
        this.props.dispatch(addQuantity(this.props.cart.id, ev.target.value));
        this.setState({
            quantity: ev.target.value
        });
        await this.props.dispatch(loadProductInCart());
    }

    removeProduct = async () => {
        this.props.dispatch(removeProduct(this.props.cart.id));
        await this.props.dispatch(loadProductInCart());
    }
    componentDidMount = () => {
        this.setState({
            quantity: this.props.cart.quantity
        })
    }
    render() {
        var { cart } = this.props;
        return (
            <tr >
                <td className="col-sm-8 col-md-6">
                    <div className="media">
                        <Link className="thumbnail pull-left"> <img className="media-object" src={"http://localhost:44322/wwwroot/Image/Products/" + cart.mainUrl} 
                                                                style={{ width: "72px", height: "72px" }} alt={cart.productName}/> </Link>
                        <div className="media-body">
                            <h4 className="media-heading"><Link>{cart.productName}</Link></h4>
                            <h5 className="media-heading"> by <Link>Brand name</Link></h5>
                            <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                        </div>
                    </div></td>
                <td className="col-sm-1 col-md-1" style={{ textAlign: "center" }}>
                    <input type="number" className="form-control" value={cart.quantity} onChange={this.handleChange} />
                </td>
        <td className="col-sm-1 col-md-1 text-center"><strong>${cart.productPrice}</strong></td>
        <td className="col-sm-1 col-md-1 text-center"><strong>${cart.productPrice * cart.quantity}</strong></td>
                <td className="col-sm-1 col-md-1">
                    <button type="button" className="btn btn-danger" onClick={this.removeProduct}>
                        <span className="fa fa-remove"></span>
                        Remove
                </button>
                </td>
            </tr >
        )
    }
}

CartItem.protoTypes = {
    cart: PropTypes.object.isRequired
}
export default connect()(CartItem)