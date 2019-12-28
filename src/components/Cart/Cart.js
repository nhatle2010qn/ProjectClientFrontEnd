import React, { Component } from 'react';
import CartList from './CartList';
import { connect } from 'react-redux';
import { loadProductInCart } from '../../actions/cartAction';
import { withRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carts: {
                addedItems: [],
                total: 0
            }
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch(loadProductInCart());
        this.setState({
            carts: this.props.carts
        })
    }
    componentWillReceiveProps = (props) => {
        this.setState({
            carts: props.carts
        })
    }

    onCheckout = () => {
        this.props.history.push('/Checkout');
    }
    render() {
        const { carts } = this.state;
        return (
            <Layout>
                <div className="container" style={{ marginBottom: "10px" }}>
                    <div className="row">
                        <div className="col-sm-12 col-md-10 col-md-offset-1">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Total</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <CartList carts={carts} />
                            </table>
                        </div>
                        <div className="col-md-12 row" style={{ display: "flex", alignItems: "center" }}>
                            <div className="col-md-6"></div>
                            <div className="col-md-6 row" style={{ display: "flex", alignItems: "center" }}>
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-default">
                                        <span className="fa fa-shopping-cart "></span> Continue Shopping
                                        </button>
                                </div>
                                <div className="col-md-6">
                                    <button type="button" className="btn btn-success" onClick={this.onCheckout}>
                                        Checkout <span className="fa fa-play"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </Layout>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.cart
    }
}

export default connect(mapStateToProps)(withRouter(Cart));