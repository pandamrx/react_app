'use strict';

import React from 'react';

import PostActions from '../actions/PostActions';

import Comments from './Comments';

export default class PostItem extends React.Component {


    constructor(props) {
        super(props);
        this.loadComments = this.loadComments.bind(this);
        this.state = {
            commentsRendered: false,
            commentsShown: false,
        };
        this.renderComments = this.renderComments.bind(this);
        this.loadComments = this.loadComments.bind(this);
    }

    loadDetails(e) {
        PostActions.postDetails(this.props.id);
        return false;
    }

    loadComments(e) {
        e.preventDefault();

        PostActions.loadComments(this.props.id);



        /*if(!this.state.commentsRendered) {
            PostActions.loadComments(this.props.id);
            this.setState({
                commentsRendered: true,
                commentsShown: true,
            });
        }*/

        // return false;
    }

    renderComments() {
        return (<Comments data={this.props.comments} postId={this.props.id} />);
    }

    render() {
        let itemId = 'post-' + this.props.id,
            linkId = 'post-link-' + this.props.id,
            commentsLinkId = 'comments-link-' + this.props.id;
        return (
            <article id={itemId}>
                <h4>{this.props.title}</h4>
                <p>{this.props.postBody}</p>
                <a href="#" onClick={this.loadDetails} id={linkId}>details</a><span> </span>

                <a href="#" onClick={(e) => this.loadComments(e)} id={commentsLinkId}>comments</a>


                {this.renderComments()}
            </article>);
    }
}