import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, UPDATE_EMPLOYEE } from "./userConstants";

const initialState = {
    employees: [],
    editEmployee: {},
};
const employeeReducer = (state = initialState, action) => {
    //    debugger;
    switch (action.type) {
        case CREATE_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };

        case DELETE_EMPLOYEE:
            //   debugger;
            return {
                ...state,
                employees: state.employees.filter((employee) => employee.id !== action.payload),
            };

        case EDIT_EMPLOYEE:
            debugger;
            return {
                ...state,
                editEmployee: state.employees.filter(
                    (employee) => employee.id === action.payload.id
                ),
            };

        case UPDATE_EMPLOYEE:
            debugger;
            return {
                ...state,
                employees: state.employees.map((employee) =>
                    employee.id === action.payload.id ? action.payload : employee
                ),
                editEmployee: {}
            };
        default:
            return state;
    }
};

export default employeeReducer;
