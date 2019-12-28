import React, { Component } from 'react';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';

class ModalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: 'lg',
            showModal: false
        }
    }

    handleClick = (ev) => {
        this.setState({
            body: ev
        })
    }

    handleCloseModal = () =>{
        this.setState({
            showModal: false
        })
    }

    componentWillReceiveProps = (props) => {
        this.setState({
            showModal: props.show
        })
    }
    showModal = (data) =>{
        this.setState({
            showModal: data
        })
    }

    handleBody = () => {
        if (this.state.body === 'lg') {

            return (
                <LoginModal
                    show={this.showModal}                
                />
            )
        }
        else {
            return (
                <RegisterModal />
            );
        }
    }
    render() {
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            },
            overlay: { zIndex: 1000 }
        };

        let body = this.handleBody();
        return (
            <div>
                <Modal
                    isOpen={this.state.showModal}
                    style={customStyles}

                >
                    <div className="Modal-content" style={{width: '700px', height: 'auto'}}>
                        <div className="Modal-header row nav nav-tabs" style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                            <div className="col-lg-6 active" style={{ textAlign: 'center', cursor: 'pointer'}} >
                                <Link onClick={() => this.handleClick('lg')}>Login</Link>
                            </div>
                            <div className="col-lg-6" style={{ textAlign: 'center', cursor: 'pointer' }}>
                                <Link onClick={() => this.handleClick('re')}>Register</Link>
                            </div>
                        </div>
                        {body}
                    </div>
                    <div className="Modal-footer">
                        <button type="button" className="btn btn-default" onClick={this.handleCloseModal}>Close</button>
                    </div>

                </Modal>
            </div>
        );
    }
}
Modal.setAppElement('#root');
export default ModalLogin;