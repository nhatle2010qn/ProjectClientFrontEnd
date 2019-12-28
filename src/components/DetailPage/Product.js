import React, { Component } from 'react';
import RatingList from './RatingList';
import Review from './Review';
import CommentList from './CommentList';
import { addProductToCart, loadProductInCart } from '../../actions/cartAction';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }

    AddQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    SubQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1
        })
    }

    addCart = async () => {
        const { id, name, price, mainUrl } = this.props.product;
        let cart = {
            id: id,
            productName: name,
            productPrice: price,
            mainUrl: mainUrl,
            quantity: this.state.quantity
        }
        this.props.dispatch(addProductToCart(cart));
        await this.props.dispatch(loadProductInCart());
        this.props.history.push('/Cart');
    }
    render() {
        let { product, comment, rating } = this.props;
        if (product.id !== undefined) {
            return (
                <div className="row">
                    <div className="col-md-5 col-md-push-2">
                        <div id="product-main-img">
                            <div className="product-preview">
                                <img src={"http://localhost:44322/wwwroot/Image/Products/" + product.mainUrl} alt={product.name} />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-2  col-md-pull-5">
                        <div id="product-imgs">
                            <div className="product-preview">
                                <img src={"http://localhost:44322/wwwroot/Image/Products/" + product.mainUrl} alt={product.name} />
                            </div>

                            <div className="product-preview">
                                <img src={"http://localhost:44322/wwwroot/Image/Products/" + product.mainUrl} alt={product.name} />
                            </div>

                            <div className="product-preview">
                                <img src={"http://localhost:44322/wwwroot/Image/Products/" + product.mainUrl} alt={product.name} />
                            </div>

                            <div className="product-preview">
                                <img src={"http://localhost:44322/wwwroot/Image/Products/" + product.mainUrl} alt={product.name} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="product-details">
                            <h2 className="product-name">{product.name}</h2>
                            <div>
                                <StarRatings
                                 starRatedColor="red"
                                  rating={rating ? rating.rating : 0}
                                  starDimension="20px"
                                  starSpacing="5px"
                                />
                                <Link className="review-link">{comment.length} Review(s) | Add your review</Link>
                            </div>
                            <div>
                                <h3 className="product-price">${product.price} </h3>
                               
                            </div>
                            <p>{product.description}</p>

                           

                            <div className="add-to-cart">
                                <div className="qty-label">
                                    Qty
                                            <div className="input-number">
                                        <input type="number" value={this.state.quantity} readOnly />
                                        <span className="qty-up" onClick={this.AddQuantity}>+</span>
                                        <span className="qty-down" onClick={this.SubQuantity}>-</span>
                                    </div>
                                </div>
                                <button className="add-to-cart-btn" onClick={this.addCart}><i className="fa fa-shopping-cart"></i> add to cart</button>
                            </div>

                            <ul className="product-btns">
                                <li><Link><i className="fa fa-heart-o"></i> add to wishlist</Link></li>
                                <li><Link><i className="fa fa-exchange"></i> add to compare</Link></li>
                            </ul>

                            <ul className="product-links">
                                <li>Category:</li>
                                <li><Link>Laptop</Link></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div id="product-tab">
                            <ul className="tab-nav">
                                <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                                <li><Link data-toggle="tab">Details</Link></li>
                                <li><Link data-toggle="tab">Reviews {comment.length}</Link></li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab1" className="tab-pane fade in active">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab2" className="tab-pane fade in">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab3" className="tab-pane fade in">
                                    <div className="row">
                                        <RatingList rating={this.props.rating} />
                                        <div className="col-md-6">
                                            <div id="reviews">
                                                <CommentList comments={comment} />

                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <Review productId={this.props.product.id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>fsaf</div>
            )
        }
    }
}
export default connect()(withRouter(Product));
