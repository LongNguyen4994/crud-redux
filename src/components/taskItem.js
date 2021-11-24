import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskItem extends Component {

    // change status of isActive
    handleClick = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    deleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    updateTask = () => {
        this.props.onGetUpdateTask(this.props.task);
        this.props.onShowModal();
    }



    render() {
        let { isActive } = this.props.task;
        return (
            <tr>
                <td className='hiddenOnMobile'>{this.props.index}</td>
                <td>{this.props.task.name}</td>
                <td>
                    <button
                        className={isActive ? "btn btn-warning" : "btn btn-secondary"}
                        style={{ width: "100px" }}
                        onClick={this.handleClick}
                    >
                        {isActive ? "Kích Hoạt" : "Ẩn"}
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-info mx-2"
                        onClick={this.updateTask}
                    >
                        <i className="fa fa-pencil" aria-hidden="true"></i> 
                    </button>
                    <button className="btn btn-danger mx-2" onClick={this.deleteTask}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i> 
                    </button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onShowModal: () => {
            dispatch(actions.showModal());
        },
        onGetUpdateTask: (task) => {
            dispatch(actions.getUpdateTask(task));
        },
    }
};

export default connect(null, mapDispatchToProps)(TaskItem);