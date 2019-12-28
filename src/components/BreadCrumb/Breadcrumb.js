import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BreadCrumb extends Component {
    render() {
        return (
            <div id="breadcrumb" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><Link>Home</Link></li>
                                <li><Link>All Categories</Link></li>
                                <li><Link>Accessories</Link></li>
                                <li><Link>Headphones</Link></li>
                                <li className="active">Product name goes here</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BreadCrumb;