import * as types from '../constants/ActionTypes';


var initialState = false; // close modal

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_MODAL:
            state = true;
            return state;
        case types.CLOSE_MODAL:
            state = false;
            return state;
        default: return state;
    }
}

export default myReducer;