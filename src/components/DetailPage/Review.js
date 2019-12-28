import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import {loadAccount} from '../../actions/accountAction';
import {addComment, getCommentData} from '../../actions/commentAction';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating : 0,
            currentUser: null,
            reviewInput: ''
        }
    }
    changeRating = ( newRating, name )=> {
        this.setState({
          rating: newRating
        });
      }
    
      onChangeInput = (ev) =>{
        this.setState({
            reviewInput: ev.target.value
        });

    }
    
    componentDidMount = async () =>{
        await this.props.dispatch(loadAccount());
        this.setState({
            currentUser: this.props.currentUser
        });
    }
    onSubmit = async (event) =>{
        event.preventDefault();
        if(this.state.reviewInput === ''){
            toast.error('Please enter to review input');
        }
        if(this.state.rating === 0){
            toast.error('Please rating to review');
        }
        if(this.state.reviewInput !== '' && this.state.rating !== 0 && this.state.currentUser !== null){
            const comment = {
                userId : this.state.currentUser.id,
                productId: this.props.productId,
                content: this.state.reviewInput,
                rating: this.state.rating
            }
            this.props.dispatch(addComment(comment));
        }

        await this.props.dispatch(getCommentData(this.props.productId));
        toast.success('Add comment successfully!!!!')
        window.scrollTo(0, 0)

    }
    
    render() {
        return (
            <div id="review-form">
                <form className="review-form">
                    <textarea className="input" placeholder="Your Review" onChange={this.onChangeInput}></textarea>
                    <div className="input-rating">  
                        <span>Your Rating: </span>
                        <div className="stars">
                            <StarRatings
                                rating={this.state.rating}
                                starRatedColor="blue"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                                starDimension="30px"
                                starSpacing="5px"
                            />
                        </div>
                    </div>
                    <button className="primary-btn" onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        currentUser: state.account.currentUser
    }
}

export default connect(mapStateToProps)(Review);