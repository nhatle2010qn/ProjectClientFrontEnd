import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { getOptionData, removeOption, getOption } from '../../actions/optionAction';
import OptionList from './OptionList';
import Layout from '../Layout/Layout';

class CompareProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: [],
            category: 1,
            detail1: null,
            detail2: null
        }
    }


    componentDidMount = async () => {
        await this.props.dispatch(getOptionData(this.state.category));
        this.setState({
            option: this.props.option
        })
    }

    callBackOption = (detail1, detail2) => {
        this.setState({
            detail1,
            detail2
        })
    }

    onClickRemove(id) {
        this.props.dispatch(removeOption(id));
        this.props.dispatch(getOption());
    }
    render() {
        const style = {
            borderTop: '1px solid #eaeaea',
            borderBottom: '1px solid #eaeaea',
        }

        const style1 = {
            paddingTop: '20px',
            paddingBottom: '20px'
        }

        const x = {
            position: 'relative',
            float: 'right',
            background: 'black',
            color: 'white',
            top: '-10px',
            right: '-10px'
        }
        return (
            <Layout>
                <div className="container">
                    <div className="compare-header" style={style}>
                        <div className="row" style={{ display: "flex", alignItems: "center" }}>
                            <div className="col-xs-6" style={{ textAlign: 'center' }}>
                                <i className="fa fa-laptop fa-3x" aria-hidden="true"></i>
                            </div>
                            <div className="col-xs-6" style={{ textAlign: 'center' }}>
                                <i className="fa fa-mobile fa-3x" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="compare-content" style={style1}>
                        <h2>Compare Product</h2>
                        <div className="compare-product">
                            <table className="tableCompare table" >
                                <thead>
                                    <tr style={{ borderTop: '1px solid #ddd' }}>
                                        <th scope="col"></th>
                                        <th scope="col">
                                            {
                                                this.state.detail1 ? <div className="inner-addon right-addon">
                                                    <button style={x} onClick={() => this.onClickRemove(1)}>
                                                        X
                                                </button>
                                                    <img src={"http://localhost:44322/wwwroot/Image/Products/" + this.state.detail1.mainUrl} alt="" style={{ width: '100px', height: '70px' }} />
                                                    {this.state.detail1.name}
                                                </div>
                                                    :
                                                    <div className="inner-addon right-addon">

                                                        <i className="fa fa-search"></i>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                            }

                                        </th>
                                        <th scope="col">
                                            {
                                                this.state.detail2 ? <div className="inner-addon right-addon">
                                                    <button style={x} onClick={() => this.onClickRemove(2)}>
                                                        X
                                                </button>
                                                    <img src={"http://localhost:44322/wwwroot/Image/Products/" + this.state.detail2.mainUrl} alt="" style={{ width: '100px', height: '70px' }} />
                                                    {this.state.detail2.name}
                                                </div>
                                                    :
                                                    <div className="inner-addon right-addon">

                                                        <i className="fa fa-search"></i>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                            }
                                        </th>
                                    </tr>
                                </thead>
                                <OptionList option={this.state.option} callBackOption={this.callBackOption} />

                            </table>
                        </div>
                    </div>
                </div>
            </Layout>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        option: state.option.data
    }
}
export default connect(mapStateToProps)(CompareProduct);