'use strict';

import React from 'react';

export default class CommentItem extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        let itemId = 'post-' + this.props.id,
            linkId = 'post-link-' + this.props.id,
            commentsLinkId = 'comments-link-' + this.props.id;
        return (
            /*
            *
            * '<div class="comment-item">' +
             '<h5 class="name">' + item.name + '</h5>' +
             '<div class="email">' + item.email + '</div>' +
             '<div class="comment-text"><p>' + item.body + '</p></div> ' +
             '</div>'
            * */
            <div id={itemId} className="comment-item">
                <h5 className="name">{this.props.name}</h5>
                <div className="email">{this.props.email}</div>
                <div className="comment-text">
                    <p>{this.props.commentBody}</p>
                </div>
            </div>);
    }
}