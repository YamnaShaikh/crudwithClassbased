//import userReducer from './Reducer/UserReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './Redux/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import employeeReducer from './Redux/employeeReducer';

const reducer = combineReducers({
  users: userReducer,
  employees: employeeReducer
})

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default Store