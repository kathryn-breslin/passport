import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LoginComponent extends Component {
    render() {
    
        return (
          <div>
              <Link to="/signup">Sign-Up</Link>
            <h1>Login Page</h1>
          </div>
        )
      }
}

export default LoginComponent;