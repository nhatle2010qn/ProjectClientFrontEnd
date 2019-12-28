import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HotDeal extends Component{
    render(){
        return(
            <div id="hot-deal" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<Link className="primary-btn cta-btn">Shop now</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default HotDeal;