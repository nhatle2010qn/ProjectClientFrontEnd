import React, { Component } from 'react';
import Product from './Product';
import { getCategoryData } from '../../actions/categoryAction';
import { connect } from 'react-redux';

class ProductList extends Component {
    componentDidMount = () => {
        this.props.dispatch(getCategoryData())
    }
    render() {
        var {categories} = this.props;
        return (
            <div className="row" style={{ display: "flex", alignItems: "center" }}>
                {
                    this.props.products ? this.props.products.map(product => (
                        <Product
                            category={categories}
                            key={product.id}
                            product={product}
                        />
                    ))
                    : 'dsds'
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.data
    }
}

export default connect(mapStateToProps)(ProductList);