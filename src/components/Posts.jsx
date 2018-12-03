'use strict';

import React from 'react';

import PostItem from './PostItem';
import {History} from './History';

import PostActions from '../actions/PostActions';

export default class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.loadsPosts = this.loadsPosts.bind(this);

        // PostActions.loadPosts();
    }

    componentDidMount() {

        PostActions.loadPosts();
    }

    renderItems() {
        let items = [];
        for(let i in this.props.data) {
            let post = this.props.data[i];
            items.push(
                <PostItem id={post.id} title={post.title} postBody={post.body}
                          key={i} comments={this.props.comments} />
            );
        }

        return items;

    }

    loadsPosts() {
        this.setState({
            status: 'loaded_posts'
        })
    }


    render() {

        let items = this.renderItems(),
            loader = (items.length > 0) ? false :
                <div className="posts-loader">
                    <img src="http://blog.teamtreehouse.com/wp-content/uploads/2015/05/InternetSlowdown_Day.gif"></img>
                </div>;

        return (
            <div>
                <h1>{this.props.title}</h1>
                {loader}
                <History />
                <div className="items-container">
                    {items}
                </div>
            </div>);
    }
}