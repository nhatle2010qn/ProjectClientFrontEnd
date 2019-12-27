import React, { Component } from 'react';
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import { withRouter } from 'react-router-dom';
import { getProductById, getRelatedProduct } from '../../actions/productActions';
import {getCommentData, getRating} from '../../actions/commentAction';
import { connect } from 'react-redux';
import Product from './Product';
import ProductList from '../Product/ProductList';

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            products: [],
            comments: [],
            rating: {}
        }
    }

    componentDidMount = async () => {
        await this.props.dispatch(getProductById(this.props.match.params.id));
        await this.props.dispatch(getRelatedProduct(this.props.match.params.id));
        await this.props.dispatch(getCommentData(this.props.match.params.id));
        await this.props.dispatch(getRating(this.props.match.params.id));
        this.setState({
            product: this.props.dataById,
            products: this.props.data,
            comments: this.props.comments,
            rating: this.props.rating
        })
    }

    componentWillReceiveProps(props){
        this.setState({
            product: props.dataById,
            products: props.data,
            comments: props.comments,
            rating: props.rating
        })
    }

    render() {
        return (
            <div>
                <BreadCrumb />
                <div className="section">
                    <div className="container">
                        <Product product={this.state.product} comment={this.state.comments} rating={this.state.rating}/>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12" >
                                <div className="section-title text-center">
                                    <h3 className="title">Related Products</h3>
                                </div>
                            </div>
                            <ProductList products={this.state.products} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataById: state.product.dataById,
        data: state.product.relatedData,
        comments: state.comment.data,
        rating: state.comment.ratingData
    }
}
export default connect(mapStateToProps)(withRouter(DetailPage));