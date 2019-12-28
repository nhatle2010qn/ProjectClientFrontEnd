import React, { Component } from 'react';
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import OrderList from './OrderList';
import { connect } from 'react-redux';
import { loadProductInCart, postCart, deleteCart } from '../../actions/cartAction';
import { withRouter, Link} from 'react-router-dom';
import { loadAccount } from '../../actions/accountAction';
import Layout from '../Layout/Layout';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: {
                addedItems: [],
                total: 0
            },
            account: {}

        }
    }

    componentDidMount = async () => {
        await this.props.dispatch(loadProductInCart());
        await this.props.dispatch(loadAccount())
        this.setState({
            orders: this.props.carts,
            account: this.props.account
        });
        console.log(this.props.account);
    }

    handleCheckOut = () => {
        var OrderViewModel = {
            couponId: null,
            total: this.state.orders.total,
            userId: this.state.account.id
        }
        let cart = this.state.orders.addedItems;

        let listorderdetailvm = [];

        for (var i = 0; i < cart.length; i++) {
            var order_detail = {
                Id: 0,
                productId: cart[i].id,
                quantity: cart[i].quantity
            }
            listorderdetailvm.push(order_detail);
        }
        let cartOrder = {
            OrderViewModel,
            listorderdetailvm
        }

        this.props.dispatch(postCart(cartOrder));
        this.props.dispatch(deleteCart());
        this.props.history.push('/');
        this.props.dispatch(loadProductInCart());
    }

    render() {
        const { orders, account } = this.state;
        return (
            <Layout>
                <div>
                    <BreadCrumb />
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="billing-details">
                                        <div className="section-title">
                                            <h3 className="title">Billing address</h3>
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="name" placeholder="User Name" value={account.name} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="email" name="email" placeholder="Email" value={account.userName} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="text" name="address" placeholder="Address" value={account.address} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <input className="input" type="tel" name="tel" placeholder="Telephone" value={account.phoneNumber} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <div className="input-checkbox">
                                                <input type="checkbox" id="create-account" />
                                                <label for="create-account">
                                                    <span></span>
                                                    Create Account?
									</label>
                                                <div className="caption">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                                    <input className="input" type="password" name="password" placeholder="Enter Your Password" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shiping-details">
                                        <div className="section-title">
                                            <h3 className="title">Shiping address</h3>
                                        </div>

                                    </div>
                                    <div className="order-notes">
                                        <textarea className="input" placeholder="Order Notes"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-5 order-details">
                                    <div className="section-title text-center">
                                        <h3 className="title">Your Order</h3>
                                    </div>
                                    <OrderList orders={orders} />
                                    <div className="input-checkbox">
                                        <input type="checkbox" id="terms" />
                                        <label for="terms">
                                            <span></span>
                                            I've read and accept the <Link>terms & conditions</Link>
                                        </label>
                                    </div>
                                    <button className="primary-btn order-submit" style={{ marginLeft: "120px" }} onClick={this.handleCheckOut}>Place order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        carts: state.cart,
        account: state.account.currentUser
    }
}
export default connect(mapStateToProps)(withRouter(CheckOut));