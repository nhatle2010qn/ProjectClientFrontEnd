import React, { Component } from 'react';
import Joi from 'joi-browser';
import {connect} from 'react-redux';
import {registerAccount} from '../../actions/accountAction';

var schema = Joi.object().keys({
    usrname: Joi.string().required(),
    psw: Joi.string().required()
})

class RegisterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usrname: '',
            email: '',
            psw: '',
            conpsw: ''
            
        }
    }

    handleRegister = (ev) => {
        const { usrname, email, psw, conpsw } = this.state;
        ev.preventDefault();
        if (psw === conpsw) {
            const register = {
                'name' : usrname,
                'email': email,
                'phoneNumber': '01231313131',
                'password': psw
            }
            this.props.dispatch(registerAccount(register));
            
        }
        else {
            window.alert('Confirm password is wrong');

        }
    }

    onBlur = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = this.state.name;
        var data = {
            [name] : value
        }
        if(Joi.validate(data,schema).error){

        }
        else{

        }
        console.log(Joi.validate(data, schema).error.details[0].message);
        
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        const { usrname, email, psw, conpsw, usrerr} = this.state;
        return (
            <div className="modal-body" >
                <form className="needs-validation" noValidate>
                    <div className="form-group">
                        <label htmlFor="usrname"><span className="fa fa-user"></span> Name</label>
                        <input type="text" className="form-control" id="usrname" value={usrname} name="usrname"
                        onBlur={this.onBlur}
                         placeholder="Enter Your Full Name" onChange={this.onChange}  required/>
                         {
                             usrerr ? <span>Err</span> : <span></span>
                         }
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><span className="fa fa-email"></span> Email</label>
                        <input type="text" className="form-control" id="email" value={email} name="email" onChange={this.onChange} placeholder="Enter email" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="psw"><span className="fa fa-eye"></span> Password</label>
                        <input type="password" className="form-control" id="psw" name="psw" onChange={this.onChange} value={psw} placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="conpsw"><span className="fa fa-eye"></span>Confirmed Password</label>
                        <input type="password" className="form-control" id="conpsw" name="conpsw" onChange={this.onChange} value={conpsw} placeholder="Enter Confirm password" />
                    </div>
                    <button type="submit" className="btn btn-success btn-block" onClick={this.handleRegister}><span className="fa fa-off"></span> Login</button>
                </form>
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        login: state.account.register
    }
}
 
export default connect(mapStateToProps)(RegisterModal);