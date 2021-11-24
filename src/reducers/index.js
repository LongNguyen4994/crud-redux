import { combineReducers } from "redux";
import tasks from './tasks';
import showModal from "./showModal";
import updateTask from './updateTask';
import filterTaskList from './filterTaskList';
import sortTaskList from './sortTaskList';

const myReducer = combineReducers({
    tasks : tasks,
    showModal: showModal,
    updateTask: updateTask,
    filterTaskList,
    sortTaskList,
});

export default myReducer;