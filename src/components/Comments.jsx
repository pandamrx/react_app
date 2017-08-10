'use strict';

import React from 'react';

import CommentItem from './CommentItem';

export default class Comments extends React.Component {

    constructor(props) {
        super(props);
    }

    getPostComment(postID) {
        for(let i in this.props.data) {
            let dataItem = this.props.data[i];
            if(dataItem.postId == postID) {
                return dataItem.comments
            }
        }
    }

    renderItems() {
        let items = [],
            comments = this.getPostComment(this.props.postId);
        for(let i in comments) {
            let comment = comments[i];
            items.push(<CommentItem id={comment.id} name={comment.name} email={comment.email} commentBody={comment.body}
                                    key={i} postId={comment.postId} />);
        }

        return items;

    }

    render() {

        let items = this.renderItems();
        return (
            <div className="comments-container">
                {items}
            </div>
        );
    }
}