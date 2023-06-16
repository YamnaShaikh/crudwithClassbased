import React, { Component } from 'react'
import { createEmployee, updateEmployee } from '../Redux/employeeAction';
import { connect } from "react-redux"
import { FieldGroup, FieldControl, Validators } from 'react-reactive-form'

class AddEmployee extends Component {

    componentDidUpdate(prevProps) {
        debugger;
        const { editEmployee } = this.props;

        if (editEmployee != prevProps.editEmployee) {
            if (editEmployee != undefined) {
                // this.value = {
                //     id: editEmployee[0].id,
                //     username: editEmployee[0].username,
                //     email: editEmployee[0].email,
                //     password: editEmployee[0].password,
                // }
                const { id, username, email, password } = editEmployee[0];
                this.value({ id, username, email, password });
            } else {
                this.reset();
            }
        }
    }


    handleSubmit = (e, value, reset) => {
        debugger;
        e.preventDefault();
        const id = Date.now();
        // Get the form values and include the generated ID
        const { editEmployee, createEmployee, updateEmployee } = this.props;

        const formValues = { ...value, id };
        createEmployee(formValues);
        console.log("Form values", formValues);

        reset();

    }


    render() {
        return (
            <FieldGroup
                render={({ get, invalid, reset, value }) => (
                    <form onSubmit={e => this.handleSubmit(e, value, reset)}>
                        <FieldControl
                            name="username"
                            options={{ validators: Validators.required }}
                            render={({ handler, touched, hasError }) => (
                                <div>
                                    <input {...handler()} />
                                    <span>
                                        {touched && hasError('required') && 'Username is required'}
                                    </span>
                                </div>
                            )}
                        />
                        <FieldControl
                            name="email"
                            options={{ validators: Validators.required }}
                            render={({ handler, touched, hasError }) => (
                                <div>
                                    <input {...handler()} />
                                    <span>
                                        {touched && hasError('required') && 'Email is required'}
                                    </span>
                                </div>
                            )}
                        />
                        <FieldControl
                            name="password"
                            options={{ validators: Validators.required }}
                            render={({ handler, touched, hasError }) => (
                                <div>
                                    <input {...handler()} />
                                    <span>
                                        {touched && hasError('required') && 'Password is required'}
                                    </span>
                                </div>
                            )}
                        />
                        <FieldControl
                            name="rememberMe"
                            render={({ handler }) => (
                                <div>
                                    <input {...handler('checkbox')} />
                                </div>
                            )}
                        />
                        <button type="submit" disabled={invalid}>
                            Submit
                        </button>
                    </form>
                )}
            />
        )
    }
}

const mapStateToProps = state => ({
    editEmployee: state.employees.editEmployee,
});

export default connect(mapStateToProps, { createEmployee, updateEmployee })(AddEmployee);