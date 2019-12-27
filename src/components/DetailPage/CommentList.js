import React, { Component } from 'react';
import Comment from './Comment';


class CommentList extends Component {
    render() {
        return (
            <ul className="reviews">
                {
                    this.props.comments.length > 0 ?
                        this.props.comments.map(comment => (
                            <Comment
                                key={comment.id}
                                comment={comment}
                            />
                        ))
                        :
                        <div>No comments</div>
                }
            </ul>
        );
    }
}



export default CommentList;