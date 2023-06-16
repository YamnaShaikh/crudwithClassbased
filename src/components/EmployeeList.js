// src/components/ListComponent.js
import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { connect } from 'react-redux';
import { deleteEmployee, editEmployee } from '../Redux/employeeAction';

class UserList extends Component {
    handleDelete = employeeId => {
        this.props.deleteUser(employeeId);
    };

    EditRecord = employeeId => {
        this.props.editEmployee(employeeId);
    };

    render() {
        debugger;
        const { employees } = this.props;

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
                        {console.log("employeesdata", employees)}
                        {employees.map((employee) => {
                            {
                                /* debugger; */
                            }

                            return (
                                <>
                                    {console.log(employee)}
                                    <tr className="table-light">
                                        <td>{employee.username}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button type="button"
                                                onClick={() => this.EditRecord(employee.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => this.handleDelete(employee.id)}
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
    employees: state.employees.employees,
});

export default connect(mapStateToProps, { deleteEmployee, editEmployee })(UserList);
