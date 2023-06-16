import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
//import { AddUser } from "./components/AddUser";

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <h1>Hello World</h1>
        <AddEmployee />,
        <EmployeeList />
      </div>
    )
  }
}


export default App;
