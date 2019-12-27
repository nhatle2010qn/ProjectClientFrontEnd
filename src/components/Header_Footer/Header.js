import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProductInCart } from '../../actions/cartAction'
import CartList from './CartList';


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carts: {
				addedItems: [],
				total: 0
			},
			showModal: false,
			search: ''
		}
	}


	onClickLogo = () => {
		this.props.history.push('/');
	}
	componentDidMount = async () => {
		await this.props.dispatch(loadProductInCart());
		this.setState({
			carts: this.props.carts
		})
	}

	handleClickModal = () => {
		this.setState({
			showModal: true
		});
		this.props.showModal(true);
	}

	onChangeSearch = (ev) => {
		this.setState({
			search: ev.target.value
		});
	}

	onClickSubmit = () => {
		this.props.history.push('/ProductByCategory?search=' + this.state.search);
	}

	componentWillReceiveProps(props) {
		this.setState({
			carts: props.carts
		}, () => console.log(this.state.carts))
	}

	render() {
		const { carts, showModal } = this.state;
		return (
			<header>
				<div id="top-header">
					<div className="container">
						<ul className="header-links pull-left">
							<li><a href="#"><i className="fa fa-phone"></i> +021-95-51-84</a></li>
							<li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
							<li><a href="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
						</ul>
						<ul className="header-links pull-right">
							<li><a href="#"><i className="fa fa-dollar"></i> USD</a></li>
							<li><a onClick={this.handleClickModal}><i className="fa fa-user-o"></i> My Account</a></li>
						</ul>
					</div>
				</div>
				<div id="header">
					<div className="container">
						<div className="row">
							<div className="col-md-3">
								<div className="header-logo">
									<a href="#" className="logo">
										<img src="./img/logo.png" onClick={this.onClickLogo} />
									</a>
								</div>
							</div>
							<div className="col-md-6">
								<div className="header-search">
									<form>
										<input className="input" placeholder="Search here" style={{ borderRadius: "40px 0px 0px 40px", width: "435px" }} onChange={this.onChangeSearch} value={this.state.search}
											name='search' />
										<button className="search-btn" onClick={this.onClickSubmit}>Search</button>
									</form>
								</div>
							</div>
							<div className="col-md-3 clearfix">
								<div className="header-ctn">
									<div>
										{/* <a href="#">
											<i className="fa fa-heart-o"></i>
											<span>Your Wishlist</span>
											<div className="qty">2</div>
										</a> */}
									</div>
									<div className="dropdown">
										<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
											<i className="fa fa-shopping-cart"></i>
											<span>Your Cart</span>
											<div className="qty">{carts.addedItems.length}</div>
										</a>
										<CartList carts={carts} />
									</div>
									<div className="menu-toggle">
										<a href="#">
											<i className="fa fa-bars"></i>
											<span>Menu</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		carts: state.cart
	}
}
export default connect(mapStateToProps)(withRouter(Header));