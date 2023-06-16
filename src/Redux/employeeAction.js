import {
    CREATE_EMPLOYEE,
    DELETE_EMPLOYEE,
    EDIT_EMPLOYEE,
    UPDATE_EMPLOYEE
} from "./userConstants";

export const createEmployee = (values) => (dispatch) => {
    debugger;
    console.log(values);

    dispatch({
        type: CREATE_EMPLOYEE,
        payload: values,
    }
    );
};

export const deleteEmployee = (id) => {
    debugger;
    return {
        type: DELETE_EMPLOYEE,
        payload: id,
    };
};


export const editEmployee = (employeeId) => {
    debugger;
    return {
        type: EDIT_EMPLOYEE,
        payload: {
            id: employeeId
        }
    };
};


export const updateEmployee = (user) => {
    debugger;
    return {
        type: UPDATE_EMPLOYEE,
        payload:
            user

    };
};
