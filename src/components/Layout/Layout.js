import React, {Component} from 'react';
import Header from '../Header_Footer/Header';
import Footer from '../Header_Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Modal from '../LoginModal/Modal';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Layout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal : false
        }
    }
    
    showModal = (child) =>{
        this.setState({
            showModal : child
        })
    }
    render(){
        let {showModal} = this.state;
        return(
            <div>
                <Header showModal = {this.showModal}/>
                    <Navigation />
                    {this.props.children}
                <ToastContainer />
                <Footer />
                <Modal
                    show = {showModal}
                />
            </div>
        )
    }
}

export default Layout;