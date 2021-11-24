import * as types from '../constants/ActionTypes';


var initialState = '';

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_TASKLIST:
            return action.sortData;

        default: return state;
    }
}

export default myReducer;