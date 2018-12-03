'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


import App from '../components/App';
import PostsContainer from '../containers/PostsContainer';

import PostAction from '../actions/PostActions';
import _ from 'lodash';

let title = 'Simple React App';

/*function updateProps(e) {
    title = 'new title';
    renderApp();
}

function renderApp() {

    ReactDOM.render(
        <App title={title} name="main-app" updateProps={updateProps}/>,
        document.getElementById('app')
    );

}

renderApp();*/







ReactDOM.render(
    <PostsContainer title="Articles"/>,
    document.getElementById('posts-app')
);









window.addEventListener('scroll', function(e) {
    let pageNum = 0;
    /**
     * Your Code
     *
     * */
    let test = _.join(['APP', 'React'], ' ');

    PostAction.loadMorePosts(pageNum);

});