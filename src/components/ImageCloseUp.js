import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/comments';

export class ImageCloseUp extends Component {

    constructor() {
        super();
        this.state = {
            comment: ''
        }
    }

    onInputChange = (event) => {
        this.setState({ comment: event.target.value });
    }

    addComment = (event) => {
        if(event.key == 'Enter') {
            const newComment = { id: this.props.image.id, text: this.state.comment};
            this.props.addComment(newComment);
            this.setState({comment: ''})
        }
    }

    renderComments() {
        if(!this.props.comments) {
            return <div></div>;
        }
        return this.props.comments.map( comment => {
            return <div className="comment-text" key={comment.id}>{comment.text}</div>
        })
    }

    render() {
        return (
            <div className="image-close-up">
                <div className="outer-image left-side">
                    <img src={`/public/assets/images/${this.props.image.url}`} alt="cat pic" onClick={() => this.props.onClickImage({})}/>
                </div>
                <div className="right-side">
                    <div className="comments">
                        {this.renderComments()}
                    </div>
                    <div>
                        <input 
                            className="comment-input" 
                            onChange={this.onInputChange} 
                            onKeyPress={this.addComment}
                            value={this.state.comment}
                            placeholder="Add Comment"
                            />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    return {
        comments: state[ownProps.image.id]
    }
}

export default connect(mapStatetoProps, { addComment })(ImageCloseUp);