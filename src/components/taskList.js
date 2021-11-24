import React, { Component } from 'react';
import TaskItem from './taskItem';
//redux
import { connect } from 'react-redux';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: '-1', 
        }
    }

    handleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = event.type === 'checkbox' ? event.checked : target.value;
        this.setState({
            [name]: value,
        });
    }


    render() {
        let taskList = this.props.taskList;
        
        // sort taskList
        let { sortData } = this.props;
        if (sortData !== '') {
            switch (sortData) {
                case 'default':
                    // Reset taskList
                    taskList = JSON.parse(localStorage.getItem('taskList'));
                    console.log(taskList);
                    break;
                case 'name_increase':
                    taskList.sort((a, b) => {
                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        return x === y ? 0 : x > y ? 1 : -1;
                    });
                    break;

                case 'name_decrease':
                    taskList.sort((a, b) => {
                        return b.name.localeCompare(a.name, undefined, { sensitivity: 'base' });
                        // let x = a.name.toLowerCase();
                        // let y = b.name.toLowerCase();
                        // return x === y ? 0 : x > y ? -1 : 1;
                    });
                    break;

                case 'isActive_true':
                    taskList.sort((a, b) => {
                        let x = a.isActive;
                        let y = b.isActive;
                        return x === y ? 0 : x > y ? -1 : 1;
                    });
                    break;

                case 'isActive_false':
                    taskList.sort((a, b) => {
                        let x = a.isActive;
                        let y = b.isActive;
                        return x === y ? 0 : x > y ? 1 : -1;
                    });
                    break;

                default: break;
            }
        }

        // FILTER DATA
        // filter by name
        let { filterName } = this.state;
        if (filterName !== '') {
            taskList = taskList.filter(task => task.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
        }

        // filter by status
        let { filterStatus } = this.state;
        if (filterStatus !== '-1') {
            filterStatus = (filterStatus === '1') ? true : false;
            taskList = taskList.filter(task => task.isActive === filterStatus);
        }

        // filter by function
        let { filterData } = this.props;
        if (filterData !== '') {
            taskList = taskList.filter(task => task.name.toLowerCase().indexOf(filterData.toLowerCase()) !== -1);
        }

        

        taskList = taskList.map((task, index) => {
            return (
                <TaskItem
                    key={task.id}
                    task={task}
                    index={index + 1}
                />
            );
        })
        return (
            <div className="toDo-content">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='hiddenOnMobile'>STT</th>
                            <th>Tên</th>
                            <th>Trạng Thái</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='hiddenOnMobile'></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    value={this.state.filterName}
                                    onChange={this.handleChange}
                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name='filterStatus'
                                    value={this.state.filterStatus}
                                    onChange={this.handleChange}
                                >
                                    <option value={'-1'}>Tất Cả</option>
                                    <option value={'1'}>Kích Hoạt</option>
                                    <option value={'0'}>Ẩn</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {taskList}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taskList: state.tasks,
        filterData: state.filterTaskList,
        sortData: state.sortTaskList,
    }
};

export default connect(mapStateToProps, null)(TaskList);