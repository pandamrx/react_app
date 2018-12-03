'use strict';
import ActionTypes from './ActionTypes';

import AppDispatcher from '../dispatchers/AppDispatcher';

import axios from 'axios';

class PostActions {

    constructor(props) {

    }

    loadMorePosts(pageNum) {


        AppDispatcher.dispatch({
            type: ActionTypes.LOAD_POSTS
        });


    }

    loadPosts() {

        /*let promise = new Promise();

        promise
            .then(function(resp) {

            }, function (response) {
                AppDispatcher.dispatch({
                    type: ActionTypes.LOAD_POSTS,
                    data: response.data
                })

            .catch();*/

        let ajaxPromise = axios
            .get('http://jsonplaceholder.typicode.com/posts');


        ajaxPromise.then(function (response) {
                AppDispatcher.dispatch({
                    type: ActionTypes.LOAD_POSTS,
                    data: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    postDetails(postId) {

        AppDispatcher.dispatch({
            type: ActionTypes.POST_DETAILS,
            postId
        });

    }

    loadComments(postId) {

        axios.get('http://jsonplaceholder.typicode.com/comments?postId='+postId)
            .then(function (response) {

                AppDispatcher.dispatch({
                    type: ActionTypes.LOAD_COMMENTS,
                    comments: response.data,
                    postId: postId
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }


}

export default new PostActions();