// src/components/ListComponent.js
import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { connect } from 'react-redux';
import { deleteUser, editUser } from '../Redux/userAction';

class UserList extends Component {
    handleDelete = userId => {
        this.props.deleteUser(userId);
    };

    EditRecord = userId => {
        this.props.editUser(userId);
    };

    render() {
        const { users } = this.props;

        return (
            <div className='container'>
                {/* <h2>User List</h2> */}
                <Table striped hover variant="danger">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log("usersdata", users)}
                        {users.map((user) => {
                            {
                                /* debugger; */
                            }

                            return (
                                <>
                                    {console.log(user)}
                                    <tr className="table-light">
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button type="button"
                                                onClick={() => this.EditRecord(user.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => this.handleDelete(user.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
});

export default connect(mapStateToProps, { deleteUser, editUser })(UserList);
