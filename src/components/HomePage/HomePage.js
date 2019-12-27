import React, { Component } from 'react';
import SectionCategory from '../SectionCategory/SectionCategory';
import HotDeal from '../Hot_Deal/HotDeal';
import ProductList from '../Product/ProductList';
import {connect} from 'react-redux';
import {getProductData, getHotSellerProduct} from '../../actions/productActions';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [],
            hotData: []
        }
    }

    componentDidMount = async () =>{
        await this.props.dispatch(getProductData());
        await this.props.dispatch(getHotSellerProduct());
        this.setState({
            products : this.props.data,
            hotData: this.props.hotSeller
        })
    }
    render() {
        return (
            <div>
                <SectionCategory />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h3 className="title">New Products</h3>
                                    <div className="section-nav">
                                        <ul className="section-tab-nav tab-nav">
                                            <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                                            <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                                            <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                                            <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div>
                                    <div className="products-tabs" style={{ overflowY: "hidden" }}>
                                        <div id="tab1" className="tab-pane active">
                                            <div className="products-slick" data-nav="#slick-nav-1" >
                                            <ProductList
                                                    products = {this.state.hotData}
                                                />
                                            </div>
                                            <div id="slick-nav-1" className="products-slick-nav"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HotDeal />

                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h3 className="title">Top selling</h3>
                                    <div className="section-nav">
                                        <ul className="section-tab-nav tab-nav">
                                            <li className="active"><a data-toggle="tab" href="#tab2">Laptops</a></li>
                                            <li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
                                            <li><a data-toggle="tab" href="#tab2">Cameras</a></li>
                                            <li><a data-toggle="tab" href="#tab2">Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div>
                                    <div className="products-tabs" style={{ overflowY: "hidden" }}>
                                        <div id="tab1" className="tab-pane active">
                                            <div className="products-slick" data-nav="#slick-nav-1">
                                                <ProductList
                                                    products = {this.state.hotData}
                                                />
                                            </div>
                                            <div id="slick-nav-1" className="products-slick-nav"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.product.data,
        hotSeller: state.product.hotData
    }
}

export default connect(mapStateToProps)(HomePage);