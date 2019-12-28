import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SectionCategory extends Component{
    render(){
        return(
            <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop01.png" alt="" />
							</div>
							<div className="shop-body">
								<h3>Laptop<br />Collection</h3>
								<Link to='/ProductByCategory' className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop03.png" alt="" />
							</div>
							<div className="shop-body">
								<h3>Accessories<br />Collection</h3>
								<Link to='/ProductByCategory' className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./img/shop02.png" alt="" />
							</div>
							<div className="shop-body">
								<h3>Cameras<br />Collection</h3>
								<Link to='/ProductByCategory' className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}
export default SectionCategory;