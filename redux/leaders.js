import * as ActionTypes from './ActionTypes'


export const leaders = (state = {
    isLoading: true,
    errmsg: null,
    leaders: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return { ...state, isLoading: false, errmsg: null, leaders: action.payLoad }
        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errmsg: null, leaders: [] }
        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errmsg: action.payLoad  }
        default:
            return state;
    }
}