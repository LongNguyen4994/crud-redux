import * as types from '../constants/ActionTypes';

// TASK
export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id: id,
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id: id,
    }
}

export const getUpdateTask = (task) => {
    return {
        type: types.GET_UPDATE_TASK,
        task: task,
    }
}

export const updateTask = (task) => {
    return {
        type: types.UPDATE_TASK,
        task: task,
    }
}

// TASK LIST
export const listAll = () => {
    return {
        type: types.LIST_ALL,
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task: task,
    }
}

export const filtTaskList = (filterData) => {
    return {
        type: types.FILTER_TASKLIST,
        filterData: filterData,
    }
}
export const sortTaskList = (sortData) => {
    return {
        type: types.SORT_TASKLIST,
        sortData: sortData,
    }
}

// MODAL
export const showModal = () => {
    return {
        type: types.SHOW_MODAL,
    }
}

export const closeModal = () => {
    return {
        type: types.CLOSE_MODAL,
    }
}