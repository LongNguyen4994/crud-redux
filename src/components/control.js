import React, { Component } from 'react';
import NewTask from './newTask';
import Search from './search';
import Sort from './sort';

class Control extends Component {
    render() {
        return (
            <div className="row toDo-function">
                <div className="col-md-6">
                    {/* search */}
                    <Search/>
                </div>

                <div className="col-md-6" style={{display: 'flex'}}>
                    {/* thêm công việc - Button trigger modal */}
                    <NewTask/>
                    {/* <Button variant="primary">Primary</Button> */}

                    {/* sắp xếp */}
                    <Sort style={{margin: "20px"}}/>
                </div>
            </div>
        )
    }
}



export default Control;