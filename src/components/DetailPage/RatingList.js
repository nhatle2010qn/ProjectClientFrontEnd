import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
class RatingList extends Component {
    render() {
        const {rating} = this.props;
        return (
            <div className="col-md-3">
                <div id="rating">
                    <div className="rating-avg">
                        <span>{rating ? rating.rating : 0}</span>
                        <StarRatings
                            rating={rating ? rating.rating : 0}
                            starDimension="20px"
                            starSpacing="5px"
                        />
                    </div>
                    <ul className="rating">
                        <li>
                            <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="rating-progress">
                                <div style={{ width:  rating ? (rating.rating5 / (rating.rating1
                                     + rating.rating2 + rating.rating3+ rating.rating4 +rating.rating5)* 100) +'%' : 0}}></div>
                            </div>
                                <span className="sum">{rating ? rating.rating5 : 0}</span>
                        </li>
                        <li>
                            <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <div className="rating-progress">
                            <div style={{ width:  rating ? (rating.rating4 / (rating.rating1
                                     + rating.rating2 + rating.rating3+ rating.rating4 +rating.rating5)* 100) +'%' : 0}}></div>
                            </div>
                            <span className="sum">{rating ? rating.rating4 : 0}</span>
                        </li>
                        <li>
                            <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <div className="rating-progress">
                            <div style={{ width:  rating ? (rating.rating3 / (rating.rating1
                                     + rating.rating2 + rating.rating3+ rating.rating4 +rating.rating5)* 100) +'%': 0}}></div>
                            </div>
                            <span className="sum">{rating ? rating.rating3 : 0}</span>
                        </li>
                        <li>
                            <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <div className="rating-progress">
                            <div style={{ width:  rating ? (rating.rating2 / (rating.rating1
                                     + rating.rating2 + rating.rating3+ rating.rating4 +rating.rating5)* 100) +'%': 0}}></div>
                            </div>
                            <span className="sum">{rating  ? rating.rating2 : 0}</span>
                        </li>
                        <li>
                            <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <div className="rating-progress">
                            <div style={{ width:  (rating ? (rating.rating1 / (rating.rating1
                                     + rating.rating2 + rating.rating3+ rating.rating4 +rating.rating5) * 100) +'%': 0)}}></div>
                            </div>
                            <span className="sum">{rating ? rating.rating1 : 0}</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}



export default RatingList;
