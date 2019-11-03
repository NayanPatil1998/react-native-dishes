import * as ActionTypes from './ActionTypes'


export const comments = (state = {
    errmsg: null,
    comments: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errmsg: null, comments: action.payLoad }
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errmsg: null}

        default:
            return state;
    }
}