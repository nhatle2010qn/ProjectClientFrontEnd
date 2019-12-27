import React from 'react';
import PropTypes from 'prop-types';
import { DateConvert } from '../utils/DateConvert';
import StarRatings from 'react-star-ratings';

function Comment(props) {
    let {
        comment
    } = props;
    return (
        <li>
            <div className="review-heading">
                <h5 className="name">{comment.userName}</h5>
                <p className="date">{DateConvert(comment.dateReview)}</p>
                <StarRatings
                    starRatedColor="red"
                    rating={comment.rating}
                    starDimension="15px"
                    starSpacing="2px"
                />
            </div>
            <div className="review-body">
                <p>{comment.content}</p>
            </div>
        </li>
    );

}
Comment.protoTypes = {
    comment: PropTypes.object.isRequired
}
export default Comment;
