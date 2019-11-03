import * as ActionTypes from './ActionTypes'


export const dishes = (state = {
    isLoading: true,
    errmsg: null,
    dishes: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errmsg: null, dishes: action.payLoad }
        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errmsg: null, dishes: [] }
        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errmsg: action.payLoad  }
        default:
            return state;
    }
}