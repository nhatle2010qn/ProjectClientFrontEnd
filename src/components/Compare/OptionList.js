import React, { Component } from 'react';
import Option from './Option';

class OptionList extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.option ?
                        this.props.option.map(option => (
                            <Option
                                callBackOption={this.props.callBackOption}
                                key={option.id}
                                option={option}
                            />
                        ))
                        :
                        <div></div>
                }
            </tbody>
        )
    }
}

export default OptionList;