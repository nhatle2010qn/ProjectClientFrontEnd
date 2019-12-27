import React, { Component } from 'react';
import {loginAccount} from '../../actions/accountAction';
import {connect} from 'react-redux';
import { toast } from 'react-toastify';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: false
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (ev) =>{
        ev.preventDefault();
        const user = {
            userName : this.state.username,
            password : this.state.password,
            remember: this.state.remember
        }
        console.log(user);
        await this.props.dispatch(loginAccount(user));
        console.log(this.props.data);
        if(this.props.data){
            toast.success('Login successfully!!!!')
            this.props.show(false);
        }
    }
    render() {
        return (
            <div className="modal-body" >
                <form>
                    <div className="form-group">
                        <label htmlFor="username"><span className="fa fa-user"></span> Username</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder="Enter email" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><span className="fa fa-eye"></span> Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={this.onChange}/>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" />Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-success btn-block" onClick={this.handleSubmit}><span className="fa fa-off"></span> Login</button>
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    return{
        data: state.account.data
    }
}
export default connect(mapStateToProps)(LoginModal);