import * as types from '../constants/ActionTypes';

// generate random 4 characters
var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// generate id
var generateID = () => {
    return s4() + "-" + s4();
}

// find index function
var findIndex = (id, arr) => {
    let index = -1;
    if (id) {
        index = arr.findIndex(task => task.id === id);
    }
    return index;
}

var data = JSON.parse(localStorage.getItem('taskList'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    // find index of received task in taskList
    var index = -1;

    switch (action.type) {
        // TASK
        case types.UPDATE_STATUS:
            index = findIndex(action.id, state);
            if (index !== -1) {
                state[index] = { ...state[index], isActive: !state[index].isActive }
            }
            localStorage.setItem('taskList', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            // delete task
            index = findIndex(action.id, state);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('taskList', JSON.stringify(state));
            }
            return [...state];
        case types.UPDATE_TASK:
            index = findIndex(action.task.id, state);
            if (index !== -1) {
                state.splice(index, 1, action.task);
            }
            localStorage.setItem('taskList', JSON.stringify(state));
            return [...state];


        // TASK LIST
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id: generateID(),
                name: action.task.name,
                isActive: action.task.isActive
            }
            console.log(newTask);
            state.push(newTask);
            localStorage.setItem('taskList', JSON.stringify(state));
            return [...state];

        default: return state;
    }
}

export default myReducer;