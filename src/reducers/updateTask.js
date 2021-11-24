import * as types from '../constants/ActionTypes';


var initialState = {
    id: '',
    name: '',
    isActive: 'true',
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_UPDATE_TASK:
            state = action.task;
            return state;
        default: return state;
    }
}

export default myReducer;