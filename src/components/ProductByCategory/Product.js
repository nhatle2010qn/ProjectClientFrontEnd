import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { addProductToCart, loadProductInCart } from '../../actions/cartAction';
import { getProductById } from '../../actions/productActions';
import { connect } from 'react-redux';
import {getOptionValueData, getOption} from '../../actions/optionAction';

class Product extends Component {
    onAddToCart = async (id, name, price, mainUrl) => {
        let cart = {
            id: id,
            productName: name,
            productPrice: price,
            mainUrl: mainUrl,
            quantity: 1
        }
        this.props.dispatch(addProductToCart(cart));
        await this.props.dispatch(loadProductInCart());
        this.props.history.push('/Cart');

    }

    onAddCompare = () =>{
        this.props.dispatch(getOptionValueData(this.props.product));
        this.props.dispatch(getOption());
    }


    async onClickLink(id) {
        await this.props.dispatch(getProductById(id));
    }

    componentDidMount() {
        this.loadCategory();
    }
    loadCategory = () => {
        for (var i = 0; i < this.props.category.length; i++) {
            if (this.props.category[i].id === this.props.product.categoryId) {
                return this.props.category[i].name
            }
        }
    }

    render() {
        const { product } = this.props;
        const categoryName = this.loadCategory();
        const styleImage = {
            height: '15vw',
            objectFit: 'cover'
        }
        return (
            <div className="col-md-4 col-xs-6">
                <div className="product ">
                    <div className="product-img">
                        <img src={"http://localhost:44322/wwwroot/Image/Products/" + product.mainUrl} style={styleImage} alt="" />
                        {/* <div className="product-label">
                            <span className="sale">-30%</span>
                            <span className="new">New</span>
                        </div> */}
                    </div>
                    <div className="product-body">
                        <p className="product-category">{categoryName}</p>
                        <h3 className="product-name"><Link to={'/Detail/' + product.id} onClick={() => this.onClickLink(product.id)}>{product.name}</Link></h3>
                        <h4 className="product-price">${product.price}</h4>
                        <div className="product-rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product-btns">
                            <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                            <button className="add-to-compare" onClick={this.onAddCompare}><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                            <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                        </div>
                    </div>
                    <div className="add-to-cart">
                        <button className="add-to-cart-btn" onClick={() => this.onAddToCart(product.id, product.name, product.price, product.mainUrl)}><i className="fa fa-shopping-cart"></i>Add to cart</button>
                    </div>
                </div>
            </div>

        );
    }
}


Product.protoTypes = {
    product: PropTypes.object.isRequired
}

export default connect()(withRouter(Product));