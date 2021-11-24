import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {connect} from "react-redux";
import * as actions from '../actions/index';

 class NewTask extends Component {

    handleClick = () => {
        this.props.onShowModal();
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleClick} type="button">
                    <i className="fa fa-plus" aria-hidden="true"></i> &nbsp;
                    THÊM CÔNG VIỆC
                </Button>
            </div>
        )
    }
}


const mapDispatchToProp = (dispatch, props) => {
    return {
        onShowModal: () => {
            dispatch(actions.showModal());
        }
    }
}

export default connect(null, mapDispatchToProp)(NewTask);