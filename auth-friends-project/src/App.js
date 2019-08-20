import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import Login from "./components/Login.js"; 
import PrivateRoute from "./components/PrivateRoute.js"; 
import { Server } from 'http';

function App() {
  return (
    <Router> 
    <div className="App">
      <p> The begining of my app  </p>

      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
      
      <div>
        <Route path="/login" component={Login} /> 
        {/* <PrivateRoute exact path="./protected" component={Server} />  */}
      </div> 


      
    </div>
    </Router>
  );
}

export default App;
