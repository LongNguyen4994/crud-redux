import * as types from '../constants/ActionTypes';


var initialState = '';

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TASKLIST:
            return action.filterData;

        default: return state;
    }
}

export default myReducer;