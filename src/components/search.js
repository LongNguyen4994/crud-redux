import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
        }
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.type === "checkbox" ? event.checked : event.target.value;
        this.setState({
            [name]: value,
        }, () => {
            console.log(this.state.filterName);
        });
    }

    onFiltTaskList = () => {
        this.props.onFiltTaskList(this.state.filterName);
    }


    render() {
        return (
            <div className="form-group search-content">
                <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ khóa . . . "
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            name='filterName'
                            value={this.state.filterName}
                            onChange={this.handleChange}
                        />
                    <div className="input-group-append">
                        <button
                            type="button"
                            className="input-group btn btn-primary"
                            id="basic-addon2"
                            onClick={this.onFiltTaskList}>
                            <i className="fa fa-search"></i> &nbsp;
                            Tìm
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFiltTaskList: (filterData) => {
            dispatch(actions.filtTaskList(filterData));
        }
    }
}


export default connect(null, mapDispatchToProps)(Search);
