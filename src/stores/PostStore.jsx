'use strict';

import {ReduceStore} from 'flux/utils';

import ActionTypes from '../actions/ActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';


class Posts extends ReduceStore {

    constructor() {
        super(AppDispatcher);


        this._state = [];


    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.LOAD_POSTS:
                return action.data;

            case ActionTypes.SHOW_POSTS:
                return state;
            default:
                return state;
        }
    }

    search() {
        return this._state;
    }
}

export default new Posts();