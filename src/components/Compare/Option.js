import React, { Component } from 'react';
import { getOption } from '../../actions/optionAction';
import { connect } from 'react-redux';

class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option1: null,
            option2: null
        }
    }

    componentDidMount = async() => {
        await this.props.dispatch(getOption());
        this.setState({
            option1: this.props.option1,
            option2: this.props.option2
        });
        this.props.callBackOption(this.props.detail1, this.props.detail2);
    }

    componentWillReceiveProps(props) {
        this.setState({
            option1: props.option1,
            option2: props.option2
        });
        this.props.callBackOption(props.detail1, props.detail2);
    }
    render() {
        const { option } = this.props;
        const { option1, option2 } = this.state;
        return (
            <tr>
                <th scope="row">{option.name}</th>
                <td className="val">{option1 ? option1.map(element => {
                    if (element.id == option.id) {
                        return element.value
                    }
                }) : ''}</td>
                <td className="val">{option2 ? option2.map(element => {
                    if (element.id == option.id) {
                        return element.value
                    }
                }) : ''}</td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        option1: state.option.product1,
        option2: state.option.product2,
        detail1: state.option.value1,
        detail2: state.option.value2
    }
}

export default connect(mapStateToProps)(Option);