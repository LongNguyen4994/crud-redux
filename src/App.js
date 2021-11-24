import './App.scss';
import React, { Component } from 'react';
import Control from './components/control';
import TaskList from './components/taskList';
import TaskModal from './components/taskModal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  
   render() {

      return (
         <div className="container text-center my-4">
            <h1>TO DO LIST</h1>
            <hr />
            <Control/>
            <hr />

            {/* toDo-content */}
            <TaskList/>

            {/* MODAL THÊM, SỬA CÔNG VIỆC */}
            <TaskModal/>
         </div>
      )
   }
}





