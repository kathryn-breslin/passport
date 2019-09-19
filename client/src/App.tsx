import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpComponent from "../src/pages/Signup";
import Login from "../src/pages/Login";

const App: React.FC = () => {
  return (

    <Router>
      <div>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUpComponent}/>
      </div>
    </Router>
  );
}

export default App;
