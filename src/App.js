import React from "react";
import Login from "./login/Login";
import EmployeeList from "../src/employeeList/EmployeeList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App"> 
      <Provider store={store}>
      <Router>
        <Switch>
        <Route exact path="/" component={Login}></Route>
          <Route exact path="/employeeList" component={EmployeeList}></Route>
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
