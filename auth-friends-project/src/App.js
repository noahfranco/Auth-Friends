import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import Login from "./components/Login.js"; 

function App() {
  return (
    <Router> 
    <div className="App">
      <p> The begining of my app  </p> 
      <Link to="/login"> Login </Link>
      
      <div>
        <Route path="/login" component={Login} /> 
      </div> 


      
    </div>
    </Router>
  );
}

export default App;
