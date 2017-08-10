'use strict';

import {ReduceStore} from 'flux/utils';

import ActionTypes from '../actions/ActionTypes';
import AppDispatcher from '../dispatchers/AppDispatcher';

class Comments extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch (action.type) {

            case ActionTypes.LOAD_COMMENTS:
                return state.concat([{
                    postId: action.postId,
                    comments: action.comments
                }]);

            default:
                return state;
        }
    }
}

export default new Comments();