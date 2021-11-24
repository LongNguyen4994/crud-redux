import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortData: 'default',
        }
    }

    handleSelect = (eventKey) => {
        this.setState({
            sortData: eventKey
        });
        this.props.onGetSortValue(eventKey);
    }

    render() {
        let { sortData } = this.state;

        return (
            <div style={{ marginLeft: '30px' }}>
                <Dropdown onSelect={this.handleSelect}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sắp xếp
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{margin:0}}>
                        <Dropdown.Item
                            as="button"
                            eventKey="default"
                            className={sortData === 'default' ? 'sortSelected' : ''}
                        >
                            Mặc định
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            as="button"
                            eventKey="name_increase"
                            className={sortData === 'name_increase' ? 'sortSelected' : ''}
                        >
                            Tên: A - Z
                        </Dropdown.Item>
                        <Dropdown.Item
                            as="button"
                            eventKey="name_decrease"
                            className={sortData === 'name_decrease' ? 'sortSelected' : ''}
                        >
                            Tên: Z - A
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            as="button"
                            eventKey="isActive_true"
                            className={sortData === 'isActive_true' ? 'sortSelected' : ''}
                        >
                            Kích Hoạt Trước
                        </Dropdown.Item>
                        <Dropdown.Item
                            as="button"
                            eventKey="isActive_false"
                            className={sortData === 'isActive_false' ? 'sortSelected' : ''}
                        >
                            Ẩn Trước
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetSortValue: (sortData) => {
            dispatch(actions.sortTaskList(sortData));
        }
    }
}

export default connect(null, mapDispatchToProps)(Sort);