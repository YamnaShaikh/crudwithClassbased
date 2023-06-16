import React, { Component } from 'react';
import { createUser, updateUser } from '../Redux/userAction';
import { connect } from "react-redux"
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
} from "react-reactive-form";

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const TextInput = ({ handler, touched, hasError, meta }) => (
    <div className="form-group">
        <input
            style={{ margin: '20px' }}
            type={meta.type || "text"}
            className={`form-control ${touched && hasError("required") ? "is-invalid" : ""}`}
            placeholder={`Enter ${meta.label}`}
            {...handler()}
        />
        {touched && hasError("required") && <div className="invalid-feedback">{`${meta.label} is required`}</div>}
    </div>
);

class AddUser extends Component {
    userForm = FormBuilder.group({
        id: '',
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        rememberMe: false,
    });

    componentDidUpdate(prevProps) {
        debugger;
        const { editUser } = this.props;

        if (editUser != prevProps.editUser) {
            if (editUser != undefined) {
                const { id, username, email, password } = editUser[0];
                this.userForm.patchValue({ id, username, email, password });
            } else {
                this.userForm.reset();
            }
        }
    }



    handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        const id = Date.now();
        // Get the form values and include the generated ID
        const { editUser, createUser, updateUser } = this.props;
        if (editUser != undefined) {
            const formValues = this.userForm.value;
            updateUser(formValues);
        } else {
            const formValues = { ...this.userForm.value, id };
            createUser(formValues);
            console.log("Form values", formValues);
        }

        this.userForm.reset();
    }

    render() {
        // debugger;
        return (
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='Form' style={{ width: "500px", margin: '20px', padding: '20px' }}>
                    <h1>Create User</h1>
                    <FieldGroup
                        control={this.userForm}
                        render={({ get, invalid }) => (
                            <form onSubmit={this.handleSubmit}>
                                <FieldControl
                                    name="username"
                                    render={TextInput}
                                    meta={{ label: "Username" }}
                                />
                                <FieldControl
                                    name="email"
                                    render={TextInput}
                                    meta={{ label: "Email" }}
                                />
                                <FieldControl
                                    name="password"
                                    render={TextInput}
                                    meta={{ label: "Password", type: "password" }}
                                />
                                <button type="submit" className="btn btn-primary">
                                    submit
                                </button>
                            </form>
                        )}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editUser: state.users.editUser,
});

export default connect(mapStateToProps, { createUser, updateUser })(AddUser);






























// import React, { Component } from 'react';
// import { createUser, updateUser } from '../Redux/userAction';
// import { connect } from "react-redux"
// import {
//     FormBuilder,
//     FieldGroup,
//     FieldControl,
//     Validators,
// } from "react-reactive-form";

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const TextInput = ({ handler, touched, hasError, meta }) => (
//     <div className="form-group">
//         <input
//             style={{ margin: '20px' }}
//             type={meta.type || "text"}
//             className={`form-control ${touched && hasError("required") ? "is-invalid" : ""}`}
//             placeholder={`Enter ${meta.label}`}
//             {...handler()}
//         />
//         {touched && hasError("required") && <div className="invalid-feedback">{`${meta.label} is required`}</div>}
//     </div>
// );

// class AddUser extends Component {

//     constructor(props) {
//         super(props);

//         const { editUser } = props; // Assuming `editUser` prop contains the user data for editing

//         if (editUser != undefined) {
//             debugger;
//             this.userForm = FormBuilder.group({
//                 id: editUser[0].id,
//                 username: editUser[0].username,
//                 email: editUser[0].email,
//                 password: editUser[0].password,
//                 rememberMe: false
//             });
//         } else {
//             this.userForm = FormBuilder.group({
//                 username: ["", Validators.required],
//                 email: ["", Validators.required],
//                 password: ["", Validators.required],
//                 rememberMe: false
//             });
//         }
//     }


//     handleSubmit = (e) => {
//         debugger;
//         e.preventDefault();
//         const id = Date.now();
//         // Get the form values and include the generated ID

//         if (this.props.editUser != undefined) {
//             const formValues = { ...this.userForm.value };
//             this.props.updateUser({ formValues });
//         } else {
//             const formValues = { ...this.userForm.value, id };
//             this.props.createUser(formValues);
//             console.log("Form values", formValues);
//         }

//         this.userForm.reset();
//     }


//     //     const initialValues = editUser
//     //         ? {
//     //             id: editUser[0].id,
//     //             username: editUser[0].username,
//     //             email: editUser[0].email,
//     //             password: editUser[0].password,
//     //             rememberMe: false
//     //         }
//     //         : {
//     //             id: Date.now(),
//     //             username: "",
//     //             email: "",
//     //             password: "",
//     //             rememberMe: false
//     //         };

//     //     this.userForm = FormBuilder.group(initialValues);
//     // }

//     // handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     const formValues = this.userForm.value;
//     //     if (this.props.editUser !== undefined) {
//     //         this.props.updateUser(formValues);
//     //     } else {
//     //         this.props.createUser(formValues);
//     //     }
//     //     console.log("Form values", formValues);
//     //     this.userForm.reset();
//     // }

//     render() {
//         return (
//             <div className="container" style={{ display: 'flex', justifyContent: 'center' }} >

//                 <div className='Form' style={{ width: "500px", margin: '20px', padding: '20px' }}>
//                     <h1>Create User</h1>
//                     <FieldGroup
//                         control={this.userForm}
//                         render={({ get, invalid }) => (
//                             <form onSubmit={this.handleSubmit}>

//                                 <FieldControl
//                                     name="username"
//                                     render={TextInput}
//                                     meta={{ label: "Username" }}
//                                 />

//                                 <FieldControl
//                                     name="email"
//                                     render={TextInput}
//                                     meta={{ label: "Email" }}
//                                 />

//                                 <FieldControl
//                                     name="password"
//                                     render={TextInput}
//                                     meta={{ label: "Password", type: "password" }}
//                                 />

//                                 <button type="submit" className="btn btn-primary" >
//                                     submit
//                                 </button>
//                             </form>
//                         )}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }
// const mapStateToProps = state => ({
//     editUser: state.users.editUser,
// });
// export default connect(mapStateToProps, { createUser, updateUser })(AddUser);

