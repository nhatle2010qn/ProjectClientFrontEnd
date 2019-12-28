import React, { Component } from 'react';
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import SideBar from '../SideBar/SideBar';
import { connect } from 'react-redux';
import { getProductData, getProductDataPaging } from '../../actions/productActions';
import ProductList from './ProductList';
import Pagination from 'react-js-pagination';
import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';
import Layout from '../Layout/Layout';

class ProductByCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            activePage: 1,
            pageSize: 9,
            totalItems: 10,
            minPrice: 100,
            maxPrice: 5000,
            search: ''
        }
    }

    async componentDidMount() {
        const { activePage, pageSize, minPrice, maxPrice } = this.state;
        const values = queryString.parse(this.props.location.search);
        var search = ''
        if (values.search !== undefined) {
            search = values.search
        }
        await this.props.dispatch(getProductData());
        await this.props.dispatch(getProductDataPaging(activePage, pageSize, search, '', '', minPrice, maxPrice));
        this.setState({
            products: this.props.dataPaging.productList,
            totalItems: this.props.dataPaging.productLength,
            search: search
        })
    }

    handlePageChange = async (pageNumber) => {
        const { pageSize, minPrice, maxPrice, search } = this.state;
        this.setState({
            activePage: pageNumber
        });
        await this.props.dispatch(getProductDataPaging(pageNumber, pageSize, search, '', '', minPrice, maxPrice));
        this.setState({
            products: this.props.dataPaging.productList,
            totalItems: this.props.dataPaging.productLength
        })
    }



    componentWillReceiveProps(props) {
        this.setState({
            products: props.dataPaging.productList,
            totalItems: props.dataPaging.productLength
        });
    }

    callBackPrice = (minPrice, maxPrice) => {
        this.setState({
            minPrice,
            maxPrice
        })
    }

    render() {
        const { activePage, pageSize, totalItems, search } = this.state;
        return (
            <Layout>
                <div>
                    <BreadCrumb />
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div id="aside" className="col-md-3">
                                    <SideBar activePage={activePage} pageSize={pageSize} search={search} callBackPrice={this.callBackPrice} />
                                </div>
                                <div id="store" className="col-md-9">
                                    <div className="store-filter clearfix">
                                        <div className="store-sort">
                                            <label>
                                                Sort By:
									<select className="input-select">
                                                    <option value="0">Popular</option>
                                                    <option value="1">Position</option>
                                                </select>
                                            </label>

                                            <label>
                                                Show:
									        <select className="input-select">
                                                    <option value="0">20</option>
                                                    <option value="1">50</option>
                                                </select>
                                            </label>
                                        </div>
                                        <ul className="store-grid">
                                            <li className="active"><i className="fa fa-th"></i></li>
                                            <li><Link><i className="fa fa-th-list"></i></Link></li>
                                        </ul>
                                    </div>
                                    <ProductList products={this.state.products} />
                                    <div>
                                        <span className="store-qty">Showing 20-100 products</span>
                                        <Pagination
                                            activePage={activePage}
                                            itemsCountPerPage={pageSize}
                                            totalItemsCount={totalItems}
                                            pageRangeDisplayed={5}
                                            onChange={this.handlePageChange}
                                        />
                                    </div>
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
        products: state.product.data,
        dataPaging: state.product.dataPaging
    }
}

export default connect(mapStateToProps)(withRouter(ProductByCategory));