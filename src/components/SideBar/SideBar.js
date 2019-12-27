import React, { Component } from 'react';
import Rheostat from 'rheostat';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'rheostat/lib/themes/DefaultTheme';
import { connect } from 'react-redux';
import { getProductDataPaging } from '../../actions/productActions';
import { getCategoryData } from '../../actions/categoryAction';
import { getBrandData } from '../../actions/brandAction';
import CategoryList from './CategoryList';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme({
    rheostat: {
        ...DefaultTheme.rheostat,
        color: {
            ...DefaultTheme.rheostat.color,
            progressBar: 'red',
        },
    },
});
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minPrice: 100,
            maxPrice: 5000,
            categories: [],
            brands: [],
            checkedItems: new Map()
        }
    }
    getCategoryCheckBox = async (id, bool) => {
        const { activePage, pageSize, search } = this.props;
        const {checkedItems, minPrice, maxPrice} = this.state;
        var i = [];
        checkedItems.set(id,bool);
        this.setState({
            checkedItems
        });
        for (var [key, value] of this.state.checkedItems) {
            if (value == true) {
                i.push((key));
            }
        }
        var l = '';
        l = i.join();
        await this.props.dispatch(getProductDataPaging('1', pageSize, search, l, '', minPrice, maxPrice));

    }
    onChangePrice = async (values) => {
        const { activePage, pageSize, search } = this.props;
        if (values.values) {
            var i = [];
            this.props.callBackPrice(values.values[0],values.values[1])
            this.setState({
                minPrice: values.values[0],
                maxPrice: values.values[1]
            });
            for (var [key, value] of this.state.checkedItems) {
                if (value == true) {
                    i.push((key));
                }
            }
            var l = '';
            l = i.join();    
            await this.props.dispatch(getProductDataPaging('1', pageSize, search, l, '', values.values[0],values.values[1]));
        }
        
    }

    async componentDidMount() {
        await this.props.dispatch(getCategoryData());
        await this.props.dispatch(getBrandData());
        this.setState({
            categories: this.props.categories
        })
    }

    onChangeInput = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        const { minPrice, maxPrice, categories } = this.state;
        return (
            <div>
                <CategoryList
                    categories={categories}
                    getCategoryCheckBox={this.getCategoryCheckBox}
                />
                <div className="aside">
                    <h3 className="aside-title">Price</h3>
                    <div className="price-filter">
                        <div id="slider-root">
                            <Rheostat
                                min={100}
                                max={5000}
                                values={[minPrice, maxPrice]}
                                onChange={this.onChangePrice}
                            />
                        </div>

                        <div className="input-number price-min">
                            <input id="price-min" type="number" onChange={this.onChangeInput} name="minPrice" value={minPrice} />
                            <span className="qty-up">+</span>
                            <span className="qty-down">-</span>
                        </div>
                        <span>-</span>
                        <div className="input-number price-max">
                            <input id="price-max" type="number" onChange={this.onChangeInput} name="maxPrice" value={maxPrice} />
                            <span className="qty-up">+</span>
                            <span className="qty-down">-</span>
                        </div>
                    </div>
                </div>

                {/* <div className="aside">
                    <h3 className="aside-title">Brand</h3>
                    <div className="checkbox-filter">
                        <div className="input-checkbox">
                            <input type="checkbox" id="brand-1" />
                            <label>
                                <span></span>
                                SAMSUNG
										<small>(578)</small>
                            </label>
                        </div>
                        <div className="input-checkbox">
                            <input type="checkbox" id="brand-2" />
                            <label>
                                <span></span>
                                LG
										<small>(125)</small>
                            </label>
                        </div>
                        <div className="input-checkbox">
                            <input type="checkbox" id="brand-3" />
                            <label>
                                <span></span>
                                SONY
										<small>(755)</small>
                            </label>
                        </div>
                        <div className="input-checkbox">
                            <input type="checkbox" id="brand-4" />
                            <label>
                                <span></span>
                                SAMSUNG
										<small>(578)</small>
                            </label>
                        </div>
                        <div className="input-checkbox">
                            <input type="checkbox" id="brand-5" />
                            <label >
                                <span></span>
                                LG
										<small>(125)</small>
                            </label>
                        </div>
                        <div className="input-checkbox">
                            <input type="checkbox" id="brand-6" />
                            <label >
                                <span></span>
                                SONY
										<small>(755)</small>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="aside">
                    <h3 className="aside-title">Top selling</h3>
                    <div className="product-widget">
                        <div className="product-img">
                            <img src="./img/product01.png" alt="" />
                        </div>
                        <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        </div>
                    </div>

                    <div className="product-widget">
                        <div className="product-img">
                            <img src="./img/product02.png" alt="" />
                        </div>
                        <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        </div>
                    </div>

                    <div className="product-widget">
                        <div className="product-img">
                            <img src="./img/product03.png" alt="" />
                        </div>
                        <div className="product-body">
                            <p className="product-category">Category</p>
                            <h3 className="product-name"><a href="#">product name goes here</a></h3>
                            <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.category.data,
        brands: state.brand.data
    }
}

export default connect(mapStateToProps)(SideBar);