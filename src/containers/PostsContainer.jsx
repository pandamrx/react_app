'use strict';

import React, {Component} from 'react';
import {Container} from 'flux/utils';

import PostStore from '../stores/PostStore';
import CommentStore from '../stores/CommentStore';
import PostsView from '../components/Posts';

class PostsContainer extends Component {

    static getStores() {
        return [PostStore, CommentStore];
    }

    static calculateState(prevState) {
        return {
            data: PostStore.getState(),
            comments: CommentStore.getState(),
        };
    }

    render() {
        return <PostsView {...this.state} title={this.props.title}/>;
    }
}

const container = Container.create(PostsContainer);
export default container;