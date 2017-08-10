'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';
import PostsContainer from './containers/PostsContainer';

let title = 'Simple React App';

function updateProps(e) {
    title = 'new title';
    renderApp();
}

function renderApp() {

    ReactDOM.render(
        <App title={title} name="main-app" updateProps={updateProps}/>,
        document.getElementById('app')
    );

}

renderApp();




ReactDOM.render(
    <PostsContainer title="Articles"/>,
    document.getElementById('posts-app')
);